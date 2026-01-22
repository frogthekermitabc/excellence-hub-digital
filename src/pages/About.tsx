import { Award, Target, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";
import { SEO } from "@/components/SEO";
import teamPhoto from "@/assets/team-group.jpg";
import professionalTeam from "@/assets/professional-team.jpg";

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
      <SEO
        title="About QAI Malaysia - 30 Years of ISO Excellence | Est. 1995"
        description="QAI Malaysia (QAI Sdn Bhd) - Trusted ISO certification and consulting partner since 1995. 300+ satisfied clients, HRD Corp registered, expert ISO training provider in Puchong, Selangor."
        keywords="QAI Malaysia, QAI Consulting Malaysia, QAI Sdn Bhd, about QAI, ISO company history, ISO certification company Malaysia, quality assurance Malaysia, ISO training provider, HRD Corp registered, Puchong Selangor"
        canonicalUrl={window.location.origin + "/about"}
      />
      <Navigation />

      {/* Hero Section */}
      <AnimatedHero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedContent>
            <AnimatedText className="text-4xl md:text-5xl font-bold mb-6 font-playfair" type="word">
              {t("about.title")}
            </AnimatedText>
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-xl max-w-3xl mx-auto opacity-90" delay={0.3}>
              {t("about.subtitle")}
            </AnimatedText>
          </AnimatedContent>
        </div>
      </AnimatedHero>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <AnimatedText className="text-3xl font-bold mb-6">{t("about.whoWeAre")}</AnimatedText>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t("about.para1")}</p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t("about.para2")}</p>
              </div>
              <div>
                <img
                  src={teamPhoto}
                  alt="QAI Malaysia consulting team in Puchong, Selangor"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-4xl mx-auto">{t("about.para3")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">{t("about.para4")}</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg" style={{ background: "var(--gradient-energy)" }}>
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{t("about.ourVision")}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t("about.visionText")}</p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg" style={{ background: "var(--gradient-energy)" }}>
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{t("about.ourMission")}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">{t("about.missionText")}</p>
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
              <p className="text-lg text-muted-foreground leading-relaxed">{t("about.qualityPolicyText")}</p>
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
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ background: "var(--gradient-energy)" }}
                    >
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
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
                  <Badge className="border-0 text-white" style={{ background: "var(--gradient-energy)" }}>
                    {t("about.hrdCorpProvider")}
                  </Badge>
                </div>
              </Card>
              <div>
                <img
                  src={professionalTeam}
                  alt="QAI Malaysia professional team office in Puchong"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
