"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";

export type Profile = {
  id: string;
  email?: string | null;
  is_paid?: boolean | null;
  paid_until?: string | null;
  pack_id?: string | null;
  pack_name?: string | null;
  free_quiz_used?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
};

type AuthContextValue = {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  profileLoading: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<User | null>;
  refreshProfile: (userId?: string) => Promise<Profile | null>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const refreshUserInFlight = useRef<Promise<User | null> | null>(null);

  const refreshProfile = useCallback(
    async (userId?: string) => {
      const targetId = userId ?? user?.id;
      if (!targetId) {
        setProfile(null);
        setProfileLoading(false);
        return null;
      }
      setProfileLoading(true);
      const { data, error } = await supabase
        .from("profiles")
        .select(
          "id, email, is_paid, paid_until, pack_id, pack_name, free_quiz_used, created_at, updated_at",
        )
        .eq("id", targetId)
        .maybeSingle();
      if (error) {
        setProfileLoading(false);
        return null;
      }
      setProfile(data ?? null);
      setProfileLoading(false);
      return data ?? null;
    },
    [user?.id],
  );

  useEffect(() => {
    let isMounted = true;

    supabase.auth.getSession().then(({ data, error }) => {
      if (!isMounted) return;
      if (error) {
        setUser(null);
        setSession(null);
        setProfile(null);
      } else {
        setSession(data.session ?? null);
        setUser(data.session?.user ?? null);
        if (data.session?.user?.id) {
          refreshProfile(data.session.user.id);
        } else {
          setProfile(null);
        }
      }
      setLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      if (nextSession?.user?.id) {
        refreshProfile(nextSession.user.id);
      } else {
        setProfile(null);
        setProfileLoading(false);
      }
      setLoading(false);
    });

    return () => {
      isMounted = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({
      user,
      session,
      profile,
      profileLoading,
      loading,
      signOut: async () => {
        await supabase.auth.signOut();
      },
      refreshUser: async () => {
        if (refreshUserInFlight.current) return refreshUserInFlight.current;
        const run = (async () => {
          const { data, error } = await supabase.auth.getUser();
          if (error) return null;
          const nextUser = data.user ?? null;
          setUser(nextUser);
          setSession((prev) => (prev ? { ...prev, user: nextUser ?? prev.user } : prev));
          if (nextUser?.id) {
            refreshProfile(nextUser.id);
          } else {
            setProfile(null);
          }
          return nextUser;
        })();
        refreshUserInFlight.current = run;
        try {
          return await run;
        } finally {
          refreshUserInFlight.current = null;
        }
      },
      refreshProfile,
    }),
    [user, session, profile, profileLoading, loading, refreshProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
