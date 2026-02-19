"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/assessment", label: "Assessment" },
    { href: "/training", label: "Training" },
    { href: "/security-tips", label: "Security Guide" },
    { href: "/advisor", label: "Advisor" },
    { href: "/free-security-tools", label: "Tools" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex items-center flex-1">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 leading-none transition-colors hover:text-primary"
          >
            <ShieldCheck className="h-7 w-7 text-primary -mt-px" />
            <span className="font-semibold text-xl tracking-tight leading-none">CyberSecTools</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button 
                variant={isActive(item.href) ? "secondary" : "ghost"}
                className={cn(
                  "h-9 px-4 text-sm font-medium transition-colors",
                  isActive(item.href) ? "bg-secondary text-secondary-foreground" : "hover:bg-transparent hover:text-primary"
                )}
              >
                {item.label}
              </Button>
            </Link>
          ))}
          <Link href="/assessment">
            <Button className="ml-2 h-9 px-4">Start assessment</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-accent rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b">
            <nav className="container py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button 
                    variant={isActive(item.href) ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start text-sm font-medium",
                      isActive(item.href) ? "bg-secondary text-secondary-foreground" : "hover:bg-transparent hover:text-primary"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Link href="/assessment">
                <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
                  Start assessment
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
