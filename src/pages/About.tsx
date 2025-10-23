import { Award, Target, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";

const About = () => {
  const { t } = useLanguage();
  
  const timeline = [
    { year: "1995", event: t("about.timeline.1995") },
    { year: "2000", event: t("about.timeline.2000") },
    { year: "2005", event: t("about.timeline.2005") },
    { year: "2010", event: t("about.timeline.2010") },
    { year: "2015", event: t("about.timeline.2015") },
    { year: "2020", event: t("about.timeline.2020") },
    { year: "2025", event: t("about.timeline.2025") },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <AnimatedHero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedContent>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about.title")}</h1>
          </AnimatedContent>
          <AnimatedContent>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              {t("about.subtitle")}
            </p>
          </AnimatedContent>
        </div>
      </AnimatedHero>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{t("about.whoWeAre")}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("about.para1")}
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("about.para2")}
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("about.para3")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.para4")}
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
                <h3 className="text-2xl font-bold">{t("about.ourVision")}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.visionText")}
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t("about.ourMission")}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {t("about.missionText")}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t("about.mission1")}</li>
                <li>{t("about.mission2")}</li>
                <li>{t("about.mission3")}</li>
              </ul>
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
              <h2 className="text-3xl font-bold">{t("about.qualityPolicy")}</h2>
            </div>
            <Card className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.qualityPolicyText")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("about.ourJourney")}</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-center">{t("about.certificationsRegistrations")}</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-primary">{t("about.registrationNumber")}:</strong>
                  <p className="text-muted-foreground">199501025484 (354689-V)</p>
                </div>

                <div>
                  <strong className="text-primary">{t("about.mofCertificateNo")}:</strong>
                  <p className="text-muted-foreground">K60765123024091531</p>
                </div>
                <div>
                  <strong className="text-primary">{t("about.mofRegRefNo")}:</strong>
                  <p className="text-muted-foreground">357-02074092</p>
                </div>
                <div>
                  <strong className="text-primary">{t("about.mofValidationPeriod")}:</strong>
                  <p className="text-muted-foreground">03/02/2025 - 15/03/2028</p>
                </div>
                <div>
                  <strong className="text-primary">{t("about.bumiputeraCertificateNo")}:</strong>
                  <p className="text-muted-foreground">BP60765123024091531</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <Badge className="bg-gradient-to-r from-primary to-secondary">
                  {t("about.hrdCorpProvider")}
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("about.ourGeographicReach")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { country: "Malaysia", description: t("about.malaysiaDesc") },
              { country: "Indonesia", description: t("about.indonesiaDesc") },
              { country: "Singapore", description: t("about.singaporeDesc") },
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
