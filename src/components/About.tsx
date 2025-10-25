import { Shield, Award, Users, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Global Pest Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An innovative company approved by National Institute of Plant Health Management, Hyderabad, 
            setting new standards for pest control in Maharashtra, India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Company Information</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong>GSTIN:</strong> 27ADXPW5396F2ZG</p>
              <p><strong>Licence No:</strong> LAID2701047</p>
              <p><strong>Address:</strong> Plot 5/1 Chintaman Nagar Somalwada Wardha Road Nagpur, Pin Code 440025, Maharashtra, India</p>
              <p><strong>Turnover (2023-24):</strong> ₹72 Lakh in Nagpur</p>
              <p><strong>Employees in Nagpur:</strong> 12</p>
              <p><strong>Branches:</strong> Nagpur, Akola, Jalna, Chh.Sambhaji Nagar and Nanded</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                Committed to prevent the entry, establishment and spread of household and commercial pest
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                The safety of our employees, customers, and the environment is always our first priority
              </li>
              <li className="flex items-start gap-2">
                <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                We operate with honesty and integrity at all times, in all situations
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                We strive to be on the forefront of new technologies, techniques and products
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6">Our People</h3>
          <p className="text-muted-foreground mb-4">
            When we say that Global Pest Solutions is a caring company delivering only the best class of service, we mean it!
          </p>
          <div className="bg-card p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-foreground mb-2">Mr. Sanjay Wagh</h4>
            <p className="text-muted-foreground">
              Completed M.Sc in Plant Pathology at Dr. P.D.K.V, Akola and Urban Integrated Pest Management Course 
              at National Institute of Plant Health Management, Hyderabad. Every individual working with us has 
              extensive experience in their respective domain.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Why Pest Control?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-3">Public Health Protection</h4>
              <p className="text-muted-foreground">
                Pest control serves an important service by protecting public health, brands, and property 
                in the food service industry.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-3">Prevent Cross Contamination</h4>
              <p className="text-muted-foreground">
                Cross contamination can occur when disease-causing organisms transfer from one food to another food.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-3">Reputation Protection</h4>
              <p className="text-muted-foreground">
                The presence of pests is a sign of improper hygiene and sanitation which leads to damage 
                of reputation and goodwill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;