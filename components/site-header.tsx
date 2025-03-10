import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center pl-4">
          <Link 
            href="/" 
            className="flex items-center gap-3 transition-colors hover:text-primary"
          >
            <Home className="h-6 w-6" />
            <span className="text-xl font-semibold">CyberSecTools</span>
          </Link>
        </div>
        <nav className="flex items-center gap-8">
          <Link href="/assessment">
            <Button 
              variant={isActive('/assessment') ? "secondary" : "ghost"} 
              className={cn(
                "h-11 px-6 text-base font-medium transition-colors",
                isActive('/assessment') ? "bg-secondary text-secondary-foreground" : "hover:bg-transparent hover:text-primary"
              )}
            >
              Assessment
            </Button>
          </Link>
          <Link href="/advisor">
            <Button 
              variant={isActive('/advisor') ? "secondary" : "ghost"}
              className={cn(
                "h-11 px-6 text-base font-medium transition-colors",
                isActive('/advisor') ? "bg-secondary text-secondary-foreground" : "hover:bg-transparent hover:text-primary"
              )}
            >
              Security Advisor
            </Button>
          </Link>
          <Link href="/free-security-tools">
            <Button 
              variant={isActive('/free-security-tools') ? "secondary" : "ghost"}
              className={cn(
                "h-11 px-6 text-base font-medium transition-colors",
                isActive('/free-security-tools') ? "bg-secondary text-secondary-foreground" : "hover:bg-transparent hover:text-primary"
              )}
            >
              Security Tools
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}