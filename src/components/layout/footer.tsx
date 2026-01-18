"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Headphones,
  Users,
  Monitor,
  ArrowRight,
} from "lucide-react";

const offices = [
  {
    location: "India",
    address: "56, Mukhya Sodala, Shyam Nagar, Jaipur",
  },
  {
    location: "India",
    address: "Tal, Jhunjhunu, Rajasthan, 333026",
  },
];

const aboutLinks = [
  { name: "About Us", href: "/#about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Our Services", href: "/#services" },
  { name: "Our Clients", href: "/#about" },
];

const servicesLinks = [
  { name: "AI Data Services", href: "/#ai-data" },
  { name: "E-Learning", href: "/#elearning" },
  { name: "Technology", href: "/#technology" },
  { name: "Localization", href: "/#localization" },
  { name: "Publishing", href: "/#publishing" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/muenot/?viewAsMember=true" },
];

export function Footer() {
  return (
    <footer id="footer" className="relative bg-black border-t border-border overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section - Logo and Tagline */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-12">
            <Link
              href="/"
              className="flex items-center cursor-pointer"
            >
              <Image
                src="/logo.jpg"
                alt="Muenot"
                width={200}
                height={55}
                className="h-12 w-auto mix-blend-screen"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xl md:ml-8">
              Leveraging our tech-driven expertise to streamline workforce training and
              deliver scalable digital solutions.
            </p>
          </div>

          {/* Four Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {/* Offices Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-red-500" />
                <h4 className="font-semibold text-foreground">Offices</h4>
              </div>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index}>
                    <p className="text-sm font-medium text-foreground">{office.location}</p>
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                ))}
                <a
                  href="mailto:info@muenot.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@muenot.com
                </a>
              </div>
            </div>

            {/* Get in Touch Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Headphones className="w-5 h-5 text-cyan-400" />
                <h4 className="font-semibold text-foreground">Get in Touch</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground">For Sales / Business Development</p>
                  <a
                    href="tel:+916377809826"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="text-yellow-500 font-medium">IN</span> +91-6377809826
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">For HR & Job Opportunities</p>
                  <a
                    href="tel:6377809826"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    6377809826
                  </a>
                  <a
                    href="mailto:careers@muenot.com"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-1"
                  >
                    <Mail className="w-4 h-4" />
                    careers@muenot.com
                  </a>
                </div>
              </div>
            </div>

            {/* About Us Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-foreground">About Us</h4>
              </div>
              <ul className="space-y-2">
                {aboutLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-violet-400 transition-all duration-300 inline-flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-foreground">Services</h4>
              </div>
              <ul className="space-y-2">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-violet-400 transition-all duration-300 inline-flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            All Rights Reserved by Muenot Technologies | Copyright © 2020-{new Date().getFullYear()}{" "}
            <a href="https://www.muenot.com" className="hover:text-foreground transition-colors">
              www.muenot.com
            </a>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Join Us On</span>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-blue-400 hover:text-foreground hover:bg-secondary transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
