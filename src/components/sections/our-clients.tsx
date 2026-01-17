"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "TechCorp", industry: "Technology" },
  { name: "GlobalEd", industry: "Education" },
  { name: "ScaleUp Inc", industry: "Enterprise" },
  { name: "InnovateTech", industry: "AI/ML" },
  { name: "MediaGroup", industry: "Media" },
  { name: "HealthFirst", industry: "Healthcare" },
  { name: "FinanceHub", industry: "Finance" },
  { name: "RetailMax", industry: "Retail" },
  { name: "AutoDrive", industry: "Automotive" },
  { name: "AeroSpace", industry: "Aerospace" },
  { name: "PharmaCare", industry: "Pharma" },
  { name: "EduLearn", industry: "EdTech" },
];

export function OurClients() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950/30 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm text-violet-400 tracking-wider uppercase mb-4 block">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations across industries worldwide
          </p>
        </motion.div>

        {/* Infinite scroll animation */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-48 h-24 rounded-xl bg-secondary/30 border border-border hover:border-violet-500/30 transition-all duration-300 flex flex-col items-center justify-center group"
                >
                  <span className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors">
                    {client.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {client.industry}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "500+", label: "Global Clients" },
            { value: "50+", label: "Fortune 500" },
            { value: "30+", label: "Countries" },
            { value: "98%", label: "Retention Rate" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
