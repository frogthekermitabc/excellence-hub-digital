import { GraduationCap, Calendar, Users, Award, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Courses = () => {
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
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Training Courses</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Professional ISO certification training programs designed to build competence and ensure success
          </p>
        </div>
      </section>

      {/* Course Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Public Courses</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Join our scheduled training sessions with participants from various organizations. 
                Perfect for individuals or small teams.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">HRD Corp claimable courses available</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Networking with industry professionals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Early bird pricing available</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">In-House Training</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Customized training delivered at your location, tailored to your organization's 
                specific needs and industry context.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Flexible scheduling at your convenience</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Content customized to your processes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Cost-effective for larger teams</span>
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
            <h2 className="text-3xl font-bold mb-4">Public Course Catalog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our upcoming training programs and register online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {publicCourses.map((course, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant={course.level === "Advanced" ? "default" : "secondary"}>
                    {course.level}
                  </Badge>
                  {course.hrdCorp && (
                    <Badge className="bg-secondary">HRD Corp</Badge>
                  )}
                </div>
                <h3 className="font-bold text-lg mb-3">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <Button className="w-full" size="sm">View Details</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Course Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Awareness",
                icon: GraduationCap,
                description: "Introduction to ISO standards and fundamental concepts"
              },
              {
                title: "Implementer",
                icon: Users,
                description: "Practical skills for system implementation and maintenance"
              },
              {
                title: "Internal Auditor",
                icon: CheckCircle,
                description: "Comprehensive training for conducting internal audits"
              },
              {
                title: "Lead Auditor",
                icon: Award,
                description: "Advanced certification for lead auditor qualification"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Training Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Expert instructors with real-world experience",
              "Comprehensive course materials and resources",
              "Hands-on practical exercises and case studies",
              "International certification upon completion",
              "HRD Corp claimable courses for eligible participants",
              "Post-training support and consultation"
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
            <h2 className="text-3xl font-bold mb-4">Ready to Get Certified?</h2>
            <p className="text-lg mb-8 opacity-90">
              Enroll in our training programs or request a customized in-house training solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Register Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Request In-House Training
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
