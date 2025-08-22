import { Github, Linkedin, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/daveevardone12',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/marlon-dave-evardone-1a5013297/',
      label: 'LinkedIn'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/marlondave.evardone',
      label: 'Facebook'
    }
  ];

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/20 text-muted-foreground hover:text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  title={social.label}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              © 2024 Jino Docena. All rights reserved.
            </p>
            <p className="flex items-center justify-center space-x-1 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
              <span>and lots of prayers</span>
            </p>
            <p className="text-sm">
              "Don't give up, God is always there."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;