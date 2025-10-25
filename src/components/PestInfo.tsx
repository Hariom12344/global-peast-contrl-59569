import { Bug, Plane, Users2, Rat, Zap, TreePine } from "lucide-react";

const pests = [
  {
    icon: Bug,
    name: "Cockroaches",
    types: [
      "Oriental cockroach (Blatta orientalis)",
      "German cockroach (Blattella germanica)", 
      "American Cockroach (Periplaneta americana)"
    ],
    description: "Common household pests that can spread diseases and contaminate food."
  },
  {
    icon: Plane,
    name: "Flies",
    types: ["Housefly (Musca domestica)"],
    description: "Potential vectors of diseases like dysentery, gastroenteritis, and tuberculosis. They move from filth to food indiscriminately."
  },
  {
    icon: Users2,
    name: "Ants", 
    types: [
      "Pharaoh's ant (Monomorium pharaonis)",
      "Roger's ant (Hypoponera punctatissima)"
    ],
    description: "Pharaoh's ants thrive in heated premises like hospitals. Roger's ants prefer damp locations around drains."
  },
  {
    icon: Rat,
    name: "Rodents",
    types: [
      "House Rats (Rattus rattus)",
      "Mice (Mus domesticus)",
      "Rodents (Bandicotta indica)"
    ],
    description: "Eat 1/10th of their body weight daily. Contaminate food with fur, urine and feces, increasing risk of Salmonellosis."
  },
  {
    icon: Zap,
    name: "Mosquitoes",
    types: ["Various species"],
    description: "Serious consequence includes transmission of malaria, dengue virus, Zika which can lead to disabling and deadly effects."
  },
  {
    icon: TreePine,
    name: "Termites",
    types: ["Various species"],
    description: "Destroy wooden structures and can cause significant property damage if left untreated."
  }
];

const PestInfo = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Major Household Pests</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the pests we deal with helps us provide better, targeted solutions for your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pests.map((pest, index) => (
            <div key={index} className="bg-card p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <pest.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{pest.name}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">{pest.description}</p>
              
              <div>
                <h4 className="font-medium text-foreground mb-2">Common Types:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {pest.types.map((type, typeIndex) => (
                    <li key={typeIndex} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="italic">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PestInfo;