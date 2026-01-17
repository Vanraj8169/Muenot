"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Heart,
  Landmark,
  ShoppingCart,
  Car,
  Plane,
  Pill,
  Film,
  Gamepad2,
  Factory,
  Cpu,
} from "lucide-react";

const industries = [
  {
    name: "Technology",
    description: "Software, SaaS, and tech startups",
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "Education",
    description: "EdTech, universities, and e-learning",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Healthcare",
    description: "Hospitals, healthtech, and medical research",
    icon: Heart,
    color: "from-red-500 to-rose-500",
  },
  {
    name: "Finance",
    description: "Banking, fintech, and insurance",
    icon: Landmark,
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Retail",
    description: "E-commerce, retail chains, and D2C",
    icon: ShoppingCart,
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Automotive",
    description: "OEMs, suppliers, and mobility solutions",
    icon: Car,
    color: "from-slate-500 to-zinc-500",
  },
  {
    name: "Aerospace",
    description: "Aviation, space, and defense",
    icon: Plane,
    color: "from-sky-500 to-blue-500",
  },
  {
    name: "Pharma",
    description: "Pharmaceutical and life sciences",
    icon: Pill,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Media",
    description: "Entertainment, publishing, and broadcasting",
    icon: Film,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Gaming",
    description: "Game studios and interactive media",
    icon: Gamepad2,
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Manufacturing",
    description: "Industrial and consumer goods",
    icon: Factory,
    color: "from-amber-500 to-yellow-500",
  },
  {
    name: "Enterprise",
    description: "Fortune 500 and large enterprises",
    icon: Building2,
    color: "from-indigo-500 to-violet-500",
  },
];

export function IndustriesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Building2 className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">Industries We Serve</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Expertise Across
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              Every Industry
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We bring specialized knowledge and tailored solutions to diverse sectors,
            helping businesses overcome industry-specific challenges.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-xl bg-secondary/30 border border-border hover:border-indigo-500/30 transition-all duration-300">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <industry.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
