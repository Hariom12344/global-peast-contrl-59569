import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Star } from "lucide-react";
import technicianImage from "@/assets/technician.jpg";

const stats = [
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Serving communities worldwide"
  },
  {
    icon: Users,
    number: "50K+",
    label: "Happy Customers",
    description: "Satisfied clients globally"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Emergency Service",
    description: "Always available when needed"
  },
  {
    icon: Star,
    number: "4.9",
    label: "Customer Rating",
    description: "Based on 2,000+ reviews"
  }
];

const features = [
  "Licensed and fully insured professionals",
  "Eco-friendly and family-safe treatments",
  "Comprehensive inspection and monitoring",
  "Satisfaction guarantee on all services",
  "Advanced technology and methods",
  "Ongoing customer support"
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-service-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Global Pest Control?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another pest control company. We're your trusted partners in creating safer, healthier environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={technicianImage} 
              alt="Professional pest control technician" 
              className="w-full h-96 object-cover rounded-lg shadow-card"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Professional Excellence You Can Trust
            </h3>
            
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-card hover:shadow-trust transition-smooth">
              <CardContent className="p-0">
                <div className="mb-4 inline-flex">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;