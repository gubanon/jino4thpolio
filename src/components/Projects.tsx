import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Big Data', 'Web Apps', 'UI/UX'];

  const projects = [
    {
      title: 'Pharmacy Management System',
      category: 'Web Apps',
      description: 'Successfully deployed in a working pharmacy for stock and payment tracking',
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'CSS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Flight Delay Prediction',
      category: 'Big Data',
      description: 'Predictive model using historical data from Kaggle',
      technologies: ['Python', 'Jupyter', 'Power BI', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'ESSU Property Inventory System',
      category: 'Web Apps',
      description: 'Real-time tracking of university assets with RFID integration',
      technologies: ['Node.js', 'PostgreSQL', 'RFID', 'React'],
      image: 'https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=600&h=400&fit=crop',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Research Statistics Dashboard',
      category: 'Big Data',
      description: 'Delivered academic research analysis in 2 days instead of 2 weeks',
      technologies: ['Jamovi', 'Python', 'Data Visualization'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'E-commerce UI Design',
      category: 'UI/UX',
      description: 'Modern, responsive design for online marketplace',
      technologies: ['Figma', 'Prototyping', 'User Research'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Government Portal Redesign',
      category: 'UI/UX',
      description: 'User-centered redesign of government service portal',
      technologies: ['Figma', 'User Testing', 'Accessibility'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 glow-text">
            Projects
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            A showcase of real-world projects demonstrating my expertise across different domains
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`rounded-full px-6 transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-primary text-primary-foreground glow-border' 
                    : 'border-primary/30 text-primary hover:bg-primary/10'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="project-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-primary/90 hover:bg-primary text-primary-foreground"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold glow-text">{project.title}</h3>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;