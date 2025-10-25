import { Zap, Target, Shield, Lightbulb, Droplets, Wind } from "lucide-react";

const chemicalMethods = [
  {
    icon: Droplets,
    title: "Insecticides",
    description: "Odorless, safer and eco-friendly, advanced insecticides and acaricides that kill insects and mites or prevent their development."
  },
  {
    icon: Target,
    title: "Baiting System", 
    description: "Use of Insecticide bait, Edible baits and Liquid bait stations, increasingly common against cockroaches and ants."
  },
  {
    icon: Shield,
    title: "Rodenticides",
    description: "Need to be ingested in the form of bait or taken into the body via the mouth while grooming."
  },
  {
    icon: Wind,
    title: "Contact Dusts",
    description: "Rodents spend 20% of waking time grooming. Inert dust mixed with rodenticide preparation is highly effective."
  },
  {
    icon: Droplets,
    title: "Spraying",
    description: "Chosen technique for surface treatments on cracks and crevices for targeted pest elimination."
  },
  {
    icon: Wind,
    title: "Smoke Treatment",
    description: "Active ingredient formulated with pyrotechnic compounds which burn to produce smoke carrying the treatment."
  }
];

const nonChemicalMethods = [
  {
    icon: Zap,
    title: "Electric Fly Control Units (EFK)",
    description: "Flying insects are attracted to ultra-violet light and either trapped on adhesive board or killed by high voltage."
  },
  {
    icon: Target,
    title: "Adhesive Pads",
    description: "Insects are encouraged to enter by food source attractant or pheromone lure and held on adhesive surface."
  },
  {
    icon: Lightbulb,
    title: "Pheromone Traps",
    description: "Male insects are attracted by pheromone released by the lure for targeted species control."
  },
  {
    icon: Shield,
    title: "Fly and Wasp Traps",
    description: "Attract insects by means of liquid bait where they are unable to escape and drown."
  }
];

const TreatmentMethods = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Management Strategies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We employ both chemical and non-chemical methods to ensure comprehensive pest control solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Chemical Control */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Chemical Control</h3>
            <div className="space-y-6">
              {chemicalMethods.map((method, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{method.title}</h4>
                      <p className="text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Chemical Control */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Non-Chemical Control</h3>
            <div className="space-y-6">
              {nonChemicalMethods.map((method, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-accent/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <method.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{method.title}</h4>
                      <p className="text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentMethods;