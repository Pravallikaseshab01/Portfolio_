import { Code, BarChart, BookOpen, Globe } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Turtil", 
      duration: "May 2025 - June 2025",
      location: "Remote",
      type: "Internship",
      description: "Developed AI-powered profile attention simulation engine using FastAPI and Python",
      technologies: ["FastAPI", "Docker", "PostMan", "AI/ML", "Python"],
      icon: Code,
      color: "bg-blue-500",
      position: "right"
    },
    {
      id: 2,
      title: "ML Intern",
      company: "Skolar Mark IT",
      duration: "Oct 2023 - Dec 2024", 
      location: "Remote",
      type: "Internship",
      description: "Built machine learning models and interactive dashboards for data visualization",
      technologies: ["XGBoost", "Flask", "Streamlit", "Python", "Data Science", "Machine Learning"],
      icon: BarChart,
      color: "bg-green-500",
      position: "left"
    },
    {
      id: 3,
      title: "ML Intern",
      company: "Slash Mark IT",
      duration: "Oct 2024 – Dec 2024",
      location: "Remote",
      type: "Internship",
      description: "Built machine learning models and interactive dashboards for data visualization",
      technologies: ["XGBoost", "Flask", "Streamlit", "Python", "Data Science"],
      icon: BarChart,
      color: "bg-teal-500",
      position: "right"
    },
    {
      id: 4,
      title: "Infosys Pragati Cohort",
      company: "Infosys",
      duration: "Jul 2024 – Nov 2024",
      location: "Hybrid",
      type: "Training Program", 
      description: "Intensive training program covering GenAI, Java, and Python with leadership opportunities",
      technologies: ["GenAI", "Java", "Python", "Leadership", "Mentoring"],
      icon: BookOpen,
      color: "bg-purple-500",
      position: "left"
    },
    {
      id: 5,
      title: "Web Developer Intern",
      company: "CodSoft",
      duration: "Apr 2024 – May 2024",
      location: "Remote", 
      type: "Internship",
      description: "Developed responsive web applications and mini-projects using modern web technologies",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      icon: Globe,
      color: "bg-orange-500",
      position: "right"
    }
  ];

  const stats = [
    { number: "4", label: "Professional Experiences" },
    { number: "8", label: "Months of Experience" },
    { number: "15+", label: "Technologies Used" }
  ];

  const getTechBadgeColor = (tech: string) => {
    const colorMap: Record<string, string> = {
      'Python': 'bg-blue-100 text-blue-800',
      'FastAPI': 'bg-green-100 text-green-800',
      'Docker': 'bg-blue-100 text-blue-800',
      'AI/ML': 'bg-purple-100 text-purple-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'Java': 'bg-red-100 text-red-800',
      'GenAI': 'bg-purple-100 text-purple-800'
    };
    return colorMap[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="experience" className="py-20 bg-secondary dark:bg-card">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">Building expertise through hands-on industry experience</p>
          <div className="section-divider"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-accent"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center mb-16 ${
              exp.position === 'left' ? 'flex-row-reverse' : ''
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white z-10"></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${exp.position === 'left' ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
                <div className="bg-card rounded-xl p-6 border border-border card-hover"
                  style={{ boxShadow: 'var(--shadow-card)' }}>
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg ${exp.color} flex items-center justify-center text-white mr-4`}>
                      <exp.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-muted-foreground text-sm mb-1">{exp.duration}</p>
                    <p className="text-muted-foreground text-sm mb-1">{exp.location}</p>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`skill-badge ${getTechBadgeColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;