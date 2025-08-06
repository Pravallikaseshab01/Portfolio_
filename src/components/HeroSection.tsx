import { useState, useEffect } from 'react';
import { Download, Rocket, ChevronDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  const subtitles = [
    "Final Year CSE Student",
    "Full Stack Developer", 
    "AI/ML Innovator"
  ];

  useEffect(() => {
    const words = subtitles[currentSubtitle].split(' ');
    
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + (prev ? ' ' : '') + words[currentWordIndex]);
        setCurrentWordIndex(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setDisplayText('');
        setCurrentWordIndex(0);
        setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentSubtitle, currentWordIndex, subtitles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-secondary dark:from-background dark:to-card">
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
          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto group">
            <img
              src={profileImage}
              alt="S. Sri Pravallika"
              className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-2"
              style={{ boxShadow: 'var(--shadow-hero)' }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            S. SRI PRAVALLIKA
          </h1>
          
          <div className="h-12 mb-6">
            <p className="text-xl md:text-2xl font-medium text-muted-foreground min-h-[2.5rem] animate-fadeIn">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Building AI-powered, native apps that solve real-world problems at scale
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild className="btn-primary group">
              <a href="https://drive.google.com/file/d/sample-resume-link/view" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                View Resume
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              Explore Projects
            </Button>
          </div>

          {/* Social and Theme Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-10 w-10 rounded-full"
            >
              <a href="mailto:pravallkaseshab08@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <ThemeToggle />
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