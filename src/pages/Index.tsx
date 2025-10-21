import { Link } from "react-router-dom";
import { Award, Users, Globe, TrendingUp, GraduationCap, Shield, FileCheck, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-office.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional consulting team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Guide with Passion
          </h1>
          <p className="text-2xl text-white/95 mb-4 font-semibold">
            Inspiring Excellence Through Quality & Integrity Since 1995
          </p>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Leading ISO certification consultancy serving Malaysia, Indonesia, and Singapore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur text-white border-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={Award} value="30+" label="Years of Excellence" />
            <StatCard icon={Users} value="1000+" label="Satisfied Clients" />
            <StatCard icon={Globe} value="3" label="Countries Served" />
            <StatCard icon={TrendingUp} value="5000+" label="Certifications Completed" />
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ISO Management Systems</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive certification, training, and consulting services for international quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Shield}
              title="ISO 9001:2015"
              description="Quality Management System for operational excellence and customer satisfaction"
              link="/iso-9001"
            />
            <ServiceCard 
              icon={Globe}
              title="ISO 14001:2015"
              description="Environmental Management System for sustainable business practices"
              link="/iso-14001"
            />
            <ServiceCard 
              icon={Shield}
              title="ISO 45001:2018"
              description="Occupational Health & Safety Management for workplace protection"
              link="/iso-45001"
            />
            <ServiceCard 
              icon={FileCheck}
              title="ISO 27001:2022"
              description="Information Security Management for data protection and cybersecurity"
              link="/iso-27001"
            />
            <ServiceCard 
              icon={Award}
              title="ISO 37001:2018"
              description="Anti-Bribery Management System for corruption prevention"
              link="/iso-37001"
            />
            <ServiceCard 
              icon={BookOpen}
              title="ISO 21001"
              description="Educational Organisations Management for quality in learning"
              link="/iso-21001"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions for ISO certification and quality management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              icon={GraduationCap}
              title="Training Services"
              description="Public courses, in-house training, and customized programs. HRD Corp claimable courses available."
              link="/courses"
            />
            <ServiceCard 
              icon={Users}
              title="Consulting Services"
              description="ISO implementation, gap analysis, documentation development, and system maintenance support."
              link="/services"
            />
            <ServiceCard 
              icon={FileCheck}
              title="Auditing Services"
              description="Internal audits, surveillance audits, pre-certification, and second-party auditing."
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Certified?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Connect with our expert consultants and start your ISO certification journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/consultants">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
