import Link from "next/link";
import Image from "next/image";
import { Shield, FileText, BookOpen, HelpCircle, Scale, Heart, History, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { SUPPORT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/90 mt-auto">
      {/* French Tricolor Bar */}
      <div className="france-tricolor" />
      
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Examen Civique"
                width={180}
                height={54}
                className="h-9 w-auto"
              />
              <span className="sr-only">Examen Civique</span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Répétez l'examen civique dans un environnement réaliste. Questions officielles du Ministère de l'Intérieur.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-sm text-background/80 hover:text-background underline underline-offset-2"
            >
              Support : {SUPPORT_EMAIL}
            </a>
            <div className="official-badge !bg-primary/20 !text-background">
              <Shield className="w-4 h-4" />
              Questions 100% officielles
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Simulateur QCM
                </Link>
              </li>
              <li>
                <Link href="/questions" className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Liste des Questions 2025
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Guide du Déroulement
                </Link>
              </li>
              <li>
                <Link href="/comparatif" className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  OFII vs Naturalisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Themes */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Thématiques</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/themes/valeurs" className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Valeurs de la République
                </Link>
              </li>
              <li>
                <Link href="/themes/histoire" className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center gap-2">
                  <History className="w-4 h-4" />
                  Dates Clés de l'Histoire
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Suivez-nous</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <a 
                href="https://www.facebook.com/qcmcivique" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook @qcmcivique"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/qcmcivique" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter/X @qcmcivique"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/qcmcivique" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram @qcmcivique"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@qcmcivique" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube @qcmcivique"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/qcmcivique" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn @qcmcivique"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="text-sm text-background/70 hover:text-background transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-sm text-background/70 hover:text-background transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="text-sm text-background/70 hover:text-background transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <a 
                  href="https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Source officielle ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/60">
          <p>
            © {new Date().getFullYear()} ExamenCivique.info — Site d'entraînement non officiel
          </p>
          <p className="mt-2">
            Les questions proviennent à 100% du{" "}
            <a 
              href="https://formation-civique.interieur.gouv.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-background"
            >
              Ministère de l'Intérieur
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
