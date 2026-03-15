"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Shield,
  BookOpen,
  HelpCircle,
  Info,
  FileText,
  Timer,
  Newspaper,
  Target,
  User,
  ChevronDown,
  BarChart3
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import LanguageSelector from "./LanguageSelector";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Accueil", icon: Shield },
  { href: "/entrainement", label: "S'entraîner", icon: Target },
  { href: "/examen-chronometre", label: "Examen blanc", icon: Timer },
];

const blogLink = { href: "/blog", label: "Blog", icon: Newspaper };

const resourceLinks = [
  { href: "/questions", label: "Questions", icon: FileText },
  { href: "/modules-entrainement", label: "Modules", icon: BookOpen },
  { href: "/comparatif-sites-examen-civique-2026", label: "Comparatif plateformes 2026", icon: BarChart3 },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
  { href: "/a-propos", label: "À propos", icon: Info },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user, loading, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* French Tricolor Bar */}
      <div className="france-tricolor" />
      
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Examen Civique"
              width={180}
              height={54}
              priority
              className="h-8 w-auto sm:h-9"
            />
            <span className="sr-only">Examen Civique</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1",
                    resourceLinks.some((link) => pathname === link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  aria-label="Ressources"
                >
                  Ressources
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {resourceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href={blogLink.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname === blogLink.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {blogLink.label}
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              asChild
              className="px-5 py-2 rounded-full shadow-sm"
            >
              <Link href="/examen-chronometre">Commencer le test</Link>
            </Button>
            <LanguageSelector />
            {!loading && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Profil"
                  >
                    <User className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {user ? (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/compte">Tableau de bord</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/compte#scores">Mes scores</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/compte#parametres">Paramètres</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => signOut()}>
                        Déconnexion
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/login">Connexion</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/inscription">S'inscrire</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-1">
            <LanguageSelector />
            {!loading && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Profil"
                  >
                    <User className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {user ? (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/compte">Tableau de bord</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/compte#scores">Mes scores</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/compte#parametres">Paramètres</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => signOut()}>
                        Déconnexion
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/login">Connexion</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/inscription">S'inscrire</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 z-40 border-t border-border bg-card/95 backdrop-blur-sm animate-fade-in">
          <div className="container-wide py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
            <Link href="/examen-chronometre" onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-full shadow-md py-6">
                Commencer le test
              </Button>
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-2 mt-2">
              <p className="px-4 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Ressources
              </p>
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href={blogLink.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                pathname === blogLink.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <blogLink.icon className="w-5 h-5" />
              {blogLink.label}
            </Link>
            {!loading && (
              <div className="border-t border-border pt-2 mt-2 space-y-2">
                {user ? (
                  <>
                    <Link
                      href="/compte"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      Mon compte
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setIsOpen(false);
                      }}
                      className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      Déconnexion
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Connexion
                      </Button>
                    </Link>
                    <Link href="/inscription" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">
                        S'inscrire
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Sticky CTA */}
    </header>
  );
}
