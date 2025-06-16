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
                Detail-oriented B.Sc. IT graduate passionate about software development and cloud solutions. 
                Seeking a challenging role where I can apply my backend and frontend skills to deliver impactful digital experiences and continue learning in a fast-paced tech team.
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
                href: "https://github.com/Sandyleo13/Gaming",
                label: "View Repository",
                icon: ExternalLink
              }]}
            />
            <ProjectCard
              title="Sandy Blogs"
              technologies="MERN Stack | Markdown Editor | User Auth | Hosting"
              description="Built a full-stack blogging platform for creating, editing, and publishing posts with user authentication"
              points={[
                "Implemented markdown support for rich text content creation",
                "Used MongoDB for storing blog posts and user data, ensuring secure access",
                "Designed a responsive, SEO-friendly UI with clean navigation and post previews"
              ]}
              links={[{
                href: "https://sandyblogs.netlify.app/",
                label: "Live Site",
                icon: ExternalLink
              }]}
            />
            <ProjectCard
              title="TaskGen GitHub"
              technologies="React | Task Management | UI/UX | Hosting"
              description="Developed a user-focused task management app with a minimalistic interface"
              points={[
                "Enabled task creation, categorization, and live status tracking",
                "Implemented responsive drag-and-drop UI for better productivity flow",
                "Hosted the application with clean routing and performance optimizations"
              ]}
              links={[
                {
                  href: "https://github.com/Sandyleo13/Task-Management",
                  label: "View Repository",
                  icon: ExternalLink
                },
                {
                  href: "https://taskgen.netlify.app/",
                  label: "Live Site",
                  icon: ExternalLink
                }
              ]}
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

