import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/assessment", label: "Assessment" },
    { href: "/advisor", label: "Security Advisor" },
    { href: "/security-tips", label: "Security Tips" },
    { href: "/free-security-tools", label: "Security Tools" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center flex-1">
          <Link 
            href="/" 
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Home className="h-5 w-5" />
            <span className="font-semibold">CyberSecTools</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
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
          <div className="md:hidden absolute top-14 left-0 right-0 bg-background border-b">
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}