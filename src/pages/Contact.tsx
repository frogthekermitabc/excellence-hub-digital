import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { z } from "zod";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";
import { SEO } from "@/components/SEO";
import professionalTeam from "@/assets/professional-team.jpg";

// Comprehensive validation schema with security measures
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .refine((val) => !/[\r\n]/.test(val), "Name contains invalid characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters")
    .refine((val) => !/[\r\n]/.test(val), "Email contains invalid characters"),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional().or(z.literal("")),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional().or(z.literal("")),
  service: z.string().max(50, "Service selection is invalid").optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate form data with zod
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      // Extract and display validation errors
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);

      toast({
        title: "Validation Error",
        description: "Please check the form for errors and try again.",
        variant: "destructive",
      });
      return;
    }

    // Form is valid, proceed with submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact QAI ISO Consultants Puchong, Selangor | Get Free Quote"
        description="Contact QAI for ISO certification training and consulting. Located in Puchong, Selangor. Call +60 12-469 1606 or email info@qaims.com.my for a free consultation quote."
        keywords="contact QAI, ISO consultant Puchong, ISO training Selangor, free ISO quote, QAI contact details, ISO certification enquiry"
        canonicalUrl={window.location.origin + "/contact"}
      />
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary to-secondary py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t("contact.title")}</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90">{t("contact.subtitle")}</p>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            
            {/* Left Column - Contact Info & Map */}
            <div className="space-y-6">
              {/* Contact Information Cards */}
              <div className="grid grid-cols-2 gap-3">
                <Card className="p-4 text-center hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1 text-xs">{t("contact.location")}</h3>
                  <p className="text-xs text-muted-foreground leading-tight">
                    No.11-3A, Jalan Bandar 12<br />
                    Pusat Bandar Puchong<br />
                    47160 Puchong<br />
                    Selangor Darul Ehsan
                  </p>
                </Card>

                <Card className="p-4 text-center hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1 text-xs">{t("contact.phone")}</h3>
                  <p className="text-xs text-muted-foreground">
                    +60 12-469 1606<br />
                    +60 16-260 1606
                  </p>
                </Card>

                <Card className="p-4 text-center hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1 text-xs">{t("contact.email")}</h3>
                  <p className="text-xs text-muted-foreground leading-tight">
                    info@qaims.com.my<br />
                    musri@qaims.com.my<br />
                    musritukiman@gmail.com
                  </p>
                </Card>

                <Card className="p-4 text-center hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1 text-xs">{t("contact.hours")}</h3>
                  <p className="text-xs text-muted-foreground">
                    {t("contact.monFri")}<br />
                    {t("contact.sat")}
                  </p>
                </Card>
              </div>

              {/* Map Section */}
              <Card className="bg-muted rounded-lg h-[280px] flex flex-col items-center justify-center p-4">
                <MapPin className="h-10 w-10 text-primary mb-2" />
                <p className="text-muted-foreground text-center mb-3 text-xs">
                  No.11-3A, Jalan Bandar 12, Pusat Bandar Puchong, 47160 Puchong, Selangor
                </p>
                <div className="flex gap-2 flex-wrap justify-center">
                  <Button
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/search/?api=1&query=No.11-3A,+Jalan+Bandar+12,+Pusat+Bandar+Puchong,+47160+Puchong,+Selangor",
                        "_blank",
                      )
                    }
                    className="bg-[#4285f4] hover:bg-[#357ae8] text-white border-0 text-xs"
                  >
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    Google Maps
                  </Button>
                  <Button
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://maps.apple.com/?q=No.11-3A,+Jalan+Bandar+12,+Pusat+Bandar+Puchong,+47160+Puchong,+Selangor",
                        "_blank",
                      )
                    }
                    className="bg-[#000000] hover:bg-[#1d1d1f] text-white border-0 text-xs"
                  >
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Apple Maps
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-1">{t("contact.sendMessage")}</h2>
                <p className="text-muted-foreground text-sm mb-4">{t("contact.formDesc")}</p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="name" className="text-xs">{t("contact.fullName")}</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        maxLength={100}
                        className={`h-9 text-sm ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-xs">{t("contact.emailAddress")}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        maxLength={255}
                        className={`h-9 text-sm ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="phone" className="text-xs">{t("contact.phoneNumber")}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+60 12-345 6789"
                        maxLength={20}
                        className={`h-9 text-sm ${errors.phone ? "border-destructive" : ""}`}
                      />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="company" className="text-xs">{t("contact.companyName")}</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company"
                        maxLength={100}
                        className={`h-9 text-sm ${errors.company ? "border-destructive" : ""}`}
                      />
                      {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="service" className="text-xs">{t("contact.serviceInterest")}</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger className={`h-9 text-sm ${errors.service ? "border-destructive" : ""}`}>
                        <SelectValue placeholder={t("contact.selectService")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="training">{t("contact.training")}</SelectItem>
                        <SelectItem value="consulting">{t("contact.consulting")}</SelectItem>
                        <SelectItem value="auditing">{t("contact.auditing")}</SelectItem>
                        <SelectItem value="iso9001">{t("contact.iso9001")}</SelectItem>
                        <SelectItem value="iso14001">{t("contact.iso14001")}</SelectItem>
                        <SelectItem value="iso45001">{t("contact.iso45001")}</SelectItem>
                        <SelectItem value="iso27001">{t("contact.iso27001")}</SelectItem>
                        <SelectItem value="iso37001">{t("contact.iso37001")}</SelectItem>
                        <SelectItem value="other">{t("contact.other")}</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-xs text-destructive">{errors.service}</p>}
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="message" className="text-xs">{t("contact.message")}</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("contact.messagePlaceholder")}
                      rows={4}
                      maxLength={2000}
                      className={`text-sm ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                    <p className="text-xs text-muted-foreground">{formData.message.length}/2000 characters</p>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                    {t("contact.send")}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
