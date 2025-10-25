import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CompanyInfo from "@/components/CompanyInfo";
import PestInfo from "@/components/PestInfo";
import TreatmentMethods from "@/components/TreatmentMethods";
import WhyChooseUs from "@/components/WhyChooseUs";
import Customers from "@/components/Customers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CompanyInfo />
      <Services />
      <PestInfo />
      <TreatmentMethods />
      <WhyChooseUs />
      <Customers />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
