"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  Tag,
  Database,
  Cpu,
  Users,
  Settings,
  Image,
  FileText,
  Video,
  Box,
  CheckCircle,
  Sparkles,
  BarChart3,
} from "lucide-react";

const dataAnnotationServices = [
  {
    title: "Image Labeling",
    description: "Precise image annotation for computer vision training",
    icon: <Image className="w-5 h-5" />,
  },
  {
    title: "Object Detection",
    description: "Bounding boxes and polygon annotations for object recognition",
    icon: <Box className="w-5 h-5" />,
  },
  {
    title: "Text Tagging",
    description: "Named entity recognition and text classification",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "Entity Recognition",
    description: "Identify and classify named entities in unstructured text",
    icon: <Tag className="w-5 h-5" />,
  },
  {
    title: "Audio Annotation",
    description: "Speech recognition and audio event labeling",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    title: "Video Tagging",
    description: "Frame-by-frame video annotation for action recognition",
    icon: <Video className="w-5 h-5" />,
  },
];

const dataCurationServices = [
  {
    title: "Data Cleaning",
    description: "Remove inconsistencies and errors from your datasets",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    title: "Data Structuring",
    description: "Organize unstructured data into usable formats",
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "Data Validation",
    description: "Ensure data accuracy and quality standards",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    title: "Bias Review",
    description: "Identify and mitigate bias in training data",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Metadata Enrichment",
    description: "Add contextual information to enhance data value",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "Quality Scoring",
    description: "Rate and rank data quality for prioritization",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

const modelTrainingServices = [
  {
    title: "Training Datasets",
    description: "Curated datasets optimized for model training",
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "RLHF Support",
    description: "Reinforcement learning from human feedback",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Instruction Data",
    description: "High-quality instruction-following datasets",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "Synthetic Data",
    description: "AI-generated data to augment training sets",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Prompt Data",
    description: "Diverse prompts for language model fine-tuning",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "Evaluation Sets",
    description: "Benchmark datasets for model performance testing",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

export function AIDataServices() {
  return (
    <section id="ai-data" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <BackgroundBeams className="opacity-30" />

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

        {/* Data Annotation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-2 text-center">
            Data Annotation
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            Precise labeling for computer vision, NLP, and audio/video AI models
          </p>
          <HoverEffect items={dataAnnotationServices} />
        </motion.div>

        {/* Data Curation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-2 text-center">
            Data Curation
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            Clean, structure, and validate your data for optimal AI performance
          </p>
          <HoverEffect items={dataCurationServices} />
        </motion.div>

        {/* Model Training */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-2 text-center">
            Model Training Support
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            Comprehensive training data and human feedback for AI models
          </p>
          <HoverEffect items={modelTrainingServices} />
        </motion.div>
      </div>
    </section>
  );
}
