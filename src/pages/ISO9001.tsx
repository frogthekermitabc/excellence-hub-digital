import { Shield, CheckCircle, TrendingUp, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";
import CourseScheduleTable from "@/components/CourseScheduleTable";

const ISO9001 = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <AnimatedHero variant="gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedContent>
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
                <Shield className="h-16 w-16" />
              </div>
            </AnimatedContent>
            <AnimatedContent>
              <AnimatedText className="text-4xl md:text-5xl font-bold mb-6" type="word">
                {t("iso9001.title")}
              </AnimatedText>
            </AnimatedContent>
            <AnimatedContent>
              <AnimatedText className="text-2xl mb-4" delay={0.3}>
                {t("iso9001.subtitle")}
              </AnimatedText>
            </AnimatedContent>
            <AnimatedContent>
              <AnimatedText className="text-lg opacity-90" delay={0.5}>
                {t("iso9001.tagline")}
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
              About ISO 9001
            </a>
            <a href="#benefits" className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-sm font-medium transition-colors">
              Key Benefits
            </a>
            <a href="#industries" className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-sm font-medium transition-colors">
              Industries
            </a>
            <a href="#process" className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-sm font-medium transition-colors">
              Implementation
            </a>
          </div>
        </div>
      </section>

      {/* Course Schedule */}
      <section id="schedule" className="py-16 scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">ISO 9001 Course Schedule</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            View our upcoming ISO 9001:2015 training sessions. Click JOIN to register your interest or contact us for in-house training.
          </p>
          <CourseScheduleTable courseType="ISO 9001" />
        </div>
      </section>

      {/* What is ISO 9001 */}
      <section id="about" className="py-16 bg-muted scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{t("iso9001.whatIs")}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t("iso9001.description1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("iso9001.description2")}</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="py-16 scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("iso9001.benefits")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso9001.benefit1Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso9001.benefit1Desc")}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso9001.benefit2Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso9001.benefit2Desc")}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso9001.benefit3Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso9001.benefit3Desc")}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso9001.benefit4Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso9001.benefit4Desc")}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Needs It */}
      <section id="industries" className="py-16 bg-muted scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t("iso9001.whoNeeds")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                t("iso9001.manufacturing"),
                t("iso9001.services"),
                t("iso9001.healthcare"),
                t("iso9001.education"),
                t("iso9001.construction"),
                t("iso9001.it"),
                t("iso9001.government"),
                t("iso9001.hospitality"),
                t("iso9001.logistics"),
                t("iso9001.financial"),
                t("iso9001.retail"),
                t("iso9001.professional"),
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
      <section id="process" className="py-16 scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("iso9001.process")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: t("iso9001.step1"),
                description: t("iso9001.step1Desc"),
              },
              {
                step: "2",
                title: t("iso9001.step2"),
                description: t("iso9001.step2Desc"),
              },
              {
                step: "3",
                title: t("iso9001.step3"),
                description: t("iso9001.step3Desc"),
              },
              {
                step: "4",
                title: t("iso9001.step4"),
                description: t("iso9001.step4Desc"),
              },
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

      <Footer />
    </div>
  );
};

export default ISO9001;
