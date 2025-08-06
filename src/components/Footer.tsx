import { Github, Linkedin, Mail, ArrowUp, MapPin, Calendar, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    { href: 'https://github.com/Pravallikaseshab01', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/s-sri-pravallika', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:pravallkaseshab08@gmail.com', icon: Mail, label: 'Email' }
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="portfolio-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Personal Branding */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4">S. Sri Pravallika</h3>
              <p className="text-slate-300 mb-6">
                AI/ML Engineer | Full-Stack Developer | B.Tech CSE Student
              </p>
              <p className="text-slate-300 leading-relaxed max-w-sm">
                Building innovative AI-powered solutions and scalable applications. 
                Passionate about leveraging technology to solve real-world problems.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-3" />
                <span>pravallkaseshab08@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Currently based in India</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Calendar className="h-4 w-4 mr-3" />
                <span>Graduating May 2026</span>
              </div>
              <div className="flex items-center text-green-400">
                <Circle className="h-2 w-2 mr-3 fill-current" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2025 S. Sri Pravallika.
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
          
          <div className="text-center mt-4 text-slate-400 text-sm italic">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;