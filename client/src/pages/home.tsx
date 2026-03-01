import React from "react";
import { siteConfig, services, team, testimonials, clients, projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ChevronRight, Menu, X } from "lucide-react";
import heroImg from "@/assets/images/hero.jpg";
import officeImg from "@/assets/images/office.jpg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
              <span className="text-secondary font-serif font-bold text-xl leading-none">A</span>
            </div>
            <span className="font-serif font-semibold text-xl tracking-tight text-primary">
              {siteConfig.name}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">Our Team</button>
            {siteConfig.features.showTestimonials && (
               <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">Testimonials</button>
            )}
            <Button onClick={() => scrollToSection('contact')} variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border p-4 bg-background flex flex-col gap-4 shadow-lg absolute w-full left-0">
            <button onClick={() => scrollToSection('services')} className="text-left py-2 font-medium">Services</button>
            <button onClick={() => scrollToSection('team')} className="text-left py-2 font-medium">Our Team</button>
             {siteConfig.features.showTestimonials && (
               <button onClick={() => scrollToSection('testimonials')} className="text-left py-2 font-medium">Testimonials</button>
            )}
            <Button onClick={() => scrollToSection('contact')} className="w-full bg-primary rounded-none mt-2">
              Contact Us
            </Button>
          </div>
        )}
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[85vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImg} 
              alt="Professional accounting office" 
              className="w-full h-full object-cover"
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
            <div className="max-w-2xl text-primary-foreground animate-in slide-in-from-bottom-8 duration-700 fade-in">
              <div className="inline-block px-3 py-1 mb-6 border border-secondary/30 text-secondary text-xs uppercase tracking-widest font-medium bg-secondary/10 backdrop-blur-sm">
                Chartered Accountants
              </div>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
                Clarity in <span className="text-secondary italic">Numbers</span>.<br />
                Strategy for <span className="text-secondary italic">Growth</span>.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 font-light max-w-xl leading-relaxed">
                {siteConfig.description}. We provide comprehensive financial, tax, and advisory services tailored for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg" 
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-none h-14 px-8 text-base font-medium transition-all"
                >
                  Schedule a Consultation
                </Button>
                <Button 
                  onClick={() => scrollToSection('services')} 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-none h-14 px-8 text-base font-medium transition-all"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Our Expertise</h2>
                <h3 className="text-4xl font-serif text-primary">Comprehensive Financial Services</h3>
              </div>
              <p className="text-muted-foreground max-w-md text-lg">
                Delivering meticulous attention to detail and strategic foresight to protect and grow your wealth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="rounded-none border-border/50 hover:border-secondary/50 transition-colors duration-300 group bg-card">
                    <CardContent className="p-8 md:p-10 flex gap-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-serif font-medium mb-3 text-primary">{service.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Toggle: Clients */}
        {siteConfig.features.showClients && (
          <section className="py-16 bg-muted/50 border-y border-border">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-12 opacity-60">
                {clients.map((client, idx) => {
                  const Icon = client.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all">
                      <Icon className="w-6 h-6" />
                      <span className="font-semibold text-lg">{client.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* About / Team Section */}
        <section id="team" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Leadership</h2>
                  <h3 className="text-4xl font-serif mb-6">Expertise You Can Trust.</h3>
                  <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                    Our firm is built on a foundation of integrity, precision, and a deep understanding of the evolving financial landscape. We partner with our clients, treating their business as our own.
                  </p>
                  
                  <div className="space-y-8">
                    {team.map((member, idx) => (
                      <div key={idx} className="flex items-start gap-6 bg-white/5 p-6 border-l-2 border-secondary">
                        <div>
                          <h4 className="text-xl font-serif text-white">{member.name}</h4>
                          <p className="text-secondary text-sm font-medium mb-3">{member.role}</p>
                          <p className="text-primary-foreground/70 italic text-sm leading-relaxed">"{member.bio}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-[4/5] relative">
                    <img 
                      src={team[0].image} 
                      alt="Team Member" 
                      className="w-full h-full object-cover grayscale-[20%] contrast-125"
                    />
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/10 -z-10" />
                    <div className="absolute -top-6 -right-6 w-48 h-48 border border-secondary/30 -z-10" />
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Feature Toggle: Projects */}
        {siteConfig.features.showProjects && (
           <section className="py-24 bg-background">
             <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Case Studies</h2>
                <h3 className="text-4xl font-serif text-primary mb-12">Recent Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.map((proj, idx) => (
                    <Card key={idx} className="rounded-none border-border">
                      <CardContent className="p-8">
                        <h4 className="font-serif text-xl mb-2">{proj.title}</h4>
                        <p className="text-muted-foreground">{proj.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
             </div>
           </section>
        )}

        {/* Feature Toggle: Testimonials */}
        {siteConfig.features.showTestimonials && (
          <section id="testimonials" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
              <h2 className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Client Success</h2>
              <h3 className="text-4xl font-serif text-primary mb-16">What Our Clients Say</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {testimonials.map((test, idx) => (
                  <div key={idx} className="bg-background p-10 border border-border shadow-sm relative">
                    <div className="absolute text-8xl text-secondary/10 font-serif top-4 left-6 leading-none">"</div>
                    <p className="text-lg text-primary/80 italic mb-8 relative z-10 leading-relaxed">
                      {test.quote}
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-primary">{test.author}</p>
                      <p className="text-sm text-muted-foreground">{test.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div className="relative">
                <img src={officeImg} alt="Office" className="w-full h-64 object-cover mb-10 grayscale-[30%]" />
                <h2 className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Get in Touch</h2>
                <h3 className="text-4xl font-serif text-primary mb-8">Ready to elevate your financials?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/5 flex items-center justify-center">
                      <MapPin className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Office Address</p>
                      <p className="text-primary">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/5 flex items-center justify-center">
                      <Phone className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Phone</p>
                      <p className="text-primary">{siteConfig.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/5 flex items-center justify-center">
                      <Mail className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                      <p className="text-primary">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-primary p-8 md:p-12 shadow-xl">
                <h3 className="text-2xl font-serif text-white mb-6">Send us a message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm text-white/80">Full Name</label>
                    <Input placeholder="John Doe" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-none h-12 focus-visible:ring-secondary focus-visible:border-secondary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/80">Email Address</label>
                    <Input type="email" placeholder="john@company.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-none h-12 focus-visible:ring-secondary focus-visible:border-secondary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/80">How can we help?</label>
                    <Textarea placeholder="Please describe your needs..." className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-none min-h-[120px] focus-visible:ring-secondary focus-visible:border-secondary resize-none" />
                  </div>
                  <Button type="button" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-none h-12 text-base font-medium mt-4">
                    Send Inquiry
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-12 text-primary-foreground/70">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-secondary flex items-center justify-center rounded-sm">
                  <span className="text-primary font-serif font-bold text-sm leading-none">A</span>
                </div>
                <span className="font-serif font-semibold text-lg text-white">
                  {siteConfig.name}
                </span>
              </div>
              <p className="max-w-sm mb-6 text-sm">
                Professional accounting, auditing, and tax advisory services dedicated to the financial success of our clients.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-secondary transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('team')} className="hover:text-secondary transition-colors">Our Team</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-secondary transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
