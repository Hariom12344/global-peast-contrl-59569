import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, MapPin, Phone, Mail, Users, TrendingUp, Building2 } from "lucide-react";

const CompanyInfo = () => {
  const companyStats = [
    { icon: Users, label: "Employees in Nagpur", value: "12" },
    { icon: TrendingUp, label: "Annual Turnover", value: "₹72 Lakh" },
    { icon: Building2, label: "Service Branches", value: "5+" },
    { icon: Shield, label: "Years Experience", value: "10+" }
  ];

  const serviceAreas = [
    "Nagpur", "Pune", "Aurangabad", "Akola", "Amravati", 
    "Ahmedabad", "Kolkata", "Chh. Sambhaji Nagar", "Jalna", "Nanded"
  ];

  const certifications = [
    {
      title: "GSTIN Registered",
      number: "27ADXPW5396F2ZG",
      icon: Award
    },
    {
      title: "Licensed Operator",
      number: "LAID2701047",
      icon: Shield
    }
  ];

  return (
    <section id="company-info" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Global Pest Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A young company with big ambitions, committed to providing government-approved pest control services across Maharashtra and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Company Overview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                Company Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Our Vision</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    Committed to prevent the entry, establishment and spread of household and commercial pests
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    Safety of employees, customers, and environment is our first priority
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    Operating with honesty and integrity at all times
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    Staying on the forefront of new technologies, techniques and products
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Our People</h3>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Mr. Sanjay Wagh</strong> completed M.Sc in Plant Pathology at Dr. P.D.K.V, Akola and 
                    completed Urban Integrated Pest Management Course at National Institute of Plant Health Management, Hyderabad. 
                    Every individual working with us has extensive experience in their respective domain.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Company Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {companyStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Certifications & Licenses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <cert.icon className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">{cert.title}</div>
                    <div className="text-sm text-muted-foreground">{cert.number}</div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                  <strong>Approved by:</strong> National Institute of Plant Health Management, Hyderabad 
                  (Ministry of Agriculture & Farmers Welfare, Government of India)
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Head Office</div>
                    <div className="text-sm text-muted-foreground">
                      Plot 5/1 Chintaman Nagar Somalwada<br />
                      Wardha Road Nagpur, Pin Code 440025<br />
                      Maharashtra, India
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Phone Numbers</div>
                    <div className="text-sm text-muted-foreground">
                      7507741448 / 8329757143
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">
                      globalpestsolutions9@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              Service Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We provide our expert pest control services across multiple cities in Maharashtra and other states:
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {area}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CompanyInfo;