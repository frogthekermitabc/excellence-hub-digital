import { Lock, Shield, Database, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ISO27001 = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
              <Lock className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ISO 27001:2022</h1>
            <p className="text-2xl mb-4">Information Security Management System</p>
            <p className="text-lg opacity-90">
              Protect your data and demonstrate world-class information security practices
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What is ISO 27001:2022?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ISO 27001:2022 is the international standard for information security management systems (ISMS). 
              It provides a systematic approach to managing sensitive company information, ensuring it remains 
              secure through people, processes, and technology controls.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In today's digital age, protecting information assets is critical. ISO 27001 helps organizations 
              manage the security of assets such as financial information, intellectual property, employee details, 
              and information entrusted by third parties.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Security Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Data Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Safeguard confidential information and ensure the confidentiality, integrity, 
                    and availability of critical data assets.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Cyber Threat Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Identify, assess, and mitigate cybersecurity risks through systematic 
                    risk management approach.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Regulatory Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Meet data protection regulations including GDPR, PDPA, and other 
                    privacy requirements.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Customer Trust</h3>
                  <p className="text-sm text-muted-foreground">
                    Build stakeholder confidence and competitive advantage through 
                    demonstrated security commitment.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Secure Your Information Assets</h2>
            <p className="text-lg mb-8 opacity-90">
              Implement ISO 27001 and protect your organization from information security threats
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Protected
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Security Training
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

export default ISO27001;
