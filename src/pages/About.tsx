import { Award, Target, Eye, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const timeline = [
    { year: "1995", event: "QAI established, beginning our journey in quality management consulting" },
    { year: "2000", event: "Expanded services to include ISO 14001 environmental management" },
    { year: "2005", event: "Reached milestone of 500+ successful certifications" },
    { year: "2010", event: "Extended operations to Indonesia and Singapore" },
    { year: "2015", event: "Celebrated 20 years of excellence with 2000+ clients served" },
    { year: "2020", event: "Launched comprehensive online training programs" },
    { year: "2025", event: "30 years of inspiring excellence in quality management" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About QAI</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Three decades of excellence in ISO certification, training, and consulting services
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              QAI Sdn Bhd (Quality Assurance International) was incorporated in August 1995 with a clear vision — 
              to inspire and empower organizations to achieve excellence through quality, integrity, and continuous improvement.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Beginning with a focus on ISO 9001 (Quality Management System), QAI has progressively expanded its 
              expertise to include ISO 14001 (Environmental Management System), ISO 27001 (Information Security Management System), 
              ISO 45001 (Occupational Health and Safety Management System), and ISO 37001 (Anti-Bribery Management System), 
              along with Kaizen and Lean Management practices.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For nearly three decades, QAI has been a trusted partner in providing training, consulting, and auditing 
              services across Malaysia and ASEAN countries, including Indonesia and Singapore.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through unwavering commitment, professionalism, and adaptability, QAI has successfully sustained its growth 
              and reputation amidst the changing business and economic landscapes — continuing to uphold its mission of 
              enhancing organizational performance and promoting a culture of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To assist clients to operate cost effective competitive businesses using the ISO Quality Management 
                System Standards as the basis for continual improvement. QAI achieves this by facilitating clients 
                to proactively look at areas of potential and achievable improvements and adopt innovative, practical 
                and realistic targets over a set timeframe.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Committed in providing excellent training and consultancy services to all clients by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Ensuring innovative and effective knowledge transfer</li>
                <li>Facilitating and enhancing management competency</li>
                <li>Delivering effective solutions across the clients' organization</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Quality Policy</h2>
            </div>
            <Card className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Committed in providing value and excellent training and consulting services that comply with 
                clients' requirements through continual improvement and effective quality management system.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <Card className="p-4">
                      <p className="text-muted-foreground">{item.event}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Registrations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Registrations</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-primary">Registration Number:</strong>
                  <p className="text-muted-foreground">199501025484 (354689-V)</p>
                </div>
                <div>
                  <strong className="text-primary">Bank Account:</strong>
                  <p className="text-muted-foreground">Maybank - 512482102866</p>
                </div>
                <div>
                  <strong className="text-primary">MOF Certificate No:</strong>
                  <p className="text-muted-foreground">K60765123024091531</p>
                </div>
                <div>
                  <strong className="text-primary">MOF Reg. Ref. No:</strong>
                  <p className="text-muted-foreground">357-02074092</p>
                </div>
                <div>
                  <strong className="text-primary">MOF Validation Period:</strong>
                  <p className="text-muted-foreground">03/02/2025 - 15/03/2028</p>
                </div>
                <div>
                  <strong className="text-primary">Bumiputera Certificate No:</strong>
                  <p className="text-muted-foreground">BP60765123024091531</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <Badge className="bg-gradient-to-r from-primary to-secondary">
                  HRD CORP Registered Training Provider
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Geographic Reach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { country: "Malaysia", description: "Headquarters in Puchong with nationwide coverage" },
              { country: "Indonesia", description: "Serving major business centers across the archipelago" },
              { country: "Singapore", description: "Supporting enterprises in the financial hub of Southeast Asia" },
            ].map((location, idx) => (
              <Card key={idx} className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-primary">{location.country}</h3>
                <p className="text-sm text-muted-foreground">{location.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
