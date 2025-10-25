import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold">Global Pest Solutions</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Young company with big ambitions. Government approved services with warranty. 
              Odourless & advanced chemicals with Government Institute trained staff.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-white/60 hover:text-accent cursor-pointer transition-smooth" />
              <Twitter className="w-5 h-5 text-white/60 hover:text-accent cursor-pointer transition-smooth" />
              <Instagram className="w-5 h-5 text-white/60 hover:text-accent cursor-pointer transition-smooth" />
              <Linkedin className="w-5 h-5 text-white/60 hover:text-accent cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-accent cursor-pointer transition-smooth">Residential Pest Control</li>
              <li className="hover:text-accent cursor-pointer transition-smooth">Commercial & Industrial</li>
              <li className="hover:text-accent cursor-pointer transition-smooth">Anti-Termite Treatment</li>
              <li className="hover:text-accent cursor-pointer transition-smooth">Fogging & Sanitization</li>
              <li className="hover:text-accent cursor-pointer transition-smooth">Warehouse Pest Control</li>
              <li className="hover:text-accent cursor-pointer transition-smooth">Weed Control</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-accent cursor-pointer transition-smooth">About Us</li>
              <li className="hover:text-accent cursor-pointer transition-smooth">Service Areas</li>
              <li className="hover:text-accent cursor-pointer transition-smooth">Customer Reviews</li>
              <li className="hover:text-accent cursor-pointer transition-smooth">Blog & Tips</li>
              <li className="hover:text-accent cursor-pointer transition-smooth">Careers</li>
              <li className="hover:text-accent cursor-pointer transition-smooth">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>7507741448 / 8329757143</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>globalpestsolutions9@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span>Plot 5/1 Chintaman Nagar Somalwada<br />Wardha Road Nagpur 440025</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs">GSTIN: 27ADXPW5396F2ZG</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm font-semibold text-accent mb-1">24/7 Emergency Service</p>
              <p className="text-xs text-white/60">Available for urgent pest problems</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Global Pest Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <span className="hover:text-accent cursor-pointer transition-smooth">Terms of Service</span>
              <span className="hover:text-accent cursor-pointer transition-smooth">Privacy Policy</span>
              <span className="hover:text-accent cursor-pointer transition-smooth">License Info</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;