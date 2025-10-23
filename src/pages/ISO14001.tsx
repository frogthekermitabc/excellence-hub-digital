import { Leaf, Recycle, Globe, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";

const ISO14001 = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <AnimatedHero variant="gradient" className="bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedContent>
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
                <Leaf className="h-16 w-16" />
              </div>
            </AnimatedContent>
            <AnimatedContent>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">ISO 14001:2015</h1>
            </AnimatedContent>
            <AnimatedContent>
              <p className="text-2xl mb-4">Environmental Management System</p>
            </AnimatedContent>
            <AnimatedContent>
              <p className="text-lg opacity-90">
                Demonstrate your commitment to environmental sustainability and regulatory compliance
              </p>
            </AnimatedContent>
          </div>
        </div>
      </AnimatedHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What is ISO 14001:2015?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ISO 14001:2015 sets out the criteria for an environmental management system (EMS). 
              It maps out a framework that organizations can follow to set up an effective environmental 
              management system, helping them improve their environmental performance through more 
              efficient use of resources and reduction of waste.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The standard is applicable to any organization, regardless of size, type, or nature, 
              and can be integrated with other management system requirements to help organizations 
              achieve both environmental and economic goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Environmental Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg">
                  <Recycle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Resource Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce waste, optimize resource usage, and minimize environmental footprint 
                    through systematic environmental management.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Regulatory Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensure compliance with environmental regulations and demonstrate due diligence 
                    in environmental protection.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Cost Savings</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce energy consumption, waste disposal costs, and environmental liabilities 
                    while improving bottom line.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg">
                  <Leaf className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Brand Reputation</h3>
                  <p className="text-sm text-muted-foreground">
                    Enhance corporate image and stakeholder confidence through demonstrated 
                    environmental responsibility.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-secondary to-primary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Environmental Journey</h2>
            <p className="text-lg mb-8 opacity-90">
              Implement ISO 14001 and demonstrate your commitment to environmental sustainability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Training Programs
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

export default ISO14001;
