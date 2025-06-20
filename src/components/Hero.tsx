
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hi, I'm Craig Joiner
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Craig Joiner
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            As a Full-Stack Developer, I create desktop, mobile, and web apps that combine 
            clean design with robust functionality, aiming to solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <a 
             href="Software_Dev_Resume.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Download CV
            </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="https://www.github.com/Craig-Joiner"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6 text-slate-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="https://www.linkedin.com/in/william-joiner-334935204/"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-slate-700" />
            </a>
            <a
              href="mailto:wjoiner1706@gmail.com"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6 text-slate-700" />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-slate-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;