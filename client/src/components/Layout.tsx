/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Shared layout with navigation for all pages
 */

import { Dna } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { href: "/opportunity", label: "Opportunity" },
  { href: "/therapeutics", label: "Therapeutics" },
  { href: "/technology", label: "Technology" },
  { href: "/performance", label: "Performance" },
  { href: "/investors", label: "Investors" },
  { href: "/team", label: "Team" },
  { href: "/use-of-funds", label: "Use of Funds" },
  { href: "/projections", label: "Projections" },
];

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Dna className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl font-semibold tracking-tight">lumastem</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-body text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  location === link.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-medium">
              Request Data Room
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Dna className="w-6 h-6 text-primary" />
              <span className="font-display text-xl font-semibold">lumastem</span>
            </Link>
            <p className="font-body text-sm text-muted-foreground text-center">
              Live Longer. Live Happier. © 2025 Lumastem. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://lumastem.com" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                Website
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
