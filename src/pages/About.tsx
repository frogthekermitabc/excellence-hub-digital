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
              Quality Assurance International (QAI) has been a trusted partner in quality management since 1995. 
              With over 30 years of experience, we have helped thousands of organizations across Malaysia, Indonesia, 
              and Singapore achieve and maintain their ISO certifications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our comprehensive services include training, consulting, and auditing for various ISO standards, 
              ensuring that your organization meets international quality benchmarks while driving operational excellence.
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
                To be the leading ISO certification consultancy in Southeast Asia, recognized for excellence, 
                integrity, and innovation in quality management solutions.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with world-class ISO certification services, expert training, and 
                strategic consulting that drives sustainable growth and operational excellence.
              </p>
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                QAI is committed to delivering exceptional quality management solutions that exceed client expectations. 
                We continuously improve our services through:
              </p>
              <ul className="space-y-3">
                {[
                  "Maintaining the highest standards of professional integrity and ethics",
                  "Providing expert guidance by qualified and experienced consultants",
                  "Ensuring customer satisfaction through personalized service delivery",
                  "Continuous professional development of our team",
                  "Adherence to international ISO standards and best practices",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
          <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
            <Badge className="text-base px-6 py-3 bg-gradient-to-r from-primary to-secondary">
              MOF Registered
            </Badge>
            <Badge className="text-base px-6 py-3 bg-gradient-to-r from-primary to-secondary">
              HRD Corp Certified
            </Badge>
            <Badge className="text-base px-6 py-3 bg-gradient-to-r from-primary to-secondary">
              Bumiputera Status
            </Badge>
            <Badge className="text-base px-6 py-3 bg-gradient-to-r from-primary to-secondary">
              IRCA Registered Auditors
            </Badge>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Geographic Reach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { country: "Malaysia", description: "Headquarters in Subang Jaya with nationwide coverage" },
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
