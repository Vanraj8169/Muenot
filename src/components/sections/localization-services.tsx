"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Globe2,
  Languages,
  Mic,
  Subtitles,
  Headphones,
  CheckCircle,
  FileText,
  Video,
  MessageSquare,
  BookOpen,
  Smartphone,
} from "lucide-react";

const localizationServices = [
  {
    title: "Translation",
    icon: Languages,
    color: "from-orange-500 to-amber-500",
    description: "Professional translation across 100+ languages",
    subServices: [
      "Document Localization",
      "Website Localization",
      "App Localization",
      "Marketing Content",
      "Legal Documents",
      "Technical Manuals",
    ],
  },
  {
    title: "Transcription",
    icon: FileText,
    color: "from-pink-500 to-rose-500",
    description: "Accurate transcription for all media types",
    subServices: [
      "Audio Transcription",
      "Video Transcription",
      "Multilingual Transcripts",
      "Meeting Notes",
      "Interview Transcripts",
      "Podcast Transcription",
    ],
  },
  {
    title: "Subtitling",
    icon: Subtitles,
    color: "from-blue-500 to-cyan-500",
    description: "Professional subtitles for global audiences",
    subServices: [
      "Closed Captions",
      "Multilingual Subtitles",
      "Subtitle Sync",
      "SDH Subtitles",
      "Forced Narratives",
      "Subtitle Styling",
    ],
  },
  {
    title: "Voiceover",
    icon: Mic,
    color: "from-purple-500 to-violet-500",
    description: "Native voice talent for authentic audio",
    subServices: [
      "Dubbing",
      "Narration Recording",
      "Localized Audio",
      "Character Voices",
      "Commercial VO",
      "E-Learning VO",
    ],
  },
  {
    title: "Linguistic QA",
    icon: CheckCircle,
    color: "from-emerald-500 to-teal-500",
    description: "Quality assurance for linguistic accuracy",
    subServices: [
      "Proofreading",
      "Localization Testing",
      "Cultural Review",
      "Terminology Check",
      "Style Guide Compliance",
      "Context Validation",
    ],
  },
];

export function LocalizationServices() {
  return (
    <section id="localization" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Globe2 className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300">Localization Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Speak to the World in
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
              Every Language
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Break language barriers and connect with global audiences through
            expert translation, transcription, and cultural adaptation services.
          </p>
        </motion.div>

        {/* Language Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto"
        >
          {[
            { value: "30+", label: "Languages" },
            { value: "10+", label: "Countries" },
            { value: "99.5%", label: "Accuracy Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localizationServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group",
                index === localizationServices.length - 1 &&
                  "md:col-span-2 lg:col-span-1"
              )}
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-orange-500/30 transition-all duration-300">
                {/* Glow */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    `bg-gradient-to-r ${service.color}`
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
                    `bg-gradient-to-r ${service.color}`
                  )}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Sub-services */}
                <div className="flex flex-wrap gap-2">
                  {service.subServices.map((sub) => (
                    <span
                      key={sub}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground"
                    >
                      {sub}
                    </span>
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
