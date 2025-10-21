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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Get in touch with our team to discuss your ISO certification needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Office Location</h3>
              <p className="text-sm text-muted-foreground">
                No.11-3A, Jalan Bandar 12<br />
                Pusat Bandar Puchong<br />
                47160 Puchong<br />
                Selangor Darul Ehsan
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">
                +6012-469 1606<br />
                +6016-260 1606
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">
                info@qaims.com.my<br />
                musri@qaims.com.my<br />
                musritukiman@gmail.com
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-sm text-muted-foreground">
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 1:00 PM
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+60 12-345 6789"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="training">Training Services</SelectItem>
                      <SelectItem value="consulting">Consulting Services</SelectItem>
                      <SelectItem value="auditing">Auditing Services</SelectItem>
                      <SelectItem value="iso9001">ISO 9001 Certification</SelectItem>
                      <SelectItem value="iso14001">ISO 14001 Certification</SelectItem>
                      <SelectItem value="iso45001">ISO 45001 Certification</SelectItem>
                      <SelectItem value="iso27001">ISO 27001 Certification</SelectItem>
                      <SelectItem value="iso37001">ISO 37001 Certification</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Visit Our Office</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-muted rounded-lg h-96 flex flex-col items-center justify-center p-8">
              <MapPin className="h-16 w-16 text-primary mb-4" />
              <p className="text-muted-foreground text-center mb-6 max-w-md">
                No.11-3A, Jalan Bandar 12, Pusat Bandar Puchong, 47160 Puchong, Selangor
              </p>
              <div className="flex gap-4 flex-wrap justify-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=No.11-3A,+Jalan+Bandar+12,+Pusat+Bandar+Puchong,+47160+Puchong,+Selangor', '_blank')}
                  className="bg-gradient-to-r from-primary to-secondary"
                >
                  Open in Google Maps
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://maps.apple.com/?q=No.11-3A,+Jalan+Bandar+12,+Pusat+Bandar+Puchong,+47160+Puchong,+Selangor', '_blank')}
                >
                  Open in Apple Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
