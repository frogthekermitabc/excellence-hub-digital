import { GraduationCap, Users, FileCheck, Target, BookOpen, ClipboardList } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";
import trainingImage from "@/assets/training-meeting.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";
import { SEO } from "@/components/SEO";

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEO 
        title="QAI Malaysia ISO Training, Consulting & Auditing Services"
        description="QAI Malaysia (QAI Sdn Bhd) - Comprehensive ISO services including training, consulting, and auditing for all ISO standards. Expert gap analysis, system implementation, and certification support in Puchong."
        keywords="QAI Malaysia services, QAI Consulting Malaysia, ISO training Malaysia, ISO consulting services, ISO auditing, in-house training, ISO implementation, ISO certification support, gap analysis, Puchong"
        canonicalUrl={window.location.origin + "/services"}
      />
      <Navigation />

      {/* Hero Section */}
      <AnimatedHero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedContent>
            <AnimatedText className="text-4xl md:text-5xl font-bold mb-6" type="word">{t("services.title")}</AnimatedText>
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-xl max-w-3xl mx-auto opacity-90" delay={0.3}>
              {t("services.subtitle")}
            </AnimatedText>
          </AnimatedContent>
        </div>
      </AnimatedHero>

      {/* Training Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold">{t("services.training")}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                {t("services.trainingDesc")}
              </p>
              <div className="space-y-4">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">{t("services.publicCourses")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("services.publicCoursesDesc")}
                  </p>
                </Card>
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">{t("services.inHouse")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("services.inHouseDesc")}
                  </p>
                </Card>
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">{t("services.online")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("services.onlineDesc")}
                  </p>
                </Card>
              </div>
            </div>
            <div>
              <img 
                src={trainingImage} 
                alt="Training session" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={BookOpen}
              title={t("services.awareness")}
              description={t("services.awarenessDesc")}
            />
            <ServiceCard 
              icon={Target}
              title={t("services.implementer")}
              description={t("services.implementerDesc")}
            />
            <ServiceCard 
              icon={ClipboardList}
              title={t("services.internalAuditor")}
              description={t("services.internalAuditorDesc")}
            />
            <ServiceCard 
              icon={FileCheck}
              title={t("services.leadAuditor")}
              description={t("services.leadAuditorDesc")}
            />
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">{t("services.consulting")}</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("services.consultingDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <h3 className="font-semibold mb-2">{t("services.gapAnalysis")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("services.gapAnalysisDesc")}
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <h3 className="font-semibold mb-2">{t("services.systemDesign")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("services.systemDesignDesc")}
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <h3 className="font-semibold mb-2">{t("services.implementation")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("services.implementationDesc")}
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <h3 className="font-semibold mb-2">{t("services.certSupport")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("services.certSupportDesc")}
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              icon={FileCheck}
              title={t("services.docDev")}
              description={t("services.docDevDesc")}
            />
            <ServiceCard 
              icon={Target}
              title={t("services.systemMaint")}
              description={t("services.systemMaintDesc")}
            />
          </div>
        </div>
      </section>

      {/* Auditing Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <ClipboardList className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">{t("services.auditing")}</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("services.auditingDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={FileCheck}
              title={t("services.internalAudits")}
              description={t("services.internalAuditsDesc")}
            />
            <ServiceCard 
              icon={Target}
              title={t("services.surveillance")}
              description={t("services.surveillanceDesc")}
            />
            <ServiceCard 
              icon={ClipboardList}
              title={t("services.preCert")}
              description={t("services.preCertDesc")}
            />
            <ServiceCard 
              icon={Users}
              title={t("services.secondParty")}
              description={t("services.secondPartyDesc")}
            />
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("services.industries")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              t("services.manufacturing"),
              t("services.oilGas"),
              t("services.healthcare"),
              t("services.education"),
              t("services.construction"),
              t("services.it"),
              t("services.government"),
              t("services.financial"),
              t("services.hospitality"),
              t("services.logistics"),
              t("services.foodBev"),
              t("services.professional"),
            ].map((industry, idx) => (
              <Card key={idx} className="p-4 text-center hover:shadow-lg transition-all">
                <p className="font-medium text-sm">{industry}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
