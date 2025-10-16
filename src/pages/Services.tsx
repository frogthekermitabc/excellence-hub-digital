import { GraduationCap, Users, FileCheck, Target, BookOpen, ClipboardList } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";
import trainingImage from "@/assets/training-session.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive ISO certification solutions tailored to your organization's needs
          </p>
        </div>
      </section>

      {/* Training Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">Training Services</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Empower your team with expert-led ISO training programs designed to build competence and ensure successful implementation.
              </p>
              <div className="space-y-4">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Public Training Courses</h3>
                  <p className="text-sm text-muted-foreground">
                    Scheduled courses open to all participants with HRD Corp claimable options available.
                  </p>
                </Card>
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">In-House Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Customized programs delivered at your location, tailored to your specific requirements.
                  </p>
                </Card>
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Online/Virtual Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Flexible e-learning solutions with live instructor-led sessions and interactive materials.
                  </p>
                </Card>
              </div>
            </div>
            <div>
              <img 
                src={trainingImage} 
                alt="Training session" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={BookOpen}
              title="Awareness Courses"
              description="Introduction to ISO standards and management systems fundamentals"
            />
            <ServiceCard 
              icon={Target}
              title="Implementer Courses"
              description="Practical skills for implementing ISO management systems"
            />
            <ServiceCard 
              icon={ClipboardList}
              title="Internal Auditor"
              description="Comprehensive training for conducting effective internal audits"
            />
            <ServiceCard 
              icon={FileCheck}
              title="Lead Auditor"
              description="Advanced certification for ISO lead auditor qualification"
            />
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">Consulting Services</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert guidance from initial gap analysis through successful certification and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <h3 className="font-semibold mb-2">Gap Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Assess current practices against ISO requirements
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <h3 className="font-semibold mb-2">System Design</h3>
              <p className="text-sm text-muted-foreground">
                Develop tailored management system framework
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Guide your team through system deployment
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <h3 className="font-semibold mb-2">Certification Support</h3>
              <p className="text-sm text-muted-foreground">
                Pre-audit preparation and certification assistance
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              icon={FileCheck}
              title="Documentation Development"
              description="Creation of quality manuals, procedures, work instructions, and required documentation"
            />
            <ServiceCard 
              icon={Target}
              title="System Maintenance"
              description="Ongoing support to maintain and improve your management system performance"
            />
          </div>
        </div>
      </section>

      {/* Auditing Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <ClipboardList className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">Auditing Services</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional audit services to verify compliance and drive continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={FileCheck}
              title="Internal Audits"
              description="Regular system audits to verify compliance and identify improvement opportunities"
            />
            <ServiceCard 
              icon={Target}
              title="Surveillance Audits"
              description="Ongoing monitoring to maintain certification status and system effectiveness"
            />
            <ServiceCard 
              icon={ClipboardList}
              title="Pre-Certification Audits"
              description="Mock audits to ensure readiness for official certification assessment"
            />
            <ServiceCard 
              icon={Users}
              title="Second-Party Audits"
              description="Supplier and vendor audits to ensure supply chain quality standards"
            />
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "Manufacturing",
              "Oil & Gas",
              "Healthcare",
              "Education",
              "Construction",
              "Information Technology",
              "Government Agencies",
              "Financial Services",
              "Hospitality",
              "Logistics & Transportation",
              "Food & Beverage",
              "Professional Services",
            ].map((industry, idx) => (
              <Card key={idx} className="p-4 text-center hover:shadow-lg transition-all">
                <p className="font-medium text-sm">{industry}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
