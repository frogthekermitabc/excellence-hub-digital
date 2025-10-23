import { Lock, Shield, Database, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";

const ISO27001 = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navigation />

      <AnimatedHero variant="gradient" className="bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedContent>
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
                <Lock className="h-16 w-16" />
              </div>
            </AnimatedContent>
            <AnimatedContent>
              <AnimatedText className="text-4xl md:text-5xl font-bold mb-6" type="word">
                {t("iso27001.title")}
              </AnimatedText>
            </AnimatedContent>
            <AnimatedContent>
              <AnimatedText className="text-2xl mb-4" delay={0.3}>
                {t("iso27001.subtitle")}
              </AnimatedText>
            </AnimatedContent>
            <AnimatedContent>
              <AnimatedText className="text-lg opacity-90" delay={0.5}>
                {t("iso27001.tagline")}
              </AnimatedText>
            </AnimatedContent>
          </div>
        </div>
      </AnimatedHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{t("iso27001.whatIs")}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t("iso27001.description1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("iso27001.description2")}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("iso27001.benefits")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso27001.benefit1Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso27001.benefit1Desc")}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso27001.benefit2Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso27001.benefit2Desc")}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso27001.benefit3Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso27001.benefit3Desc")}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("iso27001.benefit4Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("iso27001.benefit4Desc")}</p>
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

export default ISO27001;
