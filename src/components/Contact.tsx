import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - UPDATE THESE WITH YOUR ACTUAL VALUES
      const serviceId = 'service_ultf8hx'; // Your EmailJS service ID
      const templateId = 'template_83b52bt'; // Updated with your correct template ID
      const publicKey = 'uxzgDA96NgXmmbqd6'; // Your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'jinodocena11@email.com',
      };

      console.log('Sending email with params:', templateParams);
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("An error occurred:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      label: 'Email',
      value: 'jinodocena11@email.com',
      href: 'mailto:jinodocena11@email.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: 'Available upon request',
      href: '#',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Philippines',
      href: '#',
      color: 'text-red-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'YouTube',
      href: 'https://www.youtube.com/@khelzing',
      color: 'text-red-400 hover:text-red-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jino-docena-b2b255376',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/onig11',
      color: 'text-blue-500 hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 glow-text">
            Get In Touch
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about something cool.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-accent">Let's Connect</h3>
                
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card
                      key={info.label}
                      className="glass-card p-6 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <a
                        href={info.href}
                        className="flex items-center space-x-4 group"
                      >
                        <div className={`p-3 rounded-full bg-secondary/20 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-accent">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-secondary/20 ${social.color} hover:scale-110 transition-all duration-300 group`}
                        title={social.label}
                      >
                        <IconComponent size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-xl font-semibold text-accent mb-4">Have a question? Just ask!</h4>
                <p className="text-muted-foreground mb-4">
                  I'm available for freelance work and consulting. Let's discuss how we can work together!
                </p>
                <Button
                  className="bg-primary hover:bg-primary/80 text-primary-foreground glow-border"
                  asChild
                >
                  <a href="mailto:jinodocena11@email.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Quick Email
                  </a>
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent">Send me a message directly:</h3>
              
              <Card className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-input border-border/50 focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-input border-border/50 focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-input border-border/50 focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-input border-border/50 focus:border-primary focus:ring-primary/20 resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/80 text-primary-foreground glow-border"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;