import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConsultantCard from "@/components/ConsultantCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";
import musriImage from "@/assets/musri-tukiman.png";
import abdulWahabImage from "@/assets/abdul-wahab.png";
import wanZainalImage from "@/assets/wan-zainal.jpg";

const Consultants = () => {
  const { t } = useLanguage();
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
      image: musriImage,
      linkedinUrl: "https://www.linkedin.com/in/musri-tukiman-6581b248/",
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
      image: wanZainalImage,
      linkedinUrl: "https://www.linkedin.com/in/wanzainalhanafi/?originalSubdomain=my",
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
      image: abdulWahabImage,
      linkedinUrl: "https://www.linkedin.com/in/abd-wahab-ikhsan-488408105/",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="QAI Malaysia Expert ISO Consultants | Certified Lead Auditors"
        description="Meet QAI Malaysia's team of certified ISO consultants and lead auditors. 30+ years experience in ISO 9001, 14001, 45001, 27001, and 37001 implementation and training in Puchong."
        keywords="QAI Malaysia consultants, QAI Consulting Malaysia team, ISO consultant Malaysia, ISO lead auditor, ISO trainer, certified ISO consultant, ISO 9001 consultant, Puchong"
        canonicalUrl={window.location.origin + "/consultants"}
      />
      <Navigation />

      {/* Hero Section */}
      <AnimatedHero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedContent>
            <AnimatedText className="text-4xl md:text-5xl font-bold mb-6 font-playfair" type="word">
              {t("consultants.title")}
            </AnimatedText>
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-xl max-w-3xl mx-auto opacity-90" delay={0.3}>
              {t("consultants.subtitle")}
            </AnimatedText>
          </AnimatedContent>
        </div>
      </AnimatedHero>

      {/* Consultant Profiles */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("consultants.teamTitle")}</h2>
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
            <h2 className="text-3xl font-bold mb-4">{t("consultants.workWithExperts")}</h2>
            <p className="text-lg mb-8 opacity-90">{t("consultants.workWithExpertsDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  {t("consultants.requestConsultant")}
                </Button>
              </Link>
              <Link to="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  {t("consultants.viewTraining")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Leading Organizations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">{t("consultants.trustedBy")}</h3>
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

      <Footer />
    </div>
  );
};

export default Consultants;
