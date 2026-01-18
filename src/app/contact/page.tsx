"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  captcha?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation - required, min 2 characters, only letters and spaces
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Email validation - required, valid format
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation - required, exactly 10 digits (with optional country code)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      // Remove all non-digit characters for validation
      const digitsOnly = formData.phone.replace(/\D/g, "");
      
      if (digitsOnly.length < 10) {
        newErrors.phone = "Phone number must be at least 10 digits";
      } else if (digitsOnly.length > 12) {
        newErrors.phone = "Phone number cannot exceed 12 digits";
      } else if (digitsOnly.length === 10 && !/^[6-9]\d{9}$/.test(digitsOnly)) {
        // Indian mobile numbers start with 6, 7, 8, or 9
        newErrors.phone = "Please enter a valid Indian mobile number";
      }
    }

    // Subject validation - required
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Message validation - required, min 10 characters, max 1000 characters
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters";
    }

    // Captcha validation
    if (!captchaToken) {
      newErrors.captcha = "Please verify you are not a robot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate phone number in real-time
  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return undefined; // Don't show error for empty field while typing
    }
    
    const digitsOnly = phone.replace(/\D/g, "");
    
    if (digitsOnly.length > 0 && digitsOnly.length < 10) {
      return "Phone number must be at least 10 digits";
    }
    
    if (digitsOnly.length > 12) {
      return "Phone number cannot exceed 12 digits";
    }
    
    if (digitsOnly.length === 10 && !/^[6-9]\d{9}$/.test(digitsOnly)) {
      return "Please enter a valid Indian mobile number";
    }
    
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // For phone field, only allow digits, +, -, spaces, and parentheses
    if (name === "phone") {
      const sanitizedValue = value.replace(/[^\d+\-\s()]/g, "");
      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
      
      // Real-time validation for phone
      const phoneError = validatePhone(sanitizedValue);
      setErrors((prev) => ({ ...prev, phone: phoneError }));
      return;
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing (for other fields)
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token && errors.captcha) {
      setErrors((prev) => ({ ...prev, captcha: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        setSubmitStatus("error");
        if (data.error) {
          setErrors({ captcha: data.error });
        }
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@muenot.com",
      href: "mailto:info@muenot.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91-6377809826",
      href: "tel:+916377809826",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "56, Mukhya Sodala, Shyam Nagar, Jaipur",
      href: "#",
    },
  ];


  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(139, 92, 246, 0.5)"
        />
        <Spotlight
          className="top-40 right-0 md:right-60"
          fill="rgba(99, 102, 241, 0.3)"
        />

        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="contactSparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#8b5cf6"
          />
        </div>

        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <MessageSquare className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Let&apos;s Start a
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                Conversation
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a project in mind? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="block p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-violet-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">{info.content}</p>
                    </div>
                  </div>
                </motion.a>
              ))}

            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-green-300">
                      Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-300">
                      Something went wrong. Please try again later.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          maxLength={50}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border ${errors.name ? "border-red-500" : "border-border"
                            } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-violet-500 transition-colors`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border ${errors.email ? "border-red-500" : "border-border"
                            } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-violet-500 transition-colors`}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          maxLength={15}
                          className={`w-full pl-10 pr-10 py-3 rounded-xl bg-black/50 border ${
                            errors.phone 
                              ? "border-red-500" 
                              : formData.phone.replace(/\D/g, "").length >= 10 && !errors.phone
                                ? "border-green-500"
                                : "border-border"
                          } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-violet-500 transition-colors`}
                          placeholder="+91 9876543210"
                        />
                        {/* Show checkmark when valid */}
                        {formData.phone.replace(/\D/g, "").length >= 10 && !errors.phone && (
                          <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                      )}
                      {!errors.phone && formData.phone && formData.phone.replace(/\D/g, "").length < 10 && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {10 - formData.phone.replace(/\D/g, "").length} more digit(s) required
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-violet-500 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      maxLength={100}
                      className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${errors.subject ? "border-red-500" : "border-border"
                        } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-violet-500 transition-colors`}
                      placeholder="What is your inquiry about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-foreground">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <span className={`text-xs ${formData.message.length > 1000 ? "text-red-400" : "text-muted-foreground"}`}>
                        {formData.message.length}/1000
                      </span>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      maxLength={1000}
                      className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${errors.message ? "border-red-500" : "border-border"
                        } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-violet-500 transition-colors resize-none`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* reCAPTCHA */}
                  <div>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={
                        typeof window !== "undefined" && window.location.hostname === "localhost"
                          ? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Google's test key for localhost
                          : process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
                      }
                      onChange={handleCaptchaChange}
                      theme="dark"
                    />
                    {errors.captcha && (
                      <p className="mt-1 text-sm text-red-400">{errors.captcha}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
