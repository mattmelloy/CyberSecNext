import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/60">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="pl-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <span className="font-semibold text-lg">CyberSecTest</span>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Free cyber security guidance and assessments designed for Australian
              small businesses.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Explore</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/assessment">
                  Assessment
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/training">
                  Security Training
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/security-tips">
                  Security Guide
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/advisor">
                  Security Advisor
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/free-security-tools">
                  Security Tools
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Trust</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/privacy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/terms">
                  Terms
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/accessibility">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Contact</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Australia</p>
              <p>
                <a className="hover:text-foreground" href="mailto:hello@cybersectools.com">
                  hello@cybersectools.com
                </a>
              </p>
              <p className="text-xs">
                General guidance only. For urgent incidents, contact your IT provider.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          © {year} CyberSecTest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
