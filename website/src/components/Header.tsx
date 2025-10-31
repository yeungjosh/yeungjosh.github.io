'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';
import { ThemeToggle } from "@/components/theme-toggle";
import { NavLink } from "@/types/portfolio";

interface HeaderProps {
  navigation: NavLink[];
  initials: string;
}

export default function Header({ navigation, initials }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center transition-all duration-300 ${
      scrolled ? 'glass-effect shadow-md' : 'bg-transparent'
    }`}>
      <Link className="flex items-center justify-center group" href="#">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center transform transition-transform group-hover:scale-110">
          <span className="text-white font-bold text-xl">{initials}</span>
        </div>
        <span className="sr-only">Portfolio</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        {navigation.map((link) => (
          <Link
            key={link.href}
            className="text-sm font-semibold hover:text-green-600 dark:hover:text-violet-400 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
