import { Users, Award, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConsultantCard from "@/components/ConsultantCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Consultants = () => {
  const consultants = [
    {
      name: "Musri Tukiman",
      title: "Managing Director / Principal Consultant",
      education: [
        "B. Civil Engineering (University of Detroit, USA) ",
        "Master of Science in Manufacturing Systems Engineering (University of Warwick, UK)",
      ],
      experience: "30+ years in quality management and ISO certification",
      expertise: ["ISO 9001", "ISO 21001", "Quality Management", "Strategic Planning", "Organizational Excellence"],
      certifications: ["Lead Assessor ISO 9000", "Lead Assessor ISO 21001", "Quality Management Expert"],
    },
    {
      name: "Wan Zainal Abidin Wan Hanafi",
      title: "Director / Consultant",
      education: ["Master of Philosophy Materials Technology (Brunel University)"],
      experience: "30+ years in quality excellence and performance improvement",
      expertise: [
        "ISO 9001 Quality Management System",
        "Malcolm Baldrige Award Criteria",
        "Total Quality Management",
        "Quality Auditing",
        "Continuous Improvement",
        "Self-Assessment Workshop",
        "Prevention of Recurrence (SBK)",
      ],
      certifications: ["Lead Assessor (1992)", "APO Technical Expert - Asian Productivity Organisation, Tokyo, Japan"],
    },
    {
      name: "Abdul Wahab Ikhsan",
      title: "Consultant",
      education: ["Master of Business Administration (Cranfield School of Management, UK)"],
      experience: "30+ years in auditing, consulting and quality assurance",
      expertise: [
        "Quality Management Systems",
        "Surveillance Audits",
        "Second Party Audits",
        "Oil & Gas Industry",
        "Design Consultant Auditing",
        "Fabricators & Manufacturers Auditing",
        "ASEAN Region Consulting",
      ],
      certifications: ["IRCA Registered Lead QMS Auditor"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Consultants</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Meet our team of highly qualified ISO certification experts with decades of combined experience
          </p>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Industry-Leading Expertise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our consultants bring a wealth of knowledge from diverse industries and international markets. With
              advanced qualifications, professional certifications, and extensive hands-on experience, they provide
              strategic guidance that drives real results for your organization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-muted rounded-lg">
                <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Combined Years of Experience</p>
              </div>
              <div className="p-6 bg-muted rounded-lg">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Professional Certifications</p>
              </div>
              <div className="p-6 bg-muted rounded-lg">
                <Globe className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
            </div>
          </div>

          {/* Major Clients Served */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Trusted by Leading Organizations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "SPAN Malaysia",
                "Ministry of Health",
                "JPNIN",
                "Government Agencies",
                "Oil & Gas Companies",
                "Manufacturing Sector",
                "Healthcare Institutions",
                "Educational Organizations",
              ].map((client, idx) => (
                <div key={idx} className="p-4 bg-muted rounded-lg text-center text-sm font-medium">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultant Profiles */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {consultants.map((consultant, idx) => (
              <ConsultantCard key={idx} {...consultant} />
            ))}
          </div>
        </div>
      </section>

      {/* Request a Consultant CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Work With Our Experts</h2>
            <p className="text-lg mb-8 opacity-90">
              Connect with our consultants to discuss your ISO certification needs and find the right solution for your
              organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Request a Consultant
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Training Programs
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

export default Consultants;
