import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'AI/ML', 'Full-Stack', 'Frontend', 'Backend'];

  const projects = [
    {
      id: 1,
      title: "AI Resume Screening Platform",
      category: "AI/ML",
      description: "Intelligent resume screening system with job recommendations using AI",
      technologies: ["Streamlit", "Python", "Database", "AI/ML"],
      icon: "📄",
      color: "bg-purple-500"
    },
    {
      id: 2,
      title: "JoinUs Engagement Platform", 
      category: "Full-Stack",
      description: "Full-stack engagement platform with subscription management",
      technologies: ["Node.js", "MySQL", "Express.js", "Frontend"],
      icon: "🌐",
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Gemini Chatbot",
      category: "AI/ML", 
      description: "Contextual AI conversational bot with natural language processing",
      technologies: ["NLP", "AI/ML", "Python", "Gemini AI"],
      icon: "💬",
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "XGBoost House Price Predictor",
      category: "AI/ML",
      description: "Machine learning regression model for real estate price prediction", 
      technologies: ["XGBoost", "Python", "Scikit-learn", "ML"],
      icon: "🏠",
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "Salary Prediction System",
      category: "AI/ML",
      description: "Data-driven salary prediction using machine learning algorithms",
      technologies: ["Python", "Scikit-learn", "Data Analysis", "ML"],
      icon: "💰",
      color: "bg-purple-500"
    },
    {
      id: 6,
      title: "MNIST Digit Classifier",
      category: "AI/ML",
      description: "Convolutional Neural Network for handwritten digit recognition", 
      technologies: ["CNN", "Deep Learning", "TensorFlow", "Python"],
      icon: "🔢",
      color: "bg-pink-500"
    },
    {
      id: 7,
      title: "OpenVista CV Suite",
      category: "AI/ML",
      description: "Collection of computer vision applications using OpenCV",
      technologies: ["OpenCV", "Python", "Computer Vision", "Image Processing"],
      icon: "📸",
      color: "bg-teal-500"
    },
    {
      id: 8,
      title: "Movie Booking System",
      category: "Backend",
      description: "Console-based movie booking system built during quarantine",
      technologies: ["C++", "Data Structures", "OOP", "Console App"],
      icon: "🎬", 
      color: "bg-blue-500"
    },
    {
      id: 9,
      title: "Flappy Bird Game",
      category: "Frontend",
      description: "JavaScript-based arcade game clone with HTML5 canvas",
      technologies: ["JavaScript", "HTML5", "CSS3", "Game Development"],
      icon: "🎮",
      color: "bg-orange-500"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechBadgeColor = (tech: string) => {
    const colorMap: Record<string, string> = {
      'Python': 'bg-blue-100 text-blue-800',
      'AI/ML': 'bg-purple-100 text-purple-800',
      'React.js': 'bg-blue-100 text-blue-800',
      'Node.js': 'bg-green-100 text-green-800',
      'Database': 'bg-gray-100 text-gray-800',
      'Frontend': 'bg-pink-100 text-pink-800',
      'Backend': 'bg-orange-100 text-orange-800'
    };
    return colorMap[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Showcasing innovative solutions across AI/ML, full-stack, and software development
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 border border-border card-hover"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center text-2xl mr-4`}>
                  {project.icon}
                </div>
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`skill-badge ${getTechBadgeColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button className="btn-primary">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;