"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2,
  Globe,
  Cloud,
  Cog,
  Lightbulb,
  Smartphone,
  Server,
  Shield,
  Workflow,
  Database,
  Wrench,
  TestTube,
} from "lucide-react";

const techCategories = {
  software: {
    title: "Software Development",
    icon: Code2,
    description: "Custom software solutions tailored to your business needs",
    services: [
      {
        name: "Custom Software",
        description: "Bespoke applications built for your unique requirements",
        icon: Code2,
      },
      {
        name: "Enterprise Apps",
        description: "Scalable solutions for large organizations",
        icon: Server,
      },
      {
        name: "SaaS Platforms",
        description: "Cloud-based software as a service solutions",
        icon: Cloud,
      },
      {
        name: "Mobile Apps",
        description: "Native and cross-platform mobile applications",
        icon: Smartphone,
      },
    ],
  },
  web: {
    title: "Web Solutions",
    icon: Globe,
    description: "Modern web applications and digital experiences",
    services: [
      {
        name: "Web Applications",
        description: "Full-stack web application development",
        icon: Globe,
      },
      {
        name: "UI/UX Design",
        description: "User-centered design for optimal experiences",
        icon: Lightbulb,
      },
      {
        name: "API Development",
        description: "RESTful and GraphQL API architecture",
        icon: Database,
      },
      {
        name: "CMS Solutions",
        description: "Content management system implementation",
        icon: Server,
      },
    ],
  },
  cloud: {
    title: "Cloud Services",
    icon: Cloud,
    description: "Cloud infrastructure and DevOps excellence",
    services: [
      {
        name: "Cloud Setup",
        description: "AWS, Azure, and GCP infrastructure setup",
        icon: Cloud,
      },
      {
        name: "Server Management",
        description: "24/7 monitoring and maintenance",
        icon: Server,
      },
      {
        name: "DevOps Support",
        description: "CI/CD pipelines and automation",
        icon: Workflow,
      },
      {
        name: "Data Security",
        description: "Enterprise-grade security implementation",
        icon: Shield,
      },
    ],
  },
  automation: {
    title: "Automation Solutions",
    icon: Cog,
    description: "Streamline operations with intelligent automation",
    services: [
      {
        name: "Workflow Automation",
        description: "Business process automation",
        icon: Workflow,
      },
      {
        name: "Data Processing",
        description: "Automated data pipelines and ETL",
        icon: Database,
      },
      {
        name: "System Integration",
        description: "Connect disparate systems seamlessly",
        icon: Cog,
      },
      {
        name: "Google Sheets Automation",
        description: "Spreadsheet automation and scripting",
        icon: Server,
      },
    ],
  },
  consulting: {
    title: "IT Consulting",
    icon: Lightbulb,
    description: "Strategic technology guidance and support",
    services: [
      {
        name: "Tech Strategy",
        description: "Technology roadmap planning",
        icon: Lightbulb,
      },
      {
        name: "Managed Services",
        description: "Ongoing IT management and support",
        icon: Wrench,
      },
      {
        name: "Maintenance Support",
        description: "System maintenance and updates",
        icon: Cog,
      },
      {
        name: "QA & Testing",
        description: "Quality assurance and testing services",
        icon: TestTube,
      },
    ],
  },
};

export function TechnologyServices() {
  return (
    <section id="technology" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Technology Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Build the Future with
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Modern Technology
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From custom software development to cloud infrastructure, we deliver
            technology solutions that drive innovation and growth.
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="software" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-8">
            {Object.entries(techCategories).map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="px-4 py-2 rounded-lg bg-secondary/50 data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300 border border-transparent data-[state=active]:border-emerald-500/30 transition-all"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(techCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="h-full p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-emerald-500/30 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                          <service.icon className="w-5 h-5 text-emerald-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
