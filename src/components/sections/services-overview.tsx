"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Brain,
  GraduationCap,
  Code2,
  Globe2,
  BookOpen,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "AI Data Services",
    description:
      "High-quality data annotation, curation, and model training to power your AI initiatives.",
    icon: Brain,
    href: "#ai-data",
    gradient: "from-violet-500 to-purple-600",
    features: ["Data Annotation", "Data Curation", "Model Training", "HITL"],
  },
  {
    title: "E-Learning Services",
    description:
      "End-to-end content development and production for modern digital learning experiences.",
    icon: GraduationCap,
    href: "#elearning",
    gradient: "from-blue-500 to-cyan-600",
    features: [
      "Content Development",
      "Faculty Support",
      "Art Production",
      "LMS Integration",
    ],
  },
  {
    title: "Technology",
    description:
      "Custom software solutions, cloud services, and automation to drive digital transformation.",
    icon: Code2,
    href: "#technology",
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "Software Development",
      "Cloud Services",
      "Web Solutions",
      "IT Consulting",
    ],
  },
  {
    title: "Localization",
    description:
      "Break language barriers with expert translation, transcription, and cultural adaptation.",
    icon: Globe2,
    href: "#localization",
    gradient: "from-orange-500 to-amber-600",
    features: [
      "Translation",
      "Transcription",
      "Subtitling",
      "Voiceover",
    ],
  },
  {
    title: "Publishing",
    description:
      "Comprehensive editorial, accessibility, and conversion services for digital publishing.",
    icon: BookOpen,
    href: "#publishing",
    gradient: "from-pink-500 to-rose-600",
    features: ["Editorial Services", "Accessibility", "Conversion", "Pre Press"],
  },
  {
    title: "Insights",
    description:
      "Data-driven insights and analytics to inform strategic business decisions.",
    icon: Sparkles,
    href: "#insights",
    gradient: "from-indigo-500 to-violet-600",
    features: [
      "Analytics",
      "Reporting",
      "Strategy",
      "Optimization",
    ],
  },
];

export function ServicesOverview() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Comprehensive Solutions for
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
              Digital Excellence
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From AI-powered data services to global localization, we provide
            end-to-end solutions to transform your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="block group">
                <div className="relative h-full p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-violet-500/30 transition-all duration-300">
                  {/* Glow Effect */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
                      `bg-gradient-to-r ${service.gradient}`
                    )}
                    style={{ transform: "scale(0.8)", filter: "blur(40px)" }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                        `bg-gradient-to-r ${service.gradient}`
                      )}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
