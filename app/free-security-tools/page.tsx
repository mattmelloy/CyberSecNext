"use client"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Mail, Search, Lock, AlertTriangle, Key, UserCheck, ChevronRight } from "lucide-react";
import { securityTools, toolCategories } from "@/data/security-tools";
import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useState } from "react";

const iconMap = {
  Shield: ShieldCheck,
  ShieldCheck: ShieldCheck,
  Mail: Mail,
  Search: Search,
  Lock: Lock,
  AlertTriangle: AlertTriangle,
  Key: Key,
  UserCheck: UserCheck,
};

export default function FreeSecurityTools() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    const colorMap: Record<string, string> = {
      Shield: "text-blue-600",
      ShieldCheck: "text-blue-600",
      Mail: "text-red-600",
      Search: "text-green-600",
      Lock: "text-purple-600",
      AlertTriangle: "text-amber-600",
      Key: "text-blue-600",
      UserCheck: "text-indigo-600",
    };
    
    return IconComponent ? (
      <IconComponent className={`w-6 h-6 ${colorMap[iconName] || "text-primary"}`} />
    ) : null;
  };

  // Group tools by category
  const toolsByCategory = securityTools.reduce((acc, tool) => {
    const category = tool.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tool);
    return acc;
  }, {} as Record<string, typeof securityTools>);

  // Filter tools based on selected category
  const displayedCategories = selectedCategory
    ? { [selectedCategory]: toolsByCategory[selectedCategory] || [] }
    : toolsByCategory;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs />
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Free Cybersecurity Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protect your business with these essential free security tools and resources.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Tools
              </Button>
              {toolCategories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className="flex items-center gap-2"
                >
                  {getIcon(category.icon)}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Tools by Category */}
          <div className="space-y-12">
            {Object.entries(displayedCategories).map(([category, tools]) => (
              <div key={category}>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-2xl font-semibold">{category}</h2>
                  <Badge variant="secondary">{tools.length}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  {toolCategories.find(c => c.name === category)?.description}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tools.map((tool, index) => (
                    <Card key={index} className="p-6 flex flex-col hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        {getIcon(tool.icon)}
                        <h3 className="text-lg font-semibold">{tool.title}</h3>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4 text-sm">
                        {tool.description}
                      </p>
                      <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => window.open(tool.link, '_blank')}
                      >
                        Try Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 p-6 rounded-lg border bg-muted/40">
            <h2 className="text-xl font-semibold mb-4">More Australian Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://www.cyber.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
              >
                <ShieldCheck className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold">Australian Cyber Security Centre</p>
                  <p className="text-sm text-muted-foreground">
                    Official government cybersecurity guidance and alerts
                  </p>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://www.cyber.gov.au/protect-yourself/essential-eight/essential-eight-explained"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
              >
                <Lock className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold">Essential Eight Explained</p>
                  <p className="text-sm text-muted-foreground">
                    ACSC&apos;s prioritized mitigation strategies
                  </p>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
