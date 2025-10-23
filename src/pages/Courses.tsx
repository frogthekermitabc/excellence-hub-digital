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

const Courses = () => {
  const { t } = useLanguage();
  const publicCourses = [
    {
      title: "ISO 9001:2015 Awareness",
      duration: "1 Day",
      level: "Awareness",
      hrdCorp: true,
      description: "Introduction to Quality Management System fundamentals"
    },
    {
      title: "ISO 9001:2015 Internal Auditor",
      duration: "2 Days",
      level: "Implementer",
      hrdCorp: true,
      description: "Comprehensive training for conducting internal QMS audits"
    },
    {
      title: "ISO 14001:2015 Internal Auditor",
      duration: "2 Days",
      level: "Implementer",
      hrdCorp: true,
      description: "Environmental management system auditing skills"
    },
    {
      title: "ISO 45001:2018 Internal Auditor",
      duration: "2 Days",
      level: "Implementer",
      hrdCorp: true,
      description: "Occupational health & safety auditing certification"
    },
    {
      title: "ISO 27001:2022 Lead Implementer",
      duration: "3 Days",
      level: "Advanced",
      hrdCorp: true,
      description: "Information security management implementation"
    },
    {
      title: "ISO 37001:2018 Awareness",
      duration: "1 Day",
      level: "Awareness",
      hrdCorp: false,
      description: "Anti-bribery management system fundamentals"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <AnimatedHero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedContent>
            <GraduationCap className="h-16 w-16 mx-auto mb-6" />
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-4xl md:text-5xl font-bold mb-6" type="word">{t("courses.title")}</AnimatedText>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
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
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant={course.level === "Advanced" ? "default" : "secondary"}>
                    {course.level === "Advanced" ? t("courses.advanced") : 
                     course.level === "Implementer" ? t("courses.implementer") : 
                     t("courses.awareness")}
                  </Badge>
                  {course.hrdCorp && (
                    <Badge className="bg-secondary">{t("courses.hrdCorp")}</Badge>
                  )}
                </div>
                <h3 className="font-bold text-lg mb-3">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <Button className="w-full" size="sm">{t("courses.viewDetails")}</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("courses.levels")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
