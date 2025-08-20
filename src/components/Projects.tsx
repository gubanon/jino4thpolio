import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Data Analytics', 'Social Media', 'Media Production', 'Administration', 'Data Management'];

  const projects = [
    {
      title: 'Google Sheets Automation',
      category: 'Data Analytics',
      description: 'Client tracking system with automated data management and reporting',
      technologies: ['Google Sheets', 'Data Management', 'Automation', 'Reporting'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      demoUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRANDOM_ID/pubhtml',
      codeUrl: '#'
    },
    {
      title: 'Tableau Dashboard',
      category: 'Data Analytics',
      description: 'Interactive data visualization dashboard for business insights',
      technologies: ['Tableau', 'Data Visualization', 'Analytics', 'Dashboard Design'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      demoUrl: 'https://public.tableau.com/app/profile/jino.docena/viz/tableu_17540293146910/Dashboard1',
      codeUrl: '#'
    },
    {
      title: 'Social Media Content',
      category: 'Social Media',
      description: 'Creative content creation and social media management',
      technologies: ['Canva', 'Content Creation', 'Social Media Strategy', 'Brand Management'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      demoUrl: 'https://www.instagram.com/tagatop',
      codeUrl: '#'
    },
    {
      title: 'Video Editing Projects',
      category: 'Media Production',
      description: 'Professional video editing and content production',
      technologies: ['Filmora', 'CapCut', 'Video Editing', 'Content Production'],
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
      demoUrl: 'https://www.youtube.com/@khelzing',
      codeUrl: '#'
    },
    {
      title: 'Administrative Solutions',
      category: 'Administration',
      description: 'Streamlined administrative processes and documentation systems',
      technologies: ['Microsoft Office', 'Process Optimization', 'Documentation', 'Workflow Management'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Data Entry & Management',
      category: 'Data Management',
      description: 'Efficient data entry and database management solutions',
      technologies: ['Data Entry', 'Database Management', 'Quality Control', 'Data Validation'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
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
            Portfolio showcasing virtual assistance, data analytics, and administrative expertise
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