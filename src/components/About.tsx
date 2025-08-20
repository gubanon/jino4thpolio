import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const traits = [
    'Focus', 'Problem-solving', 'Dedication', 'Research-driven',
    'Detail oriented', 'Team player', 'Adaptable', 'Curious'
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
                I'm a Computer Engineering graduate from Eastern Samar State University (Class of 2025). 
                I'm a team player who thrives on challenges. I dive deep into research when curious and 
                find purpose in completing what I start.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                My passion is strongest when working on data analytics and web applications. 
                I focus deeply and deliver projects rapidly.
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
                    <h3 className="text-xl font-semibold mb-2 text-accent">Education</h3>
                    <p className="font-medium">Bachelor of Science in Computer Engineering</p>
                    <p className="text-muted-foreground">Eastern Samar State University</p>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      June 17, 2025
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
                    <h3 className="text-xl font-semibold mb-2 text-accent">Experience</h3>
                    <p className="font-medium">OJT Intern – Web App Developer</p>
                    <p className="text-muted-foreground">SMART Technology Research Development and Innovation Center (STRDIC)</p>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      June–July 2024 • Borongan City
                    </div>
                    <p className="mt-3 text-sm text-foreground/80">
                      Developed a centralized application for LGU project transparency and public access.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Certifications */}
              <Card className="glass-card p-6 animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-4 text-accent">Certifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Data Analyst (Google Certified)</span>
                    <span className="skill-tag">Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Junior Web App Developer</span>
                    <span className="skill-tag">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Power BI Analyst</span>
                    <span className="skill-tag">Certified</span>
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