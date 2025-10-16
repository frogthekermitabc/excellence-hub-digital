import { Shield, CheckCircle, TrendingUp, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ISO9001 = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
              <Shield className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ISO 9001:2015</h1>
            <p className="text-2xl mb-4">Quality Management System</p>
            <p className="text-lg opacity-90">
              The world's most recognized quality management standard for operational excellence
            </p>
          </div>
        </div>
      </section>

      {/* What is ISO 9001 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What is ISO 9001:2015?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ISO 9001:2015 is the international standard that specifies requirements for a quality management 
              system (QMS). Organizations use this standard to demonstrate their ability to consistently provide 
              products and services that meet customer and regulatory requirements.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It is the most widely used quality management standard in the world, helping organizations of all 
              sizes and sectors improve their performance, meet customer expectations, and demonstrate their 
              commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Enhanced Customer Satisfaction</h3>
                  <p className="text-sm text-muted-foreground">
                    Consistently meet customer requirements and enhance satisfaction through effective 
                    application of the system and continuous improvement.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Improved Operational Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    Streamline processes, reduce waste, and increase productivity through systematic 
                    approach to quality management.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Employee Engagement</h3>
                  <p className="text-sm text-muted-foreground">
                    Create a culture of quality awareness and continuous improvement, increasing 
                    employee engagement and competence.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Competitive Advantage</h3>
                  <p className="text-sm text-muted-foreground">
                    Demonstrate commitment to quality, win more tenders, and gain competitive edge 
                    in the marketplace.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Needs It */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Who Needs ISO 9001?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Manufacturing",
                "Services",
                "Healthcare",
                "Education",
                "Construction",
                "IT & Software",
                "Government",
                "Hospitality",
                "Logistics",
                "Financial Services",
                "Retail",
                "Professional Services"
              ].map((industry, idx) => (
                <div key={idx} className="p-4 bg-muted rounded-lg text-center text-sm font-medium">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Implementation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Gap Analysis",
                description: "Assess current practices against ISO 9001 requirements"
              },
              {
                step: "2",
                title: "Planning & Design",
                description: "Develop QMS framework and documentation structure"
              },
              {
                step: "3",
                title: "Implementation",
                description: "Deploy system, train staff, and establish processes"
              },
              {
                step: "4",
                title: "Certification",
                description: "Internal audit, management review, and certification audit"
              }
            ].map((phase, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="font-bold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get ISO 9001 Certified?</h2>
            <p className="text-lg mb-8 opacity-90">
              Connect with our expert consultants and start your quality management journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Request Consultation
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Training Courses
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

export default ISO9001;
