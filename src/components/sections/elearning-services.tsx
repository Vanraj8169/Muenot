"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  GraduationCap,
  BookOpen,
  Palette,
  Video,
  FileText,
  Headphones,
  PenTool,
  Layout,
  CheckSquare,
  Users,
  Settings,
  Sparkles,
} from "lucide-react";

const elearningCategories = [
  {
    title: "Content Development",
    description:
      "Create engaging digital learning content across multiple formats",
    icon: PenTool,
    gradient: "from-blue-500 to-cyan-500",
    services: [
      "Alt Text Creation",
      "Animation Design",
      "Creative Art",
      "Instructional Design",
      "Assessment Writing",
      "Digital Marketing Content",
    ],
  },
  {
    title: "Content Production",
    description: "Professional production services for educational materials",
    icon: Layout,
    gradient: "from-purple-500 to-pink-500",
    services: [
      "Cover Design",
      "Quality Control",
      "LaTeX Composition",
      "InDesign Composition",
      "Template Creation",
      "Layout Design",
    ],
  },
  {
    title: "Content Operations",
    description: "Streamlined operations for content management and delivery",
    icon: Settings,
    gradient: "from-emerald-500 to-teal-500",
    services: [
      "Testing & QA",
      "Indexing",
      "Translation",
      "Data Curation",
      "Script Tagging",
      "Content Review",
    ],
  },
  {
    title: "Art Production",
    description: "Visual design and art creation for learning materials",
    icon: Palette,
    gradient: "from-orange-500 to-amber-500",
    services: [
      "Illustration",
      "Infographics",
      "Icon Design",
      "Photo Editing",
      "Vector Graphics",
      "Brand Assets",
    ],
  },
  {
    title: "Video & Audio",
    description: "Multimedia production for immersive learning experiences",
    icon: Video,
    gradient: "from-red-500 to-rose-500",
    services: [
      "Video Editing",
      "Video Creation",
      "Audio Recording",
      "Voiceover",
      "Animation",
      "Motion Graphics",
    ],
  },
  {
    title: "Faculty Support",
    description: "Dedicated support for educators and course creators",
    icon: Users,
    gradient: "from-indigo-500 to-violet-500",
    services: [
      "Course Setup",
      "LMS Integration",
      "Training",
      "Technical Support",
      "Resource Management",
      "Analytics",
    ],
  },
];

export function ElearningServices() {
  return (
    <section id="elearning" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">E-Learning Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Transform Learning with
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Digital Excellence
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive e-learning solutions from content creation to delivery,
            helping educators and organizations create impactful learning experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {elearningCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-blue-500/30 transition-all duration-300">
                {/* Glow Effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    `bg-gradient-to-r ${category.gradient}`
                  )}
                  style={{
                    transform: "scale(0.9)",
                    filter: "blur(40px)",
                    zIndex: -1,
                  }}
                />

                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    `bg-gradient-to-r ${category.gradient}`
                  )}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>

                {/* Services List */}
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckSquare className="w-4 h-4 text-blue-400/60" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
