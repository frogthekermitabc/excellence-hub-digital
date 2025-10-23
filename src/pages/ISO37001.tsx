import { Scale, CheckCircle, Users, Building } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";

const ISO37001 = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <AnimatedHero variant="gradient" className="bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedContent>
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
                <Scale className="h-16 w-16" />
              </div>
            </AnimatedContent>
            <AnimatedContent>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">ISO 37001:2018</h1>
            </AnimatedContent>
            <AnimatedContent>
              <p className="text-2xl mb-4">Anti-Bribery Management System</p>
            </AnimatedContent>
            <AnimatedContent>
              <p className="text-lg opacity-90">
                Combat corruption and demonstrate your commitment to ethical business practices
              </p>
            </AnimatedContent>
          </div>
        </div>
      </AnimatedHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What is ISO 37001:2018?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ISO 37001:2018 specifies requirements and provides guidance for establishing, implementing, 
              maintaining, reviewing, and improving an anti-bribery management system (ABMS). The system 
              can be standalone or integrated into an overall management system.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It addresses bribery in the public, private, and not-for-profit sectors, helping organizations 
              implement or enhance controls to help prevent, detect, and respond to bribery and comply with 
              anti-bribery laws and voluntary commitments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Governance Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg">
                  <Scale className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Legal Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Demonstrate compliance with anti-bribery and anti-corruption laws including 
                    MACC Act and international legislation.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Corporate Governance</h3>
                  <p className="text-sm text-muted-foreground">
                    Strengthen governance framework and demonstrate commitment to ethical 
                    business conduct at all levels.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Stakeholder Confidence</h3>
                  <p className="text-sm text-muted-foreground">
                    Build trust with investors, partners, and customers through transparent 
                    anti-bribery policies and controls.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg">
                  <Building className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Business Opportunities</h3>
                  <p className="text-sm text-muted-foreground">
                    Access government contracts and international markets that require 
                    anti-bribery certification.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Strengthen Your Integrity</h2>
            <p className="text-lg mb-8 opacity-90">
              Implement ISO 37001 and build a culture of compliance and ethical conduct
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  ABMS Training
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

export default ISO37001;
