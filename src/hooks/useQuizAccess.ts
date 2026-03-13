"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";
import type { Profile } from "@/components/AuthProvider";

const FREE_LIMIT = 2;
const ANON_LIMIT = 1;
const COUNT_KEY = "examencivique.quizCount.total";

export const useQuizAccess = (user: User | null, profile: Profile | null) => {
  const [count, setCount] = useState(0);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    let localCount = 0;
    try {
      localCount = Number.parseInt(localStorage.getItem(COUNT_KEY) || "0", 10);
    } catch {
      localCount = 0;
    }

    const metaCount =
      typeof profile?.free_quiz_used === "number"
        ? profile.free_quiz_used
        : typeof user?.user_metadata?.free_quiz_used === "number"
          ? user.user_metadata.free_quiz_used
          : 0;

    const paidUntilRaw =
      (profile?.paid_until as string | undefined) ?? (user?.user_metadata?.paid_until as string | undefined);
    const paidUntilDate = paidUntilRaw ? new Date(paidUntilRaw) : null;
    const isPaidActive =
      Boolean(profile?.is_paid ?? user?.user_metadata?.is_paid) &&
      paidUntilDate !== null &&
      paidUntilDate > new Date();

    setCount(Math.max(localCount, metaCount));
    setPaid(Boolean(user) && isPaidActive);
  }, [user, profile]);

  const requiresSignup = useMemo(() => !user && !paid && count >= ANON_LIMIT, [user, paid, count]);
  const hasAccess = useMemo(() => {
    if (paid) return true;
    return user ? count < FREE_LIMIT : count < ANON_LIMIT;
  }, [paid, user, count]);

  const increment = useCallback(async () => {
    if (paid) return;
    const next = count + 1;
    setCount(next);
    try {
      localStorage.setItem(COUNT_KEY, String(next));
    } catch {
      // ignore
    }

    if (user) {
      try {
        await supabase.from("profiles").update({ free_quiz_used: next }).eq("id", user.id);
      } catch {
        // ignore
      }
    }
  }, [count, paid, user]);

  return {
    count,
    paid,
    hasAccess,
    requiresSignup,
    freeLimit: FREE_LIMIT,
    increment,
  };
};
