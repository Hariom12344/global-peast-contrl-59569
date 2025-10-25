import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Bug, Home, Building2, Zap, Shield, Leaf, CheckCircle, Clock, Phone } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Home,
    title: "Residential Pest Control",
    description: "Complete home protection from all types of pests including insects, rodents, and termites.",
    features: ["General Pest Control", "Termite Control", "Cockroach Control", "Rodent Control", "Bed Bug Control", "Mosquito Control", "Bird Control"],
    detailedInfo: {
      overview: "Our residential pest control services provide comprehensive protection for your home and family. We use government-approved, odourless chemicals applied by trained staff to eliminate current infestations and prevent future problems.",
      process: [
        "Free comprehensive property inspection and assessment",
        "Customized treatment plan using government-approved chemicals",
        "Professional application by trained technicians",
        "Regular follow-up treatments and monitoring",
        "Warranty coverage with 24/7 customer support"
      ],
      coverage: ["Cockroaches", "Ants", "Termites", "Rodents", "Bed Bugs", "Mosquitoes", "Bird Control"],
      pricing: "Contact for customized quotes",
      guarantee: "Government approved services with warranty coverage."
    }
  },
  {
    icon: Building2,
    title: "Commercial & Industrial Pest Control",
    description: "Professional pest management for businesses, offices, hotels, restaurants and industrial facilities.",
    features: ["Office Buildings", "Hotels & Restaurants", "Food Processing", "Regular Inspections"],
    detailedInfo: {
      overview: "Protect your business reputation and comply with health regulations. We serve hotels, restaurants, food processing units, offices, and industrial facilities with specialized pest management solutions.",
      process: [
        "Business risk assessment and regulatory compliance review",
        "Customized IPM (Integrated Pest Management) program design",
        "Discrete treatment scheduling to minimize business disruption",
        "Detailed documentation and audit reports for compliance",
        "Staff training on prevention best practices"
      ],
      coverage: ["Rodents", "Flying insects", "Crawling insects", "Stored product pests", "Birds", "All commercial pests"],
      pricing: "Custom quotes based on facility size and requirements",
      guarantee: "Compliance-focused service with detailed reporting and audit documentation."
    }
  },
  {
    icon: Shield,
    title: "Anti-Termite Treatment",
    description: "Pre and post construction termite treatment with government approved chemicals and warranty.",
    features: ["Pre-Construction Treatment", "Post-Construction Treatment", "Annual Maintenance", "Warranty Coverage"],
    detailedInfo: {
      overview: "Termites cause significant property damage. Our anti-termite treatment for pre and post construction uses government-approved chemicals to protect your most valuable investment.",
      process: [
        "Comprehensive termite inspection and soil treatment",
        "Pre-construction soil treatment application",
        "Post-construction barrier treatment installation",
        "Annual inspections and maintenance",
        "Warranty documentation and renewal services"
      ],
      coverage: ["Subterranean termites", "Drywood termites", "Pre-construction protection", "Post-construction barriers"],
      pricing: "Contact for inspection and customized treatment quotes",
      guarantee: "Comprehensive warranty with annual maintenance and renewal options."
    }
  },
  {
    icon: Zap,
    title: "Fogging & Sanitization",
    description: "Professional fogging services and sanitization for disease prevention and vector control.",
    features: ["Vector Control", "Sanitization Services", "Disease Prevention", "Public Health Protection"],
    detailedInfo: {
      overview: "Our fogging and sanitization services help prevent the spread of diseases by controlling disease vectors and maintaining hygienic environments in residential and commercial spaces.",
      process: [
        "Area assessment for vector breeding and contamination",
        "Professional fogging equipment setup and operation",
        "Targeted application of government-approved chemicals",
        "Post-treatment monitoring and evaluation",
        "Follow-up sanitization as needed"
      ],
      coverage: ["Mosquito control", "Disease vector elimination", "Surface sanitization", "Air space treatment"],
      pricing: "Service quotes based on area size and treatment requirements",
      guarantee: "Effective vector control with government-approved sanitization protocols."
    }
  },
  {
    icon: Building2,
    title: "Warehouse Pest Control",
    description: "Specialized pest control for warehouses, storage facilities, and distribution centers.",
    features: ["Storage Facility Protection", "Inventory Safeguarding", "Regular Monitoring", "Compliance Support"],
    detailedInfo: {
      overview: "Protect your stored goods and maintain inventory quality with our specialized warehouse pest control services designed for storage facilities and distribution centers.",
      process: [
        "Comprehensive warehouse inspection and risk assessment",
        "Integrated pest management program implementation",
        "Regular monitoring and treatment schedules",
        "Documentation for compliance and quality assurance",
        "Emergency response for immediate infestations"
      ],
      coverage: ["Stored product pests", "Rodents", "Flying insects", "Crawling insects", "Bird control"],
      pricing: "Custom quotes based on warehouse size and storage requirements",
      guarantee: "Comprehensive protection with regular monitoring and compliance documentation."
    }
  },
  {
    icon: Leaf,
    title: "Specialized Services",
    description: "Additional pest management services including inspection, audit reports, and weed control.",
    features: ["Pest Control Inspection", "Audit Reports", "Weed Control", "Bird Control Systems"],
    detailedInfo: {
      overview: "Our specialized services include comprehensive inspections, detailed audit reporting, weed control for agricultural areas, and bird control systems for commercial properties.",
      process: [
        "Detailed inspection and assessment protocols",
        "Comprehensive audit report preparation",
        "Specialized treatment application for weeds and grass",
        "Bird control system installation and maintenance",
        "Regular monitoring and reporting services"
      ],
      coverage: ["Property inspections", "Compliance audits", "Weed and grass control", "Bird deterrent systems"],
      pricing: "Service-specific quotes available on request",
      guarantee: "Professional inspection and specialized treatment services with detailed documentation."
    }
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential homes to commercial properties, we provide comprehensive pest control solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-trust transition-smooth hover:-translate-y-2 bg-card">
              <CardHeader className="text-center">
                <div className="mb-4 inline-flex">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default" className="w-full">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-2xl">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        {service.title}
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        {service.detailedInfo.overview}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      {/* Our Process */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          Our Process
                        </h3>
                        <ul className="space-y-3">
                          {service.detailedInfo.process.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary mt-0.5">
                                {idx + 1}
                              </div>
                              <span className="text-sm text-muted-foreground">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Coverage & Details */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary" />
                          What We Cover
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {service.detailedInfo.coverage.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {item}
                            </div>
                          ))}
                        </div>
                        
                        <div className="pt-4 space-y-3 border-t">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="font-medium text-sm">Pricing:</span>
                            <span className="text-sm text-muted-foreground">{service.detailedInfo.pricing}</span>
                          </div>
                          
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              Our Guarantee
                            </h4>
                            <p className="text-sm text-muted-foreground">{service.detailedInfo.guarantee}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-6 pt-6 border-t">
                      <Button 
                        className="flex-1"
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Get Free Quote
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.location.href = 'tel:7507741448'}
                      >
                        Schedule Inspection
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;