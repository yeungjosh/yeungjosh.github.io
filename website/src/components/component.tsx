'use client';

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function Component() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Modern sticky header with glass effect */}
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-md' : 'bg-transparent'
      }`}>
        <Link className="flex items-center justify-center group" href="#">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center transform transition-transform group-hover:scale-110">
            <span className="text-white font-bold text-xl">JY</span>
          </div>
          <span className="sr-only">Josh Yeung</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#work">
            Experience
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#blog">
            Blog
          </Link>
        </nav>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section - Modern & Bold */}
        <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" id="about">
          <div className="container px-4 md:px-6 py-20">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for opportunities
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                    Hi, I&apos;m{" "}
                    <span className="gradient-text">Josh Yeung</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl">
                    Software Engineer at <span className="font-semibold text-slate-900 dark:text-white">Amazon</span> building scalable systems for Amazon Ads and Prime Video. Passionate about LLMs, web applications, and matcha.
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
                    className="border-2 border-slate-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 rounded-xl h-12 px-8 text-base"
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
                      alt="Josh Yeung"
                      className="object-cover"
                      fill
                      src="/profile_pic.jpg"
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
        </section>

        {/* Work Experience Section - Card Based */}
        <section className="w-full py-24 md:py-32 bg-white dark:bg-slate-900" id="work">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-3">
                <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                  Experience
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Where I&apos;ve <span className="gradient-text">Worked</span>
                </h2>
                <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                  Building impactful software at leading tech companies
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {/* Amazon */}
              <div className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Amazon</h3>
                      <p className="text-lg font-semibold text-green-600 dark:text-green-400">Software Engineer II</p>
                      <p className="text-slate-600 dark:text-slate-400">Amazon Ads, Prime Video</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Aug 2024 - Present</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">Seattle, WA</p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Building scalable systems and features for Amazon&apos;s advertising platform and Prime Video, impacting millions of users globally.
                  </p>
                </div>
              </div>

              {/* Google */}
              <div className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Google</h3>
                      <p className="text-lg font-semibold text-green-600 dark:text-green-400">Software Engineer</p>
                      <p className="text-slate-600 dark:text-slate-400">Google Assistant</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Sep 2022 - Apr 2024</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">Kirkland, WA</p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                    Developed features and resolved critical bugs for Google Assistant using Large Language Models, impacting millions of devices worldwide.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50">
                      LLM
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50">
                      Software Development
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Qualtrics - Research */}
              <div className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Qualtrics</h3>
                      <p className="text-lg font-semibold text-green-600 dark:text-green-400">NLP Research Science Intern</p>
                      <p className="text-slate-600 dark:text-slate-400">Qualtrics IQ</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">May 2021 - Aug 2021</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">Seattle, WA</p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Developed methods for fine-grained aspect and opinion-based sentiment analysis, and researched weak supervision techniques to improve Qualtrics IQ&apos;s text analysis capabilities.
                  </p>
                </div>
              </div>

              {/* Qualtrics - Software */}
              <div className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Qualtrics</h3>
                      <p className="text-lg font-semibold text-green-600 dark:text-green-400">Software Engineer Intern</p>
                      <p className="text-slate-600 dark:text-slate-400">DevOps Team</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Summer 2020</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">Seattle, WA</p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Contributed to the development of DevOps tools and infrastructure improvements.
                  </p>
                </div>
              </div>
            </div>

            {/* Bay view image */}
            <div className="max-w-5xl mx-auto mt-12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  alt="Bay Area View"
                  className="w-full object-cover"
                  height="400"
                  src="/bayview.jpeg"
                  width="1200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Modern Grid */}
        <section className="w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-800/50" id="projects">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-3">
                <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                  Projects
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Things I&apos;ve <span className="gradient-text">Built</span>
                </h2>
                <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                  Side projects and experiments I&apos;ve worked on
                </p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
              {/* Pokemon Classifier */}
              <div className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900">
                  <Image
                    alt="Pokemon Classifier"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    fill
                    src="/pokemon_classifier.jpeg"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Pokemon Classifier
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    A web application using ResNet34 and transfer learning to identify Pokemon species with high accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      PyTorch
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      AWS
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Matcha Recipes */}
              <div className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 flex items-center justify-center">
                  <div className="text-8xl">🍵</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Matcha Recipes
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    A curated collection of delicious matcha-based recipes, from traditional tea to modern culinary creations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Prisma
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      PostgreSQL
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Experimental Bytes */}
              <div className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 md:col-span-2">
                <div className="md:flex">
                  <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 flex items-center justify-center">
                    <div className="text-8xl">🍳</div>
                  </div>
                  <div className="md:w-1/2 p-8 space-y-4 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Experimental Bytes Instagram
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Follow @experimentalbytes where culinary art meets food science! Showcasing creative cooking experiments and delicious recipes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        Food Science
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        Photography
                      </Badge>
                    </div>
                    <div>
                      <Button
                        asChild
                        variant="outline"
                        className="border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20"
                      >
                        <Link href="https://instagram.com/experimentalbytes" target="_blank">
                          View on Instagram
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Matcha Passion Section */}
        <section className="w-full py-24 md:py-32 bg-gradient-to-br from-green-50 via-emerald-50/50 to-green-50 dark:from-slate-900 dark:via-green-900/10 dark:to-slate-900" id="matcha">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                    🍵 Matcha Lover
                  </div>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    The Art of <span className="gradient-text">Matcha</span>
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Beyond being a delicious beverage, matcha is a superfood packed with antioxidants, metabolism-boosting properties, and provides sustained energy without the jitters.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Sustained Energy</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          Gentle caffeine boost that keeps me focused throughout the day
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <span className="text-2xl">🧘</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Rich in L-Theanine</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          Promotes relaxation and mental clarity without drowsiness
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                  >
                    <Link href="#blog">Read More</Link>
                  </Button>
                </div>
                <div className="relative order-1 lg:order-2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      alt="Matcha Green Tea"
                      className="w-full object-cover"
                      height={600}
                      src="/matcha-green-tea.avif"
                      width={600}
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-3xl opacity-30"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full blur-3xl opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="w-full py-24 md:py-32 bg-white dark:bg-slate-900" id="blog">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-3">
                <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                  Blog
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Latest <span className="gradient-text">Writings</span>
                </h2>
                <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                  Thoughts on software engineering, technology, and matcha
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Link
                className="group block relative overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-2xl"
                href="https://matchaisthebest.w3spaces.com"
                target="_blank"
              >
                <div className="aspect-video relative">
                  <Image
                    alt="Matcha Blog Post"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                    src="/josh_matcha_blog.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2 transform transition-transform group-hover:translate-y-[-4px]">
                      The Art of Brewing the Perfect Cup of Matcha
                    </h3>
                    <p className="text-slate-200 text-sm">
                      Discover the traditional techniques and modern twists for making exceptional matcha
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JY</span>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  © 2025 Josh Yeung. All rights reserved.
                </span>
              </div>
              <div className="flex gap-6">
                <Link href="https://github.com/yeungjosh" className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  GitHub
                </Link>
                <Link href="https://linkedin.com/in/yeungjosh" className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  LinkedIn
                </Link>
                <Link href="mailto:hello@joshyeung.com" className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Email
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
