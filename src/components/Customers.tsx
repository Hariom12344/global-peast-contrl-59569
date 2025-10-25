import { Building, MapPin, Users, TrendingUp, ExternalLink, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const customers = [
  { name: "Orange city Hospital", location: "Nagpur" },
  { name: "Hotel Royal Regency", location: "Buttibori, Nagpur" },
  { name: "Hotel Swaranjali", location: "Chikhali Buldhana" },
  { name: "Yashoda Seed Hinganghat", location: "Hinganghat" },
  { name: "Pagariya Export Pvt.Ltd", location: "Nagpur" },
  { name: "Pagariya Consumer Food", location: "Nagpur" },
  { name: "Just Kitchen Pagariya pvt ltd", location: "Nagpur" },
  { name: "Hotel Dua", location: "Nagpur" },
  { name: "Replay International Pvt.Ltd", location: "Nagpur" },
  { name: "Hotel Swags stay", location: "Nagpur" },
  { name: "Hotel Paradise", location: "Nagpur" },
  { name: "Rathi Pedhewala pvt ltd", location: "Akola" },
  { name: "Bhagwati Udyog", location: "Akola" },
  { name: "Good Choice Food Pvt.Ltd", location: "Jalna" },
  { name: "Hyper Grocer Pvt.Ltd", location: "Nagpur" },
  { name: "Radha Enterprises", location: "Akola" },
  { name: "Radha Food Product", location: "Akola" },
  { name: "Radha Impex", location: "Akola" },
  { name: "Radha Udyog", location: "Akola" },
  { name: "Vishnu Ji Ki Rasoi", location: "Nagpur" }
];

const stats = [
  {
    icon: Users,
    number: "40+",
    label: "Valuable Customers",
    description: "Trusted by leading businesses"
  },
  {
    icon: MapPin,
    number: "5",
    label: "Branches",
    description: "Nagpur, Akola, Jalna, Chh.Sambhaji Nagar, Nanded"
  },
  {
    icon: TrendingUp,
    number: "₹72L",
    label: "Annual Turnover",
    description: "2023-24 in Nagpur alone"
  },
  {
    icon: Building,
    number: "12+",
    label: "Team Members",
    description: "Experienced professionals in Nagpur"
  }
];

const Customers = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Valuable Customers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading hotels, hospitals, food industries, and businesses across Maharashtra.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
              <h4 className="text-lg font-semibold text-foreground mb-1">{stat.label}</h4>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Customer List */}
        <div className="bg-card p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Clients</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {customers.map((customer, index) => (
              <div key={index} className="group flex items-center gap-3 p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors cursor-pointer border hover:border-primary/20">
                <div className="p-2 bg-primary/10 rounded group-hover:bg-primary/20 transition-colors">
                  <Building className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{customer.name}</h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {customer.location}
                  </p>
                </div>
                <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </div>
            ))}
            <div className="flex items-center gap-3 p-4 bg-background rounded-lg border-2 border-dashed border-muted">
              <div className="p-2 bg-accent/10 rounded">
                <Building className="h-4 w-4 text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm">And many more...</h4>
                <p className="text-xs text-muted-foreground">Growing customer base</p>
              </div>
            </div>
          </div>

          {/* Client Features */}
          <div className="border-t pt-8">
            <h4 className="text-lg font-semibold text-foreground mb-6 text-center">Why Businesses Choose Us</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center p-3 bg-green-500/10 rounded-lg mb-3">
                  <Building className="h-6 w-6 text-green-600" />
                </div>
                <h5 className="font-medium text-foreground mb-2">Government Approved</h5>
                <p className="text-sm text-muted-foreground">Certified services with warranty coverage</p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-lg mb-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h5 className="font-medium text-foreground mb-2">Trained Professionals</h5>
                <p className="text-sm text-muted-foreground">Expert team with extensive experience</p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-lg mb-3">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h5 className="font-medium text-foreground mb-2">Proven Results</h5>
                <p className="text-sm text-muted-foreground">40+ satisfied clients across Maharashtra</p>
              </div>
            </div>
          </div>

          {/* Contact CTA for Clients */}
          <div className="mt-8 text-center p-6 bg-primary/5 rounded-lg">
            <h4 className="text-lg font-semibold text-foreground mb-2">Join Our Growing Client Family</h4>
            <p className="text-muted-foreground mb-4">Get professional pest control services with warranty</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="cta" 
                onClick={() => window.location.href = 'tel:7507741448'}
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now: 7507741448
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = 'mailto:globalpestsolutions9@gmail.com?subject=Business Partnership Inquiry&body=Hello, I am interested in your pest control services for my business.'}
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Email for Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;