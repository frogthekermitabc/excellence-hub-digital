import { GraduationCap, Calendar, Users, Award, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";
import { SEO } from "@/components/SEO";
import instructorTeaching from "@/assets/instructor-teaching.jpg";
import instructorPresentation from "@/assets/instructor-presentation.jpg";

const Courses = () => {
  const { t } = useLanguage();
  const publicCourses = [
    {
      title: "ISO 9001:2015 INTRODUCTION",
      subtitle: "ISO 9001:2015 QUALITY MANAGEMENT SYSTEMS",
      detailsLink: "/iso-9001"
    },
    {
      title: "ISO 14001:2015 INTRODUCTION",
      subtitle: "ISO 14001:2015 ENVIRONMENTAL MANAGEMENT SYSTEMS",
      detailsLink: "/iso-14001"
    },
    {
      title: "ISO 45001:2018 INTRODUCTION",
      subtitle: "ISO 45001:2018 OCCUPATIONAL HEALTH & SAFETY",
      detailsLink: "/iso-45001"
    },
    {
      title: "ISO 27001:2022 INTRODUCTION",
      subtitle: "ISO 27001:2022 INFORMATION SECURITY MANAGEMENT",
      detailsLink: "/iso-27001"
    },
    {
      title: "ISO 37001:2018 INTRODUCTION",
      subtitle: "ISO 37001:2018 ANTI-BRIBERY MANAGEMENT SYSTEMS",
      detailsLink: "/iso-37001"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="QAI Malaysia ISO Training Courses | HRD Corp Registered"
        description="QAI Malaysia (QAI Sdn Bhd) - Comprehensive ISO training courses. HRD Corp registered programs for ISO 9001, 14001, 45001, 27001, 37001. Awareness, implementer, internal auditor, and lead auditor courses in Puchong."
        keywords="QAI Malaysia training, QAI Consulting Malaysia courses, ISO training courses Malaysia, ISO certification course, HRD Corp training, ISO lead auditor course, ISO internal auditor training, Puchong"
        canonicalUrl={window.location.origin + "/courses"}
      />
      <Navigation />

      {/* Hero Section */}
      <AnimatedHero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedContent>
            <GraduationCap className="h-16 w-16 mx-auto mb-6" />
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-4xl md:text-5xl font-bold mb-6 font-playfair" type="word">{t("courses.title")}</AnimatedText>
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-xl max-w-3xl mx-auto opacity-90" delay={0.3}>
              {t("courses.subtitle")}
            </AnimatedText>
          </AnimatedContent>
        </div>
      </AnimatedHero>

      {/* Course Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={instructorTeaching} 
                alt="QAI Malaysia certified ISO instructor teaching a training course" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="space-y-8">
              <Card className="p-8 hover:shadow-lg transition-all">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">{t("courses.publicCourses")}</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t("courses.publicCoursesDesc")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{t("courses.hrdClaimable")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{t("courses.networking")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{t("courses.earlyBird")}</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-all">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">{t("courses.inHouse")}</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t("courses.inHouseDesc")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{t("courses.flexible")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{t("courses.customized")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{t("courses.costEffective")}</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Public Course Catalog */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("courses.catalog")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("courses.catalogDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {publicCourses.map((course, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-all border-2">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{idx + 1}. {course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.subtitle}</p>
                </div>
                <Link to={course.detailsLink} className="w-full">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                    Learn More & Register
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("courses.levels")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: t("courses.awareness"),
                  icon: GraduationCap,
                  description: t("courses.awarenessDesc")
                },
                {
                  title: t("courses.implementer"),
                  icon: Users,
                  description: t("courses.implementerDesc")
                },
                {
                  title: t("courses.internalAuditor"),
                  icon: CheckCircle,
                  description: t("courses.auditorDesc")
                },
                {
                  title: t("courses.leadAuditor"),
                  icon: Award,
                  description: t("courses.leadAuditorDesc")
                }
              ].map((level, idx) => (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
                      <level.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{level.title}</h3>
                  <p className="text-sm text-muted-foreground">{level.description}</p>
                </Card>
              ))}
            </div>
            <div>
              <img 
                src={instructorPresentation} 
                alt="QAI Malaysia expert consultant presenting ISO certification course" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("courses.benefits")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              t("courses.benefit1"),
              t("courses.benefit2"),
              t("courses.benefit3"),
              t("courses.benefit4"),
              t("courses.benefit5"),
              t("courses.benefit6")
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">{t("courses.readyToCertify")}</h2>
            <p className="text-lg mb-8 opacity-90">
              {t("courses.readyToCertifyDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  {t("courses.registerNow")}
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  {t("courses.requestInHouse")}
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

export default Courses;
