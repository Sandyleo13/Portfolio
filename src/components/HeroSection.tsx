
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-primary-light to-white">
      <div className="animate-fade-in space-y-4">
        <h1 className="text-4xl md:text-6xl font-mono font-bold text-secondary">
          Sandipan Das
        </h1>
        <h2 className="text-xl md:text-2xl font-mono text-primary-dark">
          WEB DEVELOPER (MERN STACK) | TRANSITIONING INTO DEVOPS
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
          Mumbai, India
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button variant="outline" size="icon">
            <a href="https://github.com/Sandyleo13" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="https://www.linkedin.com/in/sandipan-das-4bb71b319/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="mailto:sandipandas0816@gmail.com">
              <MailIcon className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
