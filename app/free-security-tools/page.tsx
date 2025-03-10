"use client"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Mail, Search, Lock, AlertTriangle, Key, UserCheck } from "lucide-react";
import { securityTools } from "@/data/security-tools";
import { SiteHeader } from "@/components/site-header";

const iconMap = {
  Shield: Shield,
  Mail: Mail,
  Search: Search,
  Lock: Lock,
  AlertTriangle: AlertTriangle,
  Key: Key,
  UserCheck: UserCheck,
};

export default function FreeSecurityTools() {
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    const colorMap = {
      Shield: "text-blue-600",
      Mail: "text-red-600",
      Search: "text-green-600",
      Lock: "text-purple-600",
      AlertTriangle: "text-amber-600",
      Key: "text-blue-600",
      UserCheck: "text-indigo-600",
    };
    
    return IconComponent ? (
      <IconComponent className={`w-6 h-6 ${colorMap[iconName as keyof typeof colorMap]}`} />
    ) : null;
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Free Cybersecurity Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protect your business with these essential free security tools and resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityTools.map((tool, index) => (
              <Card key={index} className="p-6 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  {getIcon(tool.icon)}
                  <h2 className="text-xl font-semibold">{tool.title}</h2>
                </div>
                <p className="text-muted-foreground flex-grow mb-4">
                  {tool.description}
                </p>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open(tool.link, '_blank')}
                >
                  Try Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}