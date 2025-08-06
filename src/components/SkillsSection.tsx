import { Code, Palette, Server, Database, Cloud, BarChart, Brain, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      badgeColor: "bg-blue-100 text-blue-800",
      skills: ["Python", "Java", "C++", "C"]
    },
    {
      title: "Frontend", 
      icon: Palette,
      color: "green",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      badgeColor: "bg-green-100 text-green-800",
      skills: ["React.js", "Angular.js", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "purple",
      bgColor: "bg-purple-50", 
      textColor: "text-purple-700",
      badgeColor: "bg-purple-100 text-purple-800",
      skills: ["Node.js", "Express.js", "Streamlit", "JavaScript"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "yellow",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700", 
      badgeColor: "bg-yellow-100 text-yellow-800",
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      badgeColor: "bg-blue-100 text-blue-800", 
      skills: ["AWS", "Docker", "Postman", "GitHub Actions"]
    },
    {
      title: "BI & Productivity",
      icon: BarChart,
      color: "pink",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
      badgeColor: "bg-pink-100 text-pink-800",
      skills: ["Power BI", "Tableau", "MS Office"]
    },
    {
      title: "AI/LLM Tools",
      icon: Brain,
      color: "orange",
      bgColor: "bg-orange-50", 
      textColor: "text-orange-700",
      badgeColor: "bg-orange-100 text-orange-800",
      skills: ["Claude Code", "ChatGPT", "Gemini AI", "DeepSeek"]
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "teal",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      badgeColor: "bg-teal-100 text-teal-800",
      skills: ["VS Code", "GitHub", "Figma", "Canva"]
    }
  ];

  const expertiseAreas = [
    {
      icon: "🐍",
      title: "Python",
      subtitle: "AI/ML & Backend",
      color: "text-green-600"
    },
    {
      icon: "⚛️",
      title: "React",
      subtitle: "Frontend Development", 
      color: "text-blue-600"
    },
    {
      icon: "🤖",
      title: "AI/ML",
      subtitle: "Machine Learning",
      color: "text-purple-600"
    },
    {
      icon: "☁️",
      title: "Cloud",
      subtitle: "AWS & DevOps",
      color: "text-gray-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I use to bring ideas to life</p>
          <div className="section-divider"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 border border-border card-hover ${category.bgColor}`}
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex items-center mb-4">
                <category.icon className={`h-6 w-6 ${category.textColor} mr-3`} />
                <h3 className={`text-lg font-semibold ${category.textColor}`}>{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-badge ${category.badgeColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-4xl border border-border group-hover:scale-110 transition-transform duration-200"
                style={{ boxShadow: 'var(--shadow-card)' }}>
                {area.icon}
              </div>
              <h3 className={`text-xl font-semibold ${area.color} mb-2`}>{area.title}</h3>
              <p className="text-muted-foreground">{area.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;