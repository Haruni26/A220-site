"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "History", href: "#history" },
    { label: "Specs", href: "#specs" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--primary)]/80 backdrop-blur border-b border-b-white/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={Logo} alt="Airbus Logo" width={160} priority />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white transition text-lg font-bold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white/90 text-lg"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
