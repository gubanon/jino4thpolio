import { Card } from '@/components/ui/card';
import { Database, Code, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Big Data Analytics',
      icon: Database,
      color: 'text-blue-400',
      skills: ['Python', 'R', 'Power BI', 'Tableau', 'Jupyter Notebook', 'PostgreSQL', 'Apache Spark']
    },
    {
      title: 'Web Development',
      icon: Code,
      color: 'text-green-400',
      skills: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'React', 'TypeScript', 'CSS3', 'HTML5', 'Tailwind CSS']
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'text-purple-400',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'Responsive Design']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 glow-text">
            Skills
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            A comprehensive skill set spanning data analytics, web development, and design
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.title}
                  className="glass-card p-8 text-center hover:scale-105 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col items-center mb-6">
                    <div className={`p-4 rounded-full bg-secondary/20 ${category.color} mb-4`}>
                      <IconComponent size={48} />
                    </div>
                    <h3 className="text-2xl font-semibold glow-text">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="skill-tag animate-scale-in"
                        style={{ animationDelay: `${index * 0.2 + skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills Banner */}
          <div className="mt-12 text-center">
            <Card className="glass-card p-6 inline-block animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4 text-accent">Additional Expertise</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Data Engineering', 'Data Science', 'Machine Learning', 'RFID Integration', 'API Development', 'Database Design'].map((skill, index) => (
                  <span
                    key={skill}
                    className="skill-tag animate-scale-in"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;