import { useState } from 'react';
import { Mail, Github, Linkedin, Download, Send, MapPin, Calendar, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pravallkaseshab08@gmail.com",
      href: "mailto:pravallkaseshab08@gmail.com",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub", 
      value: "Pravallikaseshab01",
      href: "https://github.com/Pravallikaseshab01",
      color: "bg-gray-50 text-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "s-sri-pravallika", 
      href: "https://linkedin.com/in/s-sri-pravallika",
      color: "bg-blue-50 text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to collaborate on your next project or discuss opportunities
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 border border-border"
              style={{ boxShadow: 'var(--shadow-elevated)' }}>
              <h3 className="text-2xl font-semibold text-foreground mb-8">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-y"
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl p-6 border border-border card-hover"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-lg ${info.color} flex items-center justify-center mr-4`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Resume Download Card */}
            <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Hire?</h3>
              <p className="text-muted-foreground mb-6">Download my latest resume</p>
              <Button className="btn-primary">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Availability Status Card */}
            <div className="bg-green-50 rounded-xl p-8 text-center border border-green-100">
              <div className="flex items-center justify-center mb-4">
                <Circle className="h-3 w-3 text-green-500 fill-current mr-2" />
                <span className="text-green-600 font-medium">Available for Opportunities</span>
              </div>
              <p className="text-muted-foreground">
                Open to full-time roles and exciting projects. Graduating May 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;