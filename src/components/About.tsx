import { Code, Database, Zap, Monitor } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
    },
    {
      icon: Zap,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, APIs",
    },
    {
      icon: Monitor,
      title: "C# & WPF Development",
      description: "C#, WPF, Desktop Applications, .NET Framework",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MySQL, SQL Server, Database Design, Optimization",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
           I’m a passionate developer building practical digital solutions 
           that solve real-world problems. I enjoy tackling complex 
           challenges and delivering clean, efficient, and maintainable code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <skill.icon className="h-10 w-10 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {skill.title}
              </h3>
              <p className="text-slate-600">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-xl mb-6">
            I'm always excited to take on new challenges and collaborate on
            interesting projects.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
