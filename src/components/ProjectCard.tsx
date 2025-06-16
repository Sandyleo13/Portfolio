import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ProjectLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  points: string[];
  links?: ProjectLink[];
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  points, 
  links 
}: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
      <CardHeader>
        <CardTitle className="font-mono text-xl text-primary">{title}</CardTitle>
        <CardDescription className="font-mono">{technologies}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          {points.map((point, index) => (
            <li key={index} className="text-gray-700">{point}</li>
          ))}
        </ul>
        {links && links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {links.map((link, index) => (
              <Button 
                key={index}
                variant="outline" 
                size="sm"
                onClick={() => window.open(link.href, '_blank')}
                className="flex items-center gap-2"
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

