import { Shield, Heart, Users, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ISO45001 = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-r from-accent to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
              <Shield className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ISO 45001:2018</h1>
            <p className="text-2xl mb-4">Occupational Health & Safety Management</p>
            <p className="text-lg opacity-90">
              Protect your workforce and create safer, healthier working environments
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What is ISO 45001:2018?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ISO 45001:2018 is the world's international standard for occupational health and safety (OH&S). 
              It provides a framework to increase safety, reduce workplace risks, and enhance health and 
              well-being at work, enabling organizations to proactively improve their OH&S performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The standard helps organizations provide safe and healthy workplaces by preventing work-related 
              injury and ill health, as well as by proactively improving OH&S performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Safety Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Worker Safety</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce workplace accidents, injuries, and occupational diseases through 
                    systematic risk management and prevention.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Risk Reduction</h3>
                  <p className="text-sm text-muted-foreground">
                    Identify, assess, and control health and safety risks proactively to 
                    prevent incidents before they occur.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Employee Morale</h3>
                  <p className="text-sm text-muted-foreground">
                    Improve employee engagement and morale by demonstrating commitment to 
                    their health, safety, and well-being.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Legal Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensure compliance with occupational health and safety legislation and 
                    reduce legal liabilities.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent to-primary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Prioritize Workplace Safety</h2>
            <p className="text-lg mb-8 opacity-90">
              Implement ISO 45001 and create a safer, healthier work environment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  OH&S Training
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ISO45001;
