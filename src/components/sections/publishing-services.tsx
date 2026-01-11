"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  FileText,
  Accessibility,
  RefreshCw,
  PenTool,
  FileCode,
  Headphones,
  Eye,
  CheckCircle,
  Printer,
} from "lucide-react";

const publishingCategories = [
  {
    title: "Editorial Services",
    icon: PenTool,
    color: "from-pink-500 to-rose-500",
    services: [
      { name: "Indexing", desc: "Professional index creation" },
      { name: "Pre Editing", desc: "Manuscript preparation" },
      { name: "Style Editing", desc: "Consistent style application" },
      { name: "Copy Editing", desc: "Grammar and clarity" },
      { name: "Proofreading", desc: "Final error checking" },
      { name: "Language Editing", desc: "Linguistic refinement" },
    ],
  },
  {
    title: "Accessibility Services",
    icon: Accessibility,
    color: "from-blue-500 to-cyan-500",
    services: [
      { name: "PPT Accessibility", desc: "Accessible presentations" },
      { name: "PDF Accessibility", desc: "WCAG compliant PDFs" },
      { name: "Audio Accessibility", desc: "Audio descriptions" },
      { name: "Video Accessibility", desc: "Captions & transcripts" },
      { name: "Testing", desc: "Accessibility audits" },
      { name: "Remediation", desc: "Fix accessibility issues" },
    ],
  },
  {
    title: "Conversion Services",
    icon: RefreshCw,
    color: "from-emerald-500 to-teal-500",
    services: [
      { name: "PDF Conversion", desc: "To/from PDF formats" },
      { name: "XML Conversion", desc: "Structured data export" },
      { name: "ePub Conversion", desc: "E-reader formats" },
      { name: "HTML Conversion", desc: "Web-ready content" },
      { name: "Word Conversion", desc: "Document formatting" },
      { name: "LMS Data Porting", desc: "Learning system migration" },
    ],
  },
];

export function PublishingServices() {
  return (
    <section id="publishing" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <BookOpen className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-pink-300">Publishing Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Publish with
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400">
              Precision & Impact
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From editorial excellence to accessible content, we provide
            comprehensive publishing services for the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {publishingCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-pink-500/30 transition-all duration-300">
                {/* Glow */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    `bg-gradient-to-r ${category.color}`
                  )}
                  style={{
                    transform: "scale(0.9)",
                    filter: "blur(40px)",
                    zIndex: -1,
                  }}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      `bg-gradient-to-r ${category.color}`
                    )}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-pink-300 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Services */}
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-pink-400/60 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-white text-sm">
                          {service.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {service.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
