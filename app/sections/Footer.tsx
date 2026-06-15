export function Footer() {
  const quickLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
    { label: "Book a Call", href: "#final-cta" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <span
              className="text-heading font-bold text-xl tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              PrimeServ
            </span>
            <p className="text-muted text-sm mt-1 italic">
              We build websites that sell.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body text-sm hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © 2025 PrimeServ Agency
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted text-xs hover:text-body transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted text-xs hover:text-body transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
