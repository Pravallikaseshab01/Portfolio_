import { Trophy, Star, Award, Heart, Medal } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Internal First Round SIH Winner – Smart India Hackathon 2024",
      category: "Competition",
      categoryColor: "bg-orange-100 text-orange-800",
      icon: Trophy,
      iconColor: "bg-orange-500",
      date: "2024",
      description: "Achieved first place in the internal first round of Smart India Hackathon 2024, competing against thousands of teams from across India. Developed an innovative AI-powered solution that addressed real-world problems and impressed industry experts."
    },
    {
      id: 2,
      title: "Organizer – 3-Day College Fest (PrajWalan 2024)",
      category: "Leadership", 
      categoryColor: "bg-purple-100 text-purple-800",
      icon: Star,
      iconColor: "bg-purple-500",
      date: "2024",
      description: "Successfully organized and managed the college fest at VUTW with 500+ participants"
    },
    {
      id: 3,
      title: "Infosys Pragati Cohort Member",
      category: "Professional",
      categoryColor: "bg-green-100 text-green-800", 
      icon: Award,
      iconColor: "bg-green-500",
      date: "2024",
      description: "Selected as a member of the exclusive Infosys Pragati program for leadership development"
    },
    {
      id: 4,
      title: "NSS Volunteer",
      category: "Service",
      categoryColor: "bg-pink-100 text-pink-800",
      icon: Heart,
      iconColor: "bg-pink-500", 
      date: "Multi-year",
      description: "Active volunteer in National Service Scheme contributing to community service"
    },
    {
      id: 5,
      title: "State-Level Kho Kho Player",
      category: "Sports",
      categoryColor: "bg-blue-100 text-blue-800",
      icon: Medal,
      iconColor: "bg-blue-500",
      date: "State Level",
      description: "Represented the state in Kho Kho competitions, demonstrating teamwork and athletics"
    }
  ];

  const statisticsRow = [
    { icon: "🏆", number: "1", label: "National Hackathon Win" },
    { icon: "👥", number: "500+", label: "Fest Participants Managed" },
    { icon: "❤️", number: "3", label: "Years of NSS Service" },
    { icon: "🥇", number: "1", label: "State Sports Achievement" }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Recognition</h2>
          <p className="section-subtitle">
            Celebrating milestones in academics, leadership, and community service
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white rounded-xl p-6 border border-border card-hover"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 rounded-lg ${achievement.iconColor} flex items-center justify-center text-white mr-4 flex-shrink-0`}>
                  <achievement.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <span className={`inline-block px-2 py-1 text-xs font-medium ${achievement.categoryColor} rounded-full mb-2`}>
                    {achievement.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{achievement.date}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
          {statisticsRow.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Special Highlight Banner */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Internal First Round SIH Winner – Smart India Hackathon 2024
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Achieved first place in the internal first round of Smart India Hackathon 2024, competing against 
            thousands of teams from across India. Developed an innovative AI-powered solution that addressed 
            real-world problems and impressed industry experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;