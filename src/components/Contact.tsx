import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["7507741448", "8329757143"],
    subtitle: "24/7 Emergency Service"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["globalpestsolutions9@gmail.com"],
    subtitle: "Quick response guaranteed"
  },
  {
    icon: MapPin,
    title: "Service Areas",
    details: ["Nagpur, Pune, Aurangabad, Akola", "Amravati, Ahmedabad, Kolkata"],
    subtitle: "Expanding across India"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Sun: 6:00 AM - 10:00 PM"],
    subtitle: "Emergency calls 24/7"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    service: 'General Pest Control',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailContent = `
New Quote Request from Global Pest Solutions Website

Customer Details:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Address: ${formData.address}
- Service Needed: ${formData.service}
- Message: ${formData.message}

Please contact this customer as soon as possible for their pest control needs.
      `.trim();

      // Send email using mailto (this will open the user's email client)
      const subject = encodeURIComponent(`New Quote Request - ${formData.firstName} ${formData.lastName}`);
      const body = encodeURIComponent(emailContent);
      const mailtoUrl = `mailto:globalpestsolutions9@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoUrl;

      // Show success message
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 2 hours during business hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        service: 'General Pest Control',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try calling us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to protect your property? Contact us for a free inspection and customized pest control solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Request Free Quote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <Input 
                    id="address" 
                    placeholder="123 Main St, City, State" 
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <select 
                    id="service"
                    className="w-full p-3 border border-input rounded-md bg-background"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="General Pest Control">General Pest Control</option>
                    <option value="Termite Control">Termite Control</option>
                    <option value="Cockroach Control">Cockroach Control</option>
                    <option value="Rodent Control">Rodent Control</option>
                    <option value="Bed Bug Control">Bed Bug Control</option>
                    <option value="Mosquito Control">Mosquito Control</option>
                    <option value="Bird Control">Bird Control</option>
                    <option value="Commercial Pest Control">Commercial Pest Control</option>
                    <option value="Industrial Pest Control">Industrial Pest Control</option>
                    <option value="Warehouse Pest Control">Warehouse Pest Control</option>
                    <option value="Anti-Termite Treatment">Anti-Termite Treatment</option>
                    <option value="Fogging Services">Fogging Services</option>
                    <option value="Sanitization Services">Sanitization Services</option>
                    <option value="Emergency Service">Emergency Service</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your pest problem..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Free Quote"}
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground text-center">
                We'll contact you within 2 hours during business hours
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-trust transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-foreground font-medium">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-muted-foreground mt-1">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
            
            <Card className="p-6 bg-hero-gradient text-white">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Emergency? Call Now!</h3>
                <p className="text-white/90 mb-4">
                  Don't wait - pest problems can get worse quickly
                </p>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Phone className="w-5 h-5 mr-2" />
                  7507741448
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;