import { useState, useEffect } from 'react';
import { Download, Rocket, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  
  const subtitles = [
    "Final Year CSE Student",
    "Full Stack Developer", 
    "AI/ML Innovator"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-secondary">
      <div className="portfolio-container text-center">
        {/* Decorative dots */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="space-y-4">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
            <img
              src={profileImage}
              alt="S. Sri Pravallika"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
              style={{ boxShadow: 'var(--shadow-hero)' }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            S. SRI PRAVALLIKA
          </h1>
          
          <div className="h-12 mb-6">
            <p className="text-xl md:text-2xl font-medium text-muted-foreground transition-opacity duration-500">
              {subtitles[currentSubtitle]}
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Building AI-powered, native apps that solve real-world problems at scale
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="btn-primary group">
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              View Resume
            </Button>
            <Button variant="outline" className="btn-secondary group">
              <Rocket className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              Explore Projects
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;