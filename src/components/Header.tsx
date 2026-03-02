"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield, BookOpen, HelpCircle, Info, FileText, Scale, History, Heart, Timer, Newspaper } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import LanguageSelector from "./LanguageSelector";

const navLinks = [
  { href: "/", label: "Accueil", icon: Shield },
  { href: "/examen-chronometre", label: "Examen 45min", icon: Timer },
  { href: "/questions", label: "Questions", icon: FileText },
  { href: "/modules-entrainement", label: "Modules", icon: BookOpen },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
];

const themeLinks = [
  { href: "/themes/valeurs", label: "Valeurs de la République", icon: Heart },
  { href: "/themes/histoire", label: "Dates Clés Histoire", icon: History },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* French Tricolor Bar */}
      <div className="france-tricolor" />
      
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
              <Shield className="w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                Examen Civique
              </span>
              <span className="block text-xs text-muted-foreground">.info</span>
            </div>
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
            <Link
              href="/a-propos"
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname === "/a-propos"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              À propos
            </Link>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <div className="container-wide py-4 space-y-2">
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
                Thématiques
              </p>
              {themeLinks.map((link) => (
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
              href="/a-propos"
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                pathname === "/a-propos"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Info className="w-5 h-5" />
              À propos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
