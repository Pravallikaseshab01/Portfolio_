import { Award, Cloud, Code, Brain, Trophy } from 'lucide-react';

const CertificationsSection = () => {
  const certificationCategories = [
    {
      title: "Cloud Technologies",
      icon: Cloud,
      color: "blue",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      count: 5,
      certifications: [
        { name: "Oracle Cloud Infrastructure Fundamentals", status: "Certification" },
        { name: "OCI Multi-cloud Architect", status: "Certification" },
        { name: "Microsoft AZ-900", status: "Training Badge" },
        { name: "Microsoft DP-900", status: "Training Badge" },
        { name: "Microsoft AI-900", status: "Training Badge" }
      ]
    },
    {
      title: "Programming & Development", 
      icon: Code,
      color: "green",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      count: 5,
      certifications: [
        { name: "Java (NPTEL)", status: "Certification" },
        { name: "Python (Infosys Springboard)", status: "Certification" },
        { name: "SQL (365 Data Science)", status: "Certification" },
        { name: "Python (GUVI)", status: "Certified" },
        { name: "JavaScript (GUVI)", status: "Certified" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      color: "purple", 
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      count: 5,
      certifications: [
        { name: "Data Analytics Essentials(Cisco Networking Academy)", status: "Certified" },
        { name: "AI Introduction (myGreatLearning)", status: "Certified" },
        { name: "AI Fundamentals (Infosys Springboard)", status: "Certification" },
        { name: "AI Fundamentals with IBM SkillsBuild", status: "Certified" },
        { name: "Introduction to Data Science (Cisco Networking Academy)", status: "Certified" }
      ]
    },
    {
      title: "Professional Development",
      icon: Trophy,
      color: "orange",
      bgColor: "bg-orange-50 dark:bg-orange-900/20", 
      count: 2,
      certifications: [
        { name: "MasterCard Job Simulation (Forage)", status: "Certified" },
        { name: "ServiceNow Certified System Administrator", status: "certification (in progress)" }
      ]
    }
  ];

  const summaryStats = [
    { number: "5", label: "Cloud Credentials" },
    { number: "5", label: "Programming Certs" },
    { number: "5", label: "AI/ML Certifications" },
    { number: "2", label: "Professional Certs" }
  ];

  const getIconColor = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "text-blue-600",
      green: "text-green-600", 
      purple: "text-purple-600",
      orange: "text-orange-600"
    };
    return colorMap[color] || "text-gray-600";
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Continuous learning and professional development achievements
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Certification Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certificationCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-8 border border-border card-hover ${category.bgColor}`}
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-white dark:bg-background flex items-center justify-center mr-4`}>
                  <category.icon className={`h-6 w-6 ${getIconColor(category.color)}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${getIconColor(category.color)}`}>
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">({category.count} Credentials)</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.certifications.map((cert, certIndex) => (
                  <div key={certIndex} className="flex items-center justify-between">
                    <span className="text-foreground">{cert.name}</span>
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {summaryStats.map((stat, index) => (
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

export default CertificationsSection;