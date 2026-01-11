"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black" />

      {/* Sparkles */}
      <div className="absolute inset-0">
        <SparklesCore
          id="ctaSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#8b5cf6"
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-16 rounded-3xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border backdrop-blur-sm"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            <span className="text-sm text-violet-300">
              Ready to Transform Your Business?
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
              Extraordinary Together
            </span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Whether you need AI data services, e-learning solutions, or digital
            transformation, our team is ready to help you achieve your goals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl group"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-violet-500/30 hover:bg-violet-500/10 px-8 py-6 text-lg rounded-xl"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Call
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by leading organizations worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {["Enterprise Ready", "ISO Certified", "GDPR Compliant", "24/7 Support"].map(
                (badge, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-lg bg-white/5 text-sm text-muted-foreground"
                  >
                    {badge}
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
