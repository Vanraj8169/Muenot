"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  Target,
  Users,
  Award,
  Globe,
  Lightbulb,
  Heart,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "Muenot transformed our data annotation process. Their accuracy and turnaround time exceeded our expectations.",
    name: "Sarah Chen",
    title: "Head of AI, TechCorp",
  },
  {
    quote:
      "The e-learning content they created has significantly improved our training completion rates.",
    name: "Michael Rodriguez",
    title: "L&D Director, GlobalEd",
  },
  {
    quote:
      "Their localization services helped us launch in 15 new markets seamlessly. Truly world-class.",
    name: "Emma Williams",
    title: "VP International, ScaleUp Inc",
  },
  {
    quote:
      "Outstanding technology solutions. They delivered our custom platform ahead of schedule.",
    name: "David Park",
    title: "CTO, InnovateTech",
  },
  {
    quote:
      "Professional, reliable, and innovative. Muenot is our go-to partner for all content services.",
    name: "Lisa Thompson",
    title: "Content Director, MediaGroup",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering the highest quality in everything we do",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing boundaries with cutting-edge solutions",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together with clients to achieve shared success",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across continents with local expertise",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Building trust through transparency and ethical practices",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Driven by genuine enthusiasm for our clients' success",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Empowering Businesses
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                Around the Globe
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are a global leader in AI data services, e-learning solutions,
              technology, and localization, helping businesses transform and thrive
              in the digital age.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-indigo-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                    <value.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            What Our Clients Say
          </h3>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </motion.div>
      </div>
    </section>
  );
}
