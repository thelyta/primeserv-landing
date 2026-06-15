"use client";

import { useState } from "react";
import { CTAButton } from "../components/CTAButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-heading font-bold text-xl tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
          PrimeServ
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body text-sm hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <CTAButton href="#final-cta" size="default">
            Book a Free Audit →
          </CTAButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-heading transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-heading transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-heading transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-surface border-b border-border transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body text-base hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <CTAButton href="#final-cta" size="default" className="mt-2 w-full">
            Book a Free Audit →
          </CTAButton>
        </div>
      </div>
    </nav>
  );
}
