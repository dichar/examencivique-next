"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { PACK_DURATION, PACK_NAME, PACK_PRICE } from "@/lib/payments";

const PACK_FEATURES = [
  "Accès illimité pendant 3 mois",
  "Tous les QCM officiels : CSP, CR, Naturalisation",
  "Suivi de progression et score de réussite",
  "Activation instantanée de votre espace",
  "Sans abonnement : payez une seule fois",
];

type PackPaywallDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  freeLimit: number;
  paymentLink: string;
};

export default function PackPaywallDialog({
  open,
  onOpenChange,
  freeLimit,
  paymentLink,
}: PackPaywallDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 gap-0 overflow-hidden">
        <div className="flex flex-col">
          <div className="border-b border-border/60 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent px-5 pt-5 pb-4 text-center">
            <DialogTitle className="text-xl md:text-2xl">Accès limité</DialogTitle>
            <DialogDescription className="mt-2 text-sm">
              Vous avez utilisé vos {freeLimit} quiz gratuits. Pour continuer à vous entraîner, passez au {PACK_NAME}.
            </DialogDescription>
          </div>

          <div className="p-6 pt-4 flex-1 flex flex-col px-5 md:px-6 pb-5 md:pb-6">
            <div className="text-center mb-3 md:mb-4">
              <p className="text-3xl md:text-4xl font-bold text-primary">{PACK_PRICE}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{PACK_NAME} • Accès {PACK_DURATION}</p>
            </div>

            <ul className="space-y-1.5 md:space-y-2 flex-1 mb-4 md:mb-6">
              {PACK_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="w-full text-sm md:text-base shadow-md hover:shadow-lg transition-shadow">
              <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                Accéder à la version complète
              </a>
            </Button>

            <p className="mt-3 text-xs text-muted-foreground text-center">
              Paiement 100 % sécurisé via Stripe · Accès immédiat · Sans engagement
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
