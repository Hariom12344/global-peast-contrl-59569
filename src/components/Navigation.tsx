import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, Home, Building2, Shield, Zap, Leaf, Bug } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Company", href: "#company-info" },
    { name: "Pest Info", href: "#pest-info" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Customers", href: "#customers" },
    { name: "Contact", href: "#contact" }
  ];

  const serviceItems = [
    { name: "Residential Pest Control", href: "#services", icon: Home, description: "Complete home protection" },
    { name: "Commercial & Industrial", href: "#services", icon: Building2, description: "Business pest management" },
    { name: "Anti-Termite Treatment", href: "#services", icon: Shield, description: "Pre & post construction" },
    { name: "Fogging & Sanitization", href: "#services", icon: Zap, description: "Disease prevention" },
    { name: "Warehouse Pest Control", href: "#services", icon: Building2, description: "Storage facility protection" },
    { name: "Specialized Services", href: "#services", icon: Leaf, description: "Inspection & weed control" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/373268ca-faac-408a-afcf-35d75f6b6ada.png" 
              alt="Global Pest Solutions Logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-xl font-bold text-primary">Global Pest Solutions</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus:outline-none">
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-2">
                <div className="grid gap-1">
                  {serviceItems.map((service, index) => (
                    <DropdownMenuItem 
                      key={index}
                      className="flex items-start gap-3 p-3 cursor-pointer"
                      onClick={() => scrollToSection(service.href)}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg mt-0.5">
                        <service.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{service.name}</div>
                        <div className="text-xs text-muted-foreground">{service.description}</div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="p-3 text-center font-medium text-primary cursor-pointer"
                    onClick={() => scrollToSection("#services")}
                  >
                    View All Services
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Call Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = 'mailto:globalpestsolutions9@gmail.com?subject=Pest Control Inquiry&body=Hello, I would like to know more about your pest control services.'}
            >
              Get Quote
            </Button>
            <Button 
              variant="cta" 
              size="sm"
              onClick={() => window.location.href = 'tel:7507741448'}
            >
              <Phone className="w-4 h-4 mr-2" />
              7507741448
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.location.href = 'tel:7507741448'}
              className="md:hidden p-2"
            >
              <Phone className="w-4 h-4" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-colors rounded-lg"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Services Section */}
              <div className="pt-2 border-t border-border">
                <div className="px-4 py-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Our Services
                </div>
                {serviceItems.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(service.href)}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-primary/5 transition-colors rounded-lg"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-foreground">{service.name}</div>
                      <div className="text-xs text-muted-foreground">{service.description}</div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    window.location.href = 'mailto:globalpestsolutions9@gmail.com?subject=Pest Control Inquiry&body=Hello, I would like to know more about your pest control services.';
                    setIsOpen(false);
                  }}
                >
                  Get Free Quote
                </Button>
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => {
                    window.location.href = 'tel:7507741448';
                    setIsOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;