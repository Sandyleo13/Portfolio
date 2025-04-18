
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <section className="py-16 px-6" id="about">
        <div className="container mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-2xl text-primary">Objective</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                A passionate and innovative software developer seeking to leverage my technical skills in web development, 
                data science, and DevOps to create impactful technological solutions. I am committed to continuous learning, 
                problem-solving, and delivering high-quality software that drives meaningful technological advancements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50" id="projects">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold text-center mb-12 text-secondary">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Automated Photo Management System"
              technologies="ESP32-CAM | Arduino UNO | Node.js | Web App | MongoDB"
              description="A comprehensive photo management system with cloud integration"
              points={[
                "Captured images from ESP32-CAM and synced to a cloud-hosted database",
                "Built a web interface to classify photos under 'People' and 'Pets' using metadata",
                "Provided secure access via user login & signup system"
              ]}
            />
            <ProjectCard
              title="Online Game Tournament Website"
              technologies="MERN Stack | MongoDB | Hosting | User Auth"
              description="A platform for managing online gaming tournaments"
              points={[
                "Developed a platform for managing online game events and team registrations",
                "Integrated MongoDB for storing matches, teams, and results",
                "Designed responsive UI with real-time match updates"
              ]}
              links={[{
                href: "https://github.com/Sandyleo13/arena-icon-blitz",
                label: "View Repository",
                icon: ExternalLink
              }]}
            />
          </div>
        </div>
      </section>

      <SkillsSection />

      <section className="py-16 px-6" id="education">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold text-center mb-12 text-secondary">
            Education
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-xl text-primary">
                B.Sc. in Information Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 font-semibold">RD.SH National College | 2022 – 2025</p>
              <p className="text-gray-600 mt-2">CGPA: 7.0 (with backlog cleared)</p>
              <p className="text-gray-600 mt-4">
                Relevant Coursework: Web Programming, Database Management, Cloud Computing, Information
                Security
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;

