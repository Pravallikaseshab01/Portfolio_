import { Zap, Users, Lightbulb, Clock } from 'lucide-react';

const AboutSection = () => {
  const strengths = [
    {
      icon: Zap,
      title: "Scalable Architecture",
      description: "Building robust, maintainable systems",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Users,
      title: "Team Player", 
      description: "Collaborative problem-solving approach",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative solutions to complex challenges",
      color: "text-orange-600 bg-orange-50"
    },
    {
      icon: Clock,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies",
      color: "text-green-600 bg-green-50"
    }
  ];

  const stats = [
    { number: "10+", label: "Technologies Mastered" },
    { number: "13+", label: "Dev Tools Used" },
    { number: "15+", label: "Projects Built" }
  ];

  const achievements = [
    { number: "3", label: "Internships Completed" },
    { number: "3", label: "Hackathons Participated" },
    { number: "🏆", label: "Smart India Hackathon Winner" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">
            About Me — Get to know me better
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Final-year B.Tech Computer Science student (graduating May 2026) with strong foundations in full-stack 
            development, AI/ML systems, and embedded computing. I specialize in building scalable, cloud-native 
            applications and intelligent software products combining cutting-edge AI with modern UI/UX and backend 
            architecture.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With expertise in React/React Native, Node.js, Python, C/C++, and Claude Code, I've independently built and 
            deployed 15+ real-world projects across domains like healthcare, finance, and automation. My work spans ML 
            pipelines, REST APIs, real-time systems, and cross-platform apps — all powered by clean code, robust DevOps, 
            and scalable design.
          </p>
        </div>

        {/* Core Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center card-hover border border-border"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className={`w-12 h-12 rounded-lg ${strength.color} flex items-center justify-center mx-auto mb-4`}>
                <strength.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{strength.title}</h3>
              <p className="text-sm text-muted-foreground">{strength.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-12">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {achievements.map((achievement, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-foreground mb-2">{achievement.number}</div>
              <div className="text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;