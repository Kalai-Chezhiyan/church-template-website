import React from "react";

export default function Footer() {
  const links = {
    church: [
      { label: "About Us", href: "#" },
      { label: "Our Beliefs", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Contact", href: "#" },
    ],
    resources: [
      { label: "Sermons", href: "#" },
      { label: "Events", href: "#" },
      { label: "Giving", href: "#" },
      { label: "Prayer Requests", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-bold tracking-tighter text-white font-heading mb-6">
            RELIGIOUS
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            A community dedicated to faith, love, and the transformation of lives through the grace of Jesus Christ.
          </p>
          <div className="flex gap-4">
            {["fb", "ig", "yt", "tw"].map((social) => (
              <a key={social} href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <span className="text-xs uppercase font-bold">{social}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-6">The Church</h4>
          <ul className="space-y-4">
            {links.church.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-6">Resources</h4>
          <ul className="space-y-4">
            {links.resources.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div>
          <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-6">Stay Connected</h4>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-accent transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 bg-accent text-primary rounded-full text-xs font-bold hover:bg-white transition-colors">
                Join
              </button>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              123 Divine Way,<br />
              Faith City, FC 12345<br />
              hello@moderndivine.church
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Religious Church. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
