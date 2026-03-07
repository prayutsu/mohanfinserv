import React from "react";
import { siteConfig, services, team, testimonials, coreValues, whyChooseUs, mission, vision } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ChevronRight, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/images/hero.jpg";
import officeImg from "@/assets/images/office.jpg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [expandedService, setExpandedService] = React.useState<number | null>(null);
  const [expandedProcess, setExpandedProcess] = React.useState<string | null>(null);

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
              <span className="text-secondary font-serif font-bold text-xl leading-none">M</span>
            </div>
            <span className="font-serif font-semibold text-lg tracking-tight text-primary">
              {siteConfig.name}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">Our Team</button>
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
            <button onClick={() => scrollToSection('about')} className="text-left py-2 font-medium">About</button>
            <button onClick={() => scrollToSection('services')} className="text-left py-2 font-medium">Services</button>
            <button onClick={() => scrollToSection('team')} className="text-left py-2 font-medium">Our Team</button>
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
              alt="Financial consulting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
            <div className="max-w-3xl text-primary-foreground animate-in slide-in-from-bottom-8 duration-700 fade-in">
              <div className="inline-block px-3 py-1 mb-6 border border-secondary/30 text-secondary text-xs uppercase tracking-widest font-medium bg-secondary/10 backdrop-blur-sm">
                CFO Consulting & Advisory
              </div>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
                {siteConfig.headline}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-light max-w-2xl leading-relaxed">
                {siteConfig.painPoint}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('about')} 
                  size="lg" 
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-none h-14 px-8 text-base font-medium transition-all inline-flex items-center gap-2"
                >
                  {siteConfig.cta}
                  <ArrowRight className="w-4 h-4" />
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

        {/* About Section */}
        <section id="about" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">About Us</h2>
                <h3 className="text-4xl font-serif mb-6">Aligning Financial Strategy with Your Business Needs</h3>
                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
                  {siteConfig.valueProposition}
                </p>
                <p className="text-primary-foreground/70 text-base leading-relaxed mb-6">
                  Our services revolve around comprehensive financial management—including bookkeeping, accounting, compliance, accurate financial reporting, and investment advisory. Wherever financial challenges arise, we deliver clear, practical, and results-oriented solutions designed to create measurable impact.
                </p>
                <p className="text-primary-foreground/70 text-base leading-relaxed mb-8">
                  We take a proactive approach—anticipating risks, optimizing financial processes, and enabling informed, data-driven decision-making. From managing day-to-day accounts to financial direction and planning, we take full accountability for your finance function, giving you the freedom to drive business growth without the burden of financial complexity.
                </p>
                <p className="text-primary-foreground/70 text-base leading-relaxed italic font-light">
                  "Your success is our balance sheet at Mohan Finserv."
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 border-l-4 border-secondary p-6">
                  <h4 className="text-2xl font-serif text-white mb-2">Our Mission</h4>
                  <p className="text-primary-foreground/80">{mission}</p>
                </div>
                <div className="bg-white/10 border-l-4 border-secondary p-6">
                  <h4 className="text-2xl font-serif text-white mb-2">Our Vision</h4>
                  <p className="text-primary-foreground/80">{vision}</p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="border-t border-white/10 pt-16">
              <h3 className="text-3xl font-serif mb-12 text-center">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {coreValues.map((value, idx) => (
                  <div key={idx} className="bg-white/5 p-6 border border-white/10">
                    <h4 className="text-lg font-serif text-white mb-3">{value.title}</h4>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Why Us</h2>
                <h3 className="text-4xl font-serif text-primary">Why Choose Mohan Finserv</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-primary/5 border border-border/50 hover:border-secondary/50 transition-colors p-8 flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-medium mb-2 text-primary">{item.title}</h4>
                      {item.description && <p className="text-muted-foreground text-sm">{item.description}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-background border-t border-border">
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

            <div className="grid grid-cols-1 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isExpanded = expandedService === index;
                return (
                  <Card key={index} className="rounded-none border-border/50 hover:border-secondary/50 transition-colors duration-300 group bg-card">
                    <CardContent className="p-8 md:p-10">
                      <div className="flex gap-6 mb-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                          <Icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-serif font-medium text-primary">{service.title}</h4>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      {service.highlights && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                          {service.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-sm">
                              <CheckCircleIcon className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Expandable Details */}
                      {(service.process || service.offerings) && (
                        <>
                          <button
                            onClick={() => setExpandedService(isExpanded ? null : index)}
                            className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium text-sm mt-6 pt-6 border-t border-border"
                          >
                            {isExpanded ? "Hide Details" : "View Details"}
                            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>

                          {isExpanded && (
                            <div className="mt-6 pt-6 border-t border-border space-y-6">
                              {/* Process Steps */}
                              {service.process && (
                                <div>
                                  <h5 className="text-lg font-serif text-primary mb-4">How Our Services Work</h5>
                                  <div className="space-y-3">
                                    {service.process.map((proc, pIdx) => (
                                      <div key={pIdx}>
                                        <button
                                          onClick={() => setExpandedProcess(expandedProcess === `${index}-${pIdx}` ? null : `${index}-${pIdx}`)}
                                          className="flex items-start gap-3 w-full text-left py-3 px-4 bg-muted/50 hover:bg-muted transition-colors rounded-sm"
                                        >
                                          <span className="font-serif text-primary font-bold flex-shrink-0">{proc.step}</span>
                                          <div className="flex-1">
                                            <p className="font-semibold text-primary text-sm">{proc.title}</p>
                                          </div>
                                          <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform ${expandedProcess === `${index}-${pIdx}` ? 'rotate-180' : ''}`} />
                                        </button>
                                        {expandedProcess === `${index}-${pIdx}` && (
                                          <div className="px-4 py-3 bg-background border border-border/50 border-t-0 text-sm text-muted-foreground leading-relaxed">
                                            {proc.description}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Offerings List */}
                              {service.offerings && (
                                <div>
                                  <h5 className="text-lg font-serif text-primary mb-4">What We Offer</h5>
                                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {service.offerings.map((offering, oIdx) => (
                                      <li key={oIdx} className="flex items-start gap-2 text-sm">
                                        <CheckCircleIcon className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{offering}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Tagline */}
                              {service.tagline && (
                                <div className="mt-6 pt-6 border-t border-border">
                                  <p className="text-primary font-semibold italic">{service.tagline}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Leadership</h2>
              <h3 className="text-4xl font-serif text-primary mb-4">Meet Our Expert Team</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A dedicated team of chartered accountants and financial experts with deep experience across CFO services, audit, taxation, and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <Card key={idx} className="rounded-none border-border hover:border-secondary/50 transition-colors">
                  <CardContent className="p-8">
                    <div className="mb-6 h-48 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-serif text-primary mb-2">{member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}</div>
                      </div>
                    </div>
                    <h4 className="text-lg font-serif text-primary mb-1">{member.name}</h4>
                    <p className="text-secondary text-sm font-medium mb-1">{member.qualification}</p>
                    <p className="text-xs text-muted-foreground mb-4">{member.experience}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div className="relative">
                <img src={officeImg} alt="Office" className="w-full h-64 object-cover mb-10 grayscale-[30%]" />
                <h2 className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Get in Touch</h2>
                <h3 className="text-4xl font-serif text-white mb-8">Ready to grow with confidence?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                      <Phone className="text-secondary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 font-medium mb-1">Phone</p>
                      <p className="text-white">{siteConfig.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                      <Mail className="text-secondary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 font-medium mb-1">Email</p>
                      <p className="text-white">{siteConfig.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                      <MapPin className="text-secondary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 font-medium mb-1">Address</p>
                      <p className="text-white">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/5 p-8 md:p-12 border border-white/10">
                <h3 className="text-2xl font-serif text-white mb-6">Send us a message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm text-white/80">Full Name</label>
                    <Input data-testid="input-name" placeholder="John Doe" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-none h-12 focus-visible:ring-secondary focus-visible:border-secondary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/80">Email Address</label>
                    <Input data-testid="input-email" type="email" placeholder="john@company.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-none h-12 focus-visible:ring-secondary focus-visible:border-secondary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/80">How can we help?</label>
                    <Textarea data-testid="textarea-message" placeholder="Please describe your needs..." className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-none min-h-[120px] focus-visible:ring-secondary focus-visible:border-secondary resize-none" />
                  </div>
                  <Button data-testid="button-submit" type="button" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-none h-12 text-base font-medium mt-4">
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
                  <span className="text-primary font-serif font-bold text-sm leading-none">M</span>
                </div>
                <span className="font-serif font-semibold text-lg text-white">
                  {siteConfig.name}
                </span>
              </div>
              <p className="max-w-sm mb-6 text-sm">
                {siteConfig.description}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-secondary transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-secondary transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('team')} className="hover:text-secondary transition-colors">Team</button></li>
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
            <p className="mt-2 md:mt-0">CFO Consulting for Modern Business Growth.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Import CheckCircle icon
import { CheckCircle as CheckCircleIcon } from "lucide-react";
