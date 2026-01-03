"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, Loader2, Github, Linkedin, Instagram } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission (replace with actual email service)
    try {
      // Using mailto as fallback - in production, use a service like Resend, SendGrid, or Formspree
      const mailtoLink = `mailto:konkipudinarayanaswamy@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}\n\nFrom: ${formData.email}`;
      window.location.href = mailtoLink;
      
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/narayanaswamykonkipudi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/narayana-swamy-konkipudi-28b065333/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/narayanaswamy_k", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a
              href="mailto:konkipudinarayanaswamy@gmail.com"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
               konkipudinarayanaswamy@gmail.com
              </a>

            </div>



                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="text-gray-300">Tuni, Andhra Pradesh, India</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-400 mb-3">Connect with me</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg glass border border-white/20 text-gray-300 hover:text-emerald-400 hover:border-emerald-400/50 transition-all"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-emerald-400 text-center"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-red-400 text-center"
                    >
                      Failed to send message. Please try again.
                    </motion.p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

