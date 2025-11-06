import { Link } from "react-router-dom";
import { Award, Users, Globe, TrendingUp, GraduationCap, Shield, FileCheck, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import ServiceCard from "@/components/ServiceCard";
import { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";
import CompanyUpdates from "@/components/CompanyUpdates";
import HeroCarousel from "@/components/HeroCarousel";
import { SEO } from "@/components/SEO";
import qaiLogo from "@/assets/qai-logo.png";
import heroTeam1 from "@/assets/hero-team-1.jpg";
import heroTraining1 from "@/assets/hero-training-1.jpg";
import heroMeeting1 from "@/assets/hero-meeting-1.jpg";
import heroTraining2 from "@/assets/hero-training-2.jpg";

const Index = () => {
  const { t } = useLanguage();
  
  // Hero carousel slides
  const heroSlides = [
    {
      image: heroTeam1,
      alt: "QAI training team photo"
    },
    {
      image: heroTraining1,
      alt: "ISO training session in progress"
    },
    {
      image: heroMeeting1,
      alt: "Professional meeting with government officials"
    },
    {
      image: heroTraining2,
      alt: "ISO certification training classroom"
    }
  ];
  
  return (
    <div className="min-h-screen">
      <SEO 
        title="QAI Malaysia - ISO Certification Training & Consulting | Est. 1995"
        description="QAI Malaysia (QAI Sdn Bhd) - Leading ISO certification training and consulting provider in Malaysia since 1995. Expert ISO 9001, 14001, 45001, 27001, and 37001 services in Puchong, Selangor."
        keywords="QAI Malaysia, QAI Consulting Malaysia, QAI Sdn Bhd, ISO certification Malaysia, ISO training Malaysia, ISO consultant Puchong, quality management Malaysia, ISO 9001 training, ISO 14001, ISO 45001, ISO 27001, Puchong Selangor"
        canonicalUrl={window.location.origin + "/"}
      />
      <Navigation />

      {/* Hero Section - Carousel */}
      <HeroCarousel slides={heroSlides} autoplayDelay={5000}>
        <AnimatedContent>
          <img 
            src={qaiLogo} 
            alt="QAI - Quality Assurance International" 
            className="h-24 md:h-32 w-auto mx-auto mb-6"
          />
        </AnimatedContent>
        <AnimatedContent>
          <AnimatedText className="text-3xl md:text-4xl font-bold text-white mb-4" type="word">
            {t("home.heroTitle")}
          </AnimatedText>
        </AnimatedContent>
        <AnimatedContent>
          <AnimatedText className="text-xl text-white/95 mb-3 font-semibold" delay={0.3}>
            {t("home.heroSubtitle")}
          </AnimatedText>
        </AnimatedContent>
        <AnimatedContent>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                {t("home.getFreeQuote")}
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur text-white border-white hover:bg-white hover:text-primary">
                {t("home.learnMore")}
              </Button>
            </Link>
          </div>
        </AnimatedContent>
      </HeroCarousel>

      {/* Page Navigation */}
      <section className="py-6 bg-muted/50 sticky top-16 z-10 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#updates" className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-sm font-medium transition-colors">
              Latest Updates
            </a>
            <a href="#iso-systems" className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-sm font-medium transition-colors">
              ISO Management Systems
            </a>
            <a href="#services" className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-sm font-medium transition-colors">
              Our Services
            </a>
            <a href="#credentials" className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-sm font-medium transition-colors">
              Our Credentials
            </a>
          </div>
        </div>
      </section>

      {/* Company Updates Section */}
      <div id="updates" className="scroll-mt-32">
        <CompanyUpdates />
      </div>

      {/* ISO Management Systems */}
      <section id="iso-systems" className="py-16 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText className="text-3xl md:text-4xl font-bold mb-4">{t("home.isoManagementSystems")}</AnimatedText>
            <AnimatedText className="text-muted-foreground max-w-2xl mx-auto" delay={0.2}>
              {t("home.isoManagementSystemsDesc")}
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Shield}
              title="ISO 9001:2015"
              description={t("home.iso9001Desc")}
              link="/iso-9001"
            />
            <ServiceCard 
              icon={Globe}
              title="ISO 14001:2015"
              description={t("home.iso14001Desc")}
              link="/iso-14001"
            />
            <ServiceCard 
              icon={Shield}
              title="ISO 45001:2018"
              description={t("home.iso45001Desc")}
              link="/iso-45001"
            />
            <ServiceCard 
              icon={FileCheck}
              title="ISO 27001:2022"
              description={t("home.iso27001Desc")}
              link="/iso-27001"
            />
            <ServiceCard 
              icon={Award}
              title="ISO 37001:2018"
              description={t("home.iso37001Desc")}
              link="/iso-37001"
            />
            <ServiceCard 
              icon={BookOpen}
              title="ISO 21001"
              description={t("home.iso21001Desc")}
              link="/iso-21001"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 bg-muted scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText className="text-3xl md:text-4xl font-bold mb-4">{t("home.ourServices")}</AnimatedText>
            <AnimatedText className="text-muted-foreground max-w-2xl mx-auto" delay={0.2}>
              {t("home.ourServicesDesc")}
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              icon={GraduationCap}
              title={t("home.trainingServices")}
              description={t("home.trainingServicesDesc")}
              link="/courses"
            />
            <ServiceCard 
              icon={Users}
              title={t("home.consultingServices")}
              description={t("home.consultingServicesDesc")}
              link="/services"
            />
            <ServiceCard 
              icon={FileCheck}
              title={t("home.auditingServices")}
              description={t("home.auditingServicesDesc")}
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-16 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Credentials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by hundreds of organizations across the Middle East
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <StatCard icon={Award} value="30+" label={t("home.yearsOfExcellence")} />
            <StatCard icon={Users} value="300+" label={t("home.satisfiedClients")} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText className="text-3xl md:text-4xl font-bold mb-4">{t("home.readyToCertify")}</AnimatedText>
          <AnimatedText className="text-xl mb-8 max-w-2xl mx-auto opacity-90" delay={0.2}>
            {t("home.readyToCertifyDesc")}
          </AnimatedText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                {t("home.scheduleConsultation")}
              </Button>
            </Link>
            <Link to="/consultants">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                {t("home.meetOurTeam")}
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
