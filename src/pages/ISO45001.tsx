import { Shield, Heart, Users, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";
import CourseScheduleTable from "@/components/CourseScheduleTable";
import { SEO } from "@/components/SEO";

const ISO45001 = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <SEO 
        title="ISO 45001:2018 Training & Certification Malaysia | OHSMS | QAI"
        description="ISO 45001:2018 Occupational Health & Safety Management System training in Malaysia. Reduce workplace accidents, ensure worker safety, and improve safety culture. Lead auditor courses available."
        keywords="ISO 45001 training Malaysia, occupational health safety, OHSMS certification, workplace safety training, ISO 45001 lead auditor"
        canonicalUrl={window.location.origin + "/iso-45001"}
      />
      <Navigation />

      <AnimatedHero variant="gradient" className="bg-gradient-to-r from-accent to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedContent>
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
                <Shield className="h-16 w-16" />
              </div>
            </AnimatedContent>
            <AnimatedContent>
              <AnimatedText className="text-4xl md:text-5xl font-bold mb-6" type="word">
                {t("iso45001.title")}
              </AnimatedText>
            </AnimatedContent>
            <AnimatedContent>
              <AnimatedText className="text-2xl mb-4" delay={0.3}>
                {t("iso45001.subtitle")}
              </AnimatedText>
            </AnimatedContent>
            <AnimatedContent>
              <AnimatedText className="text-lg opacity-90" delay={0.5}>
                {t("iso45001.tagline")}
              </AnimatedText>
            </AnimatedContent>
          </div>
        </div>
      </AnimatedHero>

      {/* Page Navigation */}
      <section className="py-8 bg-muted/50 sticky top-16 z-10 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#schedule" className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-sm font-medium transition-colors">
              Course Schedule
            </a>
            <a href="#about" className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-sm font-medium transition-colors">
              About ISO 45001
            </a>
            <a href="#benefits" className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-sm font-medium transition-colors">
              Key Benefits
            </a>
          </div>
        </div>
      </section>

      {/* Course Schedule */}
      <section id="schedule" className="py-16 scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">ISO 45001 Course Schedule</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            View our upcoming ISO 45001:2018 Occupational Health & Safety training sessions.
          </p>
          <CourseScheduleTable courseType="ISO 45001" />
        </div>
      </section>

      <section id="about" className="py-16 bg-muted scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{t("iso45001.whatIs")}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t("iso45001.description1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("iso45001.description2")}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("iso45001.benefits")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg" style={{ background: 'var(--gradient-energy)' }}>
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso45001.benefit1Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso45001.benefit1Desc")}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg" style={{ background: 'var(--gradient-energy)' }}>
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso45001.benefit2Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso45001.benefit2Desc")}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg" style={{ background: 'var(--gradient-energy)' }}>
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso45001.benefit3Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso45001.benefit3Desc")}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg" style={{ background: 'var(--gradient-energy)' }}>
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso45001.benefit4Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso45001.benefit4Desc")}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ISO45001;
