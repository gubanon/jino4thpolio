import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const traits = [
    'Self-driven', 'Detail-oriented', 'Adaptable', 'Dedicated',
    'Administrative Expert', 'Team player', 'Learning focused', 'Efficient'
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Description */}
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg leading-relaxed text-foreground/90">
                I am a self-driven and detail-oriented professional with over 15 years of experience in 
                government service. While I am new to the field of virtual assistance, I am actively 
                self-studying and continuously improving my technical skills.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                My strong background in administration, combined with my adaptability and passion for learning, 
                enables me to quickly grasp new tools and processes. I am eager to bring my expertise, 
                efficiency, and dedication to a dynamic team.
              </p>

              {/* Traits */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent">Key Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {traits.map((trait, index) => (
                    <span
                      key={trait}
                      className="skill-tag animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Experience Cards */}
            <div className="space-y-6">
              {/* Education Card */}
              <Card className="glass-card p-6 animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-accent">Experience</h3>
                    <p className="font-medium">Government Service Professional</p>
                    <p className="text-muted-foreground">15+ Years in Administration</p>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      2009 - Present
                    </div>
                  </div>
                </div>
              </Card>

              {/* Experience Card */}
              <Card className="glass-card p-6 animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-accent/20 text-accent">
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-accent">Current Focus</h3>
                    <p className="font-medium">Virtual Assistant & Data Analytics</p>
                    <p className="text-muted-foreground">Self-studying & Skill Development</p>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      2024 - Present
                    </div>
                    <p className="mt-3 text-sm text-foreground/80">
                      Transitioning into virtual assistance, data entry, data analytics, and social media management.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Certifications */}
              <Card className="glass-card p-6 animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-4 text-accent">Certifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Government Administration</span>
                    <span className="skill-tag">15+ Years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Virtual Assistant Training</span>
                    <span className="skill-tag">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Data Analytics</span>
                    <span className="skill-tag">Learning</span>
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

export default About;