
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  points: string[];
}

export const ProjectCard = ({ title, description, technologies, points }: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="font-mono text-xl text-primary">{title}</CardTitle>
        <CardDescription className="font-mono">{technologies}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="list-disc list-inside space-y-2">
          {points.map((point, index) => (
            <li key={index} className="text-gray-700">{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
