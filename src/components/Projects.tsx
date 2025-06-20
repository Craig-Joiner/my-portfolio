import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Reactor",
      description: "A lightweight system monitoring app for Windows",
      image: "ReactorScreenShot.png",
      technologies: ["C#", ".NET (WPF)", "MVVM Architecture"],
      githubUrl: "https://www.github.com/Craig-Joiner/Reactor",
      liveUrl: "",
    },
    {
      title: "Course Planning App",
      description: "Designed to help students organize and manage academic goals",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["C#", ".Net Maui", "MVVM Architecture"],
      githubUrl: "https://www.github.com/Craig-Joiner/Final-Capstone",
      liveUrl: "",
    },
    {
      title: "Inventory Management System",
      description: "Built for managing inventory in a small business or warehouse",
      image: "Inventory Management System.png",
      technologies: ["C#", ".Net (WPF)"],
      githubUrl: "https://www.github.com/Craig-Joiner/Inventory-Management-System",
      liveUrl: "",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio site with modern animations",
      image: "PortfolioScreenShot.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      githubUrl: "https://www.github.com/Craig-Joiner/my-portfolio",
      liveUrl: "",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Github className="h-5 w-5 text-slate-700" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5 text-slate-700" />
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
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

export default Projects;
