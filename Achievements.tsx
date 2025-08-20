import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, ExternalLink, FileText } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Open Source Contributor',
      description: 'Contributed to several open source projects.',
      type: 'Community',
      url: 'https://github.com/gubanon',
      color: 'text-yellow-400'
    },
    {
      icon: Award,
      title: 'Best Football Coach',
      description: '2 Time Palarong Pambansa Coach',
      type: 'Competition',
      url: 'https://example.com/',
      certificateUrl: 'https://example.com/certificate.pdf',
      color: 'text-purple-400'
    }
  ];

  const certificates = [
    {
      title: 'Google Data Analytics Certificate',
      issuer: 'Coursera',
      date: '2024',
      credentialId: 'CRS-12345',
      url: '#'
    },
    {
      title: 'Google Cybersecurity',
      issuer: 'Coursera',
      date: '2024',
      credentialId: 'CRS-67890',
      url: '#'
    },
    {
      title: 'Beginner Web Developer',
      issuer: 'Cisco',
      date: '2025',
      credentialId: 'DICT-ITU INITIATIVE',
      url: '#'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
            Achievements
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Achievements */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-accent mb-6">Recognition & Awards</h3>
              
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card
                    key={achievement.title}
                    className="glass-card p-6 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full bg-secondary/20 ${achievement.color}`}>
                        <IconComponent size={32} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold glow-text">{achievement.title}</h4>
                          <Badge className="bg-accent/20 text-accent border-accent/30">
                            {achievement.type}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {achievement.description}
                        </p>
                        
                        <div className="flex space-x-3">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-primary/50 text-primary hover:bg-primary/10"
                            asChild
                          >
                            <a href={achievement.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              View
                            </a>
                          </Button>
                          
                          {achievement.certificateUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-accent/50 text-accent hover:bg-accent/10"
                              asChild
                            >
                              <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer">
                                <FileText className="h-4 w-4 mr-1" />
                                Certificate
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Certificates */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-accent mb-6">Certificates</h3>
              
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <Card
                    key={cert.title}
                    className="glass-card p-6 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-accent font-medium mb-1">{cert.issuer}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Issued: {cert.date}</span>
                          <span>ID: {cert.credentialId}</span>
                        </div>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/50 text-primary hover:bg-primary/10 ml-4"
                        asChild
                      >
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Stats */}
              <Card className="glass-card p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <h4 className="text-xl font-semibold text-accent mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold glow-text">6+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold glow-text">3+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;