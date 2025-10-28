import { Link } from "react-router-dom";
import { Award, Users, Globe, TrendingUp, GraduationCap, Shield, FileCheck, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import ServiceCard from "@/components/ServiceCard";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";
import CompanyUpdates from "@/components/CompanyUpdates";
import heroImage from "@/assets/hero-office.jpg";
import qaiLogo from "@/assets/qai-logo.png";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <AnimatedHero variant="image">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional consulting team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedContent>
            <img 
              src={qaiLogo} 
              alt="QAI - Quality Assurance International" 
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto mb-8"
            />
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-4xl md:text-6xl font-bold text-white mb-6" type="word">
              {t("home.heroTitle")}
            </AnimatedText>
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-2xl text-white/95 mb-4 font-semibold" delay={0.3}>
              {t("home.heroSubtitle")}
            </AnimatedText>
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" delay={0.5}>
              {t("home.heroDescription")}
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
        </div>
      </AnimatedHero>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatCard icon={Award} value="30+" label={t("home.yearsOfExcellence")} />
            <StatCard icon={Users} value="300+" label={t("home.satisfiedClients")} />
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16">
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
      <section className="py-16 bg-muted">
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

      {/* Company Updates Section */}
      <CompanyUpdates />

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
