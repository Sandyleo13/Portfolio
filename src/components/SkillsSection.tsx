
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Java (Basics)", "Shell Scripting"]
  },
  {
    title: "Web Tech",
    skills: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "DevOps Tools",
    skills: ["Git", "GitHub", "Docker (Learning)", "GitHub Actions (Learning)", "Linux"]
  },
  {
    title: "Cloud",
    skills: ["AWS (Basics)", "Netlify", "Vercel"]
  },
  {
    title: "Others",
    skills: ["Arduino", "ESP32", "Canva", "Fritzing (IoT Circuits)"]
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-16 px-6" id="skills">
      <div className="container mx-auto">
        <h2 className="text-3xl font-mono font-bold text-center mb-12 text-secondary">
          Skills & Abilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-mono text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
