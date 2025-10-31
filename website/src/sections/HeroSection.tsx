'use client';

import Link from "next/link";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import VantaNet from "@/components/vanta-net";
import { PersonalInfo } from "@/types/portfolio";

interface HeroSectionProps {
  personal: PersonalInfo;
}

export default function HeroSection({ personal }: HeroSectionProps) {
  return (
    <section className="w-full min-h-screen relative overflow-hidden" id="about">
      <VantaNet>
        <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/40"></div>
        <div className="relative w-full min-h-screen flex items-center justify-center">
          <div className="container px-4 md:px-6 py-20">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-slate-900 dark:text-white">
                    Hi, I&apos;m{" "}
                    <span className="gradient-text">{personal.name}</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-2xl">
                    {personal.bio}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl h-12 px-8 text-base"
                  >
                    <Link href="#work">View My Work</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-green-600 dark:hover:border-green-400 rounded-xl h-12 px-8 text-base font-semibold"
                  >
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>

              <div className="relative mx-auto lg:mx-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Decorative background elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                    <Image
                      alt={personal.name}
                      className="object-cover"
                      fill
                      src={personal.profileImage}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-slate-400" />
            </div>
          </div>
        </div>
      </VantaNet>
    </section>
  );
}
