import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="relative">
              <img
                src={profileImage}
                alt="Jino Docena"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover border-4 border-primary/50 animate-glow-pulse"
              />
              <div className="absolute inset-0 rounded-full bg-glow-gradient opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="glow-text">Jino Docena</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
            Virtual Assistant | Data Analyst | Social Media Manager | Web Developer
          </h2>

          {/* Quote */}
          <p className="text-lg md:text-xl italic text-accent mb-8 max-w-2xl mx-auto">
            "Self-driven professional with 15+ years of government experience, bringing expertise and dedication to dynamic teams."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-xl glow-border transition-all duration-300"
            >
              View My Work
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300"
              asChild
            >
              <a href="https://docs.google.com/document/d/19atGj4LEza10Of6y8I_SGFu4PTBMC6Ov/edit?usp=sharing&ouid=114356221911419002188&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;