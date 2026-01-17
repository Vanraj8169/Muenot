"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Cpu,
  Tag,
  Database,
  Users,
  Sparkles,
  BarChart3,
  CheckSquare,
} from "lucide-react";

const aiCategories = [
  {
    title: "Data Annotation",
    description:
      "Precise labeling for computer vision, NLP, and audio/video AI models",
    icon: Tag,
    gradient: "from-violet-500 to-purple-500",
    services: [
      "Image Labeling",
      "Object Detection",
      "Text Tagging",
      "Entity Recognition",
      "Audio Annotation",
      "Video Tagging",
    ],
  },
  {
    title: "Data Curation",
    description:
      "Clean, structure, and validate your data for optimal AI performance",
    icon: Database,
    gradient: "from-indigo-500 to-violet-500",
    services: [
      "Data Cleaning",
      "Data Structuring",
      "Data Validation",
      "Bias Review",
      "Metadata Enrichment",
      "Quality Scoring",
    ],
  },
  {
    title: "Model Training Support",
    description:
      "Comprehensive training data and human feedback for AI models",
    icon: Cpu,
    gradient: "from-purple-500 to-pink-500",
    services: [
      "Training Datasets",
      "RLHF Support",
      "Instruction Data",
      "Synthetic Data",
      "Prompt Data",
      "Evaluation Sets",
    ],
  },
  {
    title: "Human-in-the-Loop",
    description:
      "Expert human oversight to enhance AI accuracy and reliability",
    icon: Users,
    gradient: "from-fuchsia-500 to-purple-500",
    services: [
      "Quality Assurance",
      "Model Evaluation",
      "Edge Case Review",
      "Feedback Collection",
      "Error Analysis",
      "Continuous Improvement",
    ],
  },
  {
    title: "LLM Services",
    description:
      "Specialized services for large language model development",
    icon: Sparkles,
    gradient: "from-violet-500 to-indigo-500",
    services: [
      "Prompt Engineering",
      "Fine-tuning Data",
      "Response Rating",
      "Safety Evaluation",
      "Hallucination Detection",
      "Benchmark Testing",
    ],
  },
  {
    title: "AI Analytics",
    description:
      "Data-driven insights to measure and improve AI performance",
    icon: BarChart3,
    gradient: "from-purple-500 to-violet-500",
    services: [
      "Performance Metrics",
      "Quality Reports",
      "Trend Analysis",
      "ROI Tracking",
      "Model Comparison",
      "Drift Detection",
    ],
  },
];

export function AIDataServices() {
  return (
    <section id="ai-data" className="relative py-24 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <Cpu className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300">AI Data Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Fuel Your AI with
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400">
              Quality Data
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From data annotation to model training, we provide end-to-end data
            services to power your machine learning initiatives.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-violet-500/30 transition-all duration-300">
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
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
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
                      <CheckSquare className="w-4 h-4 text-violet-400/60" />
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
