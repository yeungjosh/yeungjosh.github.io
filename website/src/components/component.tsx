'use client';

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { ThemeToggle } from "@/components/theme-toggle";

export function Component() {
  const [scrolled, setScrolled] = useState(false);
  const [openProject, setOpenProject] = useState<string | null>(null);

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
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-semibold hover:text-green-600 dark:hover:text-violet-400 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-semibold hover:text-green-600 dark:hover:text-violet-400 transition-colors" href="#work">
            Experience
          </Link>
          <Link className="text-sm font-semibold hover:text-green-600 dark:hover:text-violet-400 transition-colors" href="#education">
            Education
          </Link>
          <Link className="text-sm font-semibold hover:text-green-600 dark:hover:text-violet-400 transition-colors" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-semibold hover:text-green-600 dark:hover:text-violet-400 transition-colors" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-semibold hover:text-green-600 dark:hover:text-violet-400 transition-colors" href="#blog">
            Blog
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section - Modern & Bold */}
        <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900" id="about">
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
                  <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-slate-900 dark:text-white">
                    Hi, I&apos;m{" "}
                    <span className="gradient-text">Josh Yeung</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-2xl">
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
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
                  Where I&apos;ve <span className="gradient-text">Worked</span>
                </h2>
                <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300">
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
                      <p className="text-lg font-semibold text-green-600 dark:text-green-400">Software Development Engineer II & Machine Learning Engineer</p>
                      <p className="text-slate-600 dark:text-slate-400">Amazon Ads, Prime Video</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Aug 2024 - Present</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">Seattle, WA</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li>• Designed and implemented an optimized caching architecture for search query understanding, reducing unnecessary ad sourcing queries with low shopping intent. Resulted in a 16.24% increase in Return on Ad Spend (RoAS).</li>
                    <li>• Architected and led end-to-end redesign of visual sourcing multimodal embeddings pipeline, cutting storage costs by 75% and reducing image processing volume by 85.27% (5M to 750K daily), saving $6,600+ monthly.</li>
                    <li>• Developed and deployed internal AI assistant based on secure RAG-powered knowledge base leveraging multiple LLMs via Amazon Bedrock, streamlining team workflows.</li>
                  </ul>
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
                      <p className="text-xs text-slate-400 dark:text-slate-500">Seattle, WA</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                    <li>• Designed and launched fallbacks for home/work journeys on Google Assistant (~80M daily users), improving query reliability for 8M users and increasing successful directions queries by 22.68%.</li>
                    <li>• Built personalized restaurant recommender using Bard/Gemini, enhancing conversational AI experiences.</li>
                    <li>• Developed suggestion buttons for new Google Assistant on mobile, driving 40M daily impressions and 3M DAUs.</li>
                    <li>• Integrated 10+ local search features (e.g., &quot;Starbucks hours,&quot; &quot;Seattle traffic&quot;), improving navigation capabilities.</li>
                    <li>• Designed and implemented &quot;Search Along Route&quot; prototype for Google Assistant (1.5M DAUs).</li>
                    <li>• Increased test coverage for local journeys by 400% through automated parameterized regression tests.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50">
                      LLM
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50">
                      Conversational AI
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50">
                      Google Assistant
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
                      <p className="text-lg font-semibold text-green-600 dark:text-green-400">Research Engineer Intern</p>
                      <p className="text-slate-600 dark:text-slate-400">Qualtrics IQ</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">May 2021 - Aug 2021</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">Seattle, WA</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li>• Improved Qualtrics IQ&apos;s text analysis capabilities using NLP, leading to more reliable experimental results.</li>
                    <li>• Optimized NLP model deployment on AWS SageMaker and internal platform. Achieved 80% data reduction for Qualtrics dataset inference while maintaining high accuracy (58% F1 score) in aspect opinion tagging.</li>
                  </ul>
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

        {/* Education Section */}
        <section className="w-full py-24 md:py-32 bg-white dark:bg-slate-900" id="education">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-3">
                <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                  Education
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
                  Academic <span className="gradient-text">Background</span>
                </h2>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    UC
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        University of California, Berkeley
                      </h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400 mt-1">
                        Bachelor&apos;s degree, Computer Science
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600 dark:text-slate-400">GPA:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">3.70</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600 dark:text-slate-400">Years:</span>
                        <span className="font-semibold text-slate-900 dark:text-white">2017 - 2021</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-semibold">Activities and societies:</span> Upsilon Pi Epsilon (UPE)
                      </p>
                    </div>
                  </div>
                </div>
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
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
                  Things I&apos;ve <span className="gradient-text">Built</span>
                </h2>
                <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300">
                  Side projects and experiments I&apos;ve worked on
                </p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
              {/* Pokemon Team Recommender */}
              <div
                onClick={() => setOpenProject('pokemon')}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 md:col-span-2 cursor-pointer"
              >
                <div className="p-6 space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-xl mb-4">
                    <img
                      src="/pokemon_team_recommender.png"
                      alt="Pokemon Team Recommender Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Pokemon Team Recommender
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    ML-powered competitive team builder using LightGBM. Trained on 10K synthetic teams with 93% code coverage. Includes validation study comparing synthetic vs. real battle data.
                  </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        Python
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        LightGBM
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        Gradio
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        ML
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Two Approaches:</p>
                      <div className="flex flex-wrap gap-2">
                        <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                          <Link href="https://huggingface.co/spaces/joshuajoshy/pokemon-team-recommender" target="_blank">
                            ML-Hybrid Demo
                          </Link>
                        </Button>
                        <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                          <Link href="https://huggingface.co/spaces/joshuajoshy/pokemon-cf-recommender" target="_blank">
                            Collaborative Filtering Demo
                          </Link>
                        </Button>
                      </div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-3">Validation Research:</p>
                      <div className="flex flex-wrap gap-2">
                        <Button asChild size="sm" variant="outline" className="border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700">
                          <Link href="https://github.com/yeungjosh/pokemon-real-data-experiment/blob/main/REPORT.md" target="_blank">
                            Research Report
                          </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700">
                          <Link href="https://github.com/yeungjosh/pokemon-team-recommender" target="_blank">
                            ML-Hybrid GitHub
                          </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700">
                          <Link href="https://github.com/yeungjosh/pokemon-cf-recommender" target="_blank">
                            CF GitHub
                          </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700">
                          <Link href="https://github.com/yeungjosh/pokemon-real-data-experiment" target="_blank">
                            Experiment GitHub
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
              </div>

              {/* Bible Study App */}
              <div
                onClick={() => setOpenProject('bible')}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 flex items-center justify-center">
                  <div className="text-8xl">📖</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Bible Study App
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    AI-powered cross-platform scripture study app with verse highlighting, note-taking, and chat history management. Built with Capacitor for iOS/Android.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      TypeScript
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Capacitor
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      AI
                    </Badge>
                  </div>
                </div>
              </div>

              {/* System Design Trainer */}
              <div
                onClick={() => setOpenProject('systemdesign')}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 flex items-center justify-center">
                  <div className="text-8xl">🎯</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    System Design Trainer
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Duolingo-style iOS app for practicing system design interviews. Multiple-choice drills with curated explanations and progress tracking.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Swift
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      SwiftUI
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      StoreKit 2
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      iOS
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Restaurant Recommender */}
              <div
                onClick={() => setOpenProject('restaurant')}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 flex items-center justify-center">
                  <div className="text-8xl">🍽️</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Personalized Restaurant Recommender System
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Conversational AI for Google Assistant providing personalized restaurant recommendations based on cuisine preferences, dietary restrictions, and location.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Bard/Gemini
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Google Cloud Platform
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Conversational AI
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Google Assistant
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Pokemon Classifier */}
              <div
                onClick={() => setOpenProject('pokemonclassifier')}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center">
                  <div className="text-8xl">🔍</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Pokemon Classifier via Resnet
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Fine-tuned Resnet34 for Pokemon identification achieving 94% accuracy. Deployed as a public web application on AWS Elastic Beanstalk.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      PyTorch
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      ResNet34
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      AWS Elastic Beanstalk
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Computer Vision
                    </Badge>
                  </div>
                </div>
              </div>

              {/* BrickStyle-Gen */}
              <div
                onClick={() => setOpenProject('brickstyle')}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/lego.jpg"
                    alt="LEGO Bricks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    BrickStyle-Gen
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Text-to-LEGO-style image generator using Stable Diffusion XL with custom LoRA fine-tuning. 10+ curated style presets and adjustable parameters.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Gradio
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      SDXL
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      PyTorch
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      asChild
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link href="https://huggingface.co/spaces/joshuajoshy/brickstyle-gen" target="_blank">
                        Live Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link href="https://github.com/yeungjosh/brickstyle-gen" target="_blank">
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Experimental Bytes */}
              <div
                onClick={() => window.open('https://instagram.com/experimentalbytes', '_blank')}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/elevate-your-food-instagram-pic.png"
                    alt="Experimental Bytes Food Photography"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Experimental Bytes
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
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                    >
                      <Link href="https://instagram.com/experimentalbytes" target="_blank">
                        View on Instagram
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Pacman AI */}
              <div
                onClick={() => setOpenProject('pacman')}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-yellow-50 to-blue-50 dark:from-yellow-900/20 dark:to-blue-900/20 flex items-center justify-center">
                  <div className="text-8xl">👻</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Pacman AI
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    UC Berkeley CS188 project implementing search algorithms, multi-agent systems, reinforcement learning, and probabilistic inference in the Pacman domain.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      AI
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Machine Learning
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      UC Berkeley
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full py-24 md:py-32 bg-white dark:bg-slate-900" id="skills">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-3">
                <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                  Skills & Technologies
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
                  Technical <span className="gradient-text">Expertise</span>
                </h2>
                <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300">
                  Technologies and tools I work with across projects
                </p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Languages */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-2xl">💻</span> Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Python
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Java
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Kotlin
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Go
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    C++
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    C
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Dart
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    JavaScript
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    TypeScript
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    SQL
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Bash
                  </Badge>
                </div>
              </div>

              {/* Frontend */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-2xl">🎨</span> Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    React
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Next.js
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    SwiftUI
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Tailwind CSS
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Vite
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Framer Motion
                  </Badge>
                </div>
              </div>

              {/* Backend & Databases */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-2xl">⚙️</span> Backend & Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Node.js
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Flask
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Spring Boot
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    REST APIs
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    GraphQL
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    gRPC
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    MySQL
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    PostgreSQL
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    MongoDB
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Bigtable
                  </Badge>
                </div>
              </div>

              {/* ML & AI */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-2xl">🤖</span> ML & AI
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    PyTorch
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    TensorFlow
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    LLMs
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Generative AI
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Prompt Engineering
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    NLP
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    LightGBM
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    scikit-learn
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Pandas
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    NumPy
                  </Badge>
                </div>
              </div>

              {/* Mobile */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-2xl">📱</span> Mobile
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    iOS
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Capacitor
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    StoreKit 2
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    SPM
                  </Badge>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-2xl">☁️</span> Cloud & DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    AWS
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    GCP
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Docker
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Kubernetes
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Linux
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Unix
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Git
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Mercurial
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    S3
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    MapReduce
                  </Badge>
                </div>
              </div>

              {/* Core Skills & Practices */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-2xl">⚡</span> Core Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Object-Oriented Design
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Data Structures
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Algorithms
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Operating Systems
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    DevOps
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    TDD
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    CI/CD
                  </Badge>
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
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
                  Latest <span className="gradient-text">Writings</span>
                </h2>
                <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300">
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

        {/* Project Modals */}
        {/* BrickStyle-Gen Modal */}
        <Dialog open={openProject === 'brickstyle'} onOpenChange={() => setOpenProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold gradient-text">BrickStyle-Gen</DialogTitle>
              <DialogDescription className="text-lg">
                Text-to-LEGO-Style Image Generator
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-red-50 to-yellow-50 dark:from-red-900/20 dark:to-yellow-900/20 flex items-center justify-center rounded-xl">
                <div className="text-9xl">🧱</div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  A Gradio-based web application that generates LEGO-style images from text prompts using Stable Diffusion XL with custom LoRA fine-tuning.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Text-to-brick-style image generation using SDXL + LEGO LoRA</li>
                  <li>• 10+ curated style presets (Minifig Portrait, Micro-City, BrickHeadz, etc.)</li>
                  <li>• Adjustable parameters (steps, CFG scale, LoRA intensity, batch size)</li>
                  <li>• CPU/GPU/MPS support for cross-platform compatibility</li>
                  <li>• Research foundation based on Image2Lego (2021) paper for future 2D→3D conversion</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Technical Highlights</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Production-ready Gradio web interface with 4 tabs</li>
                  <li>• Configurable via environment variables (model IDs, safety filters)</li>
                  <li>• Optional ControlNet (sketch-to-brick) and IP-Adapter (reference styling) support</li>
                  <li>• Complete project structure with modular pipeline architecture</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>Gradio 4.0</Badge>
                  <Badge>PyTorch</Badge>
                  <Badge>Stable Diffusion XL</Badge>
                  <Badge>LEGO LoRA</Badge>
                  <Badge>HuggingFace Spaces</Badge>
                </div>
              </div>

              <div className="flex gap-3">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="https://huggingface.co/spaces/joshuajoshy/brickstyle-gen" target="_blank">
                    Try Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://github.com/yeungjosh/brickstyle-gen" target="_blank">
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Pokemon Team Recommender Modal */}
        <Dialog open={openProject === 'pokemon'} onOpenChange={() => setOpenProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold gradient-text">Pokemon Team Recommender</DialogTitle>
              <DialogDescription className="text-lg">
                ML-Powered Competitive Pokemon Team Builder
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center rounded-xl">
                <div className="text-9xl">⚡</div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  An ML-driven recommender system that completes competitive Pokemon teams using Gradient Boosting to learn optimal feature weights. Includes comprehensive validation studies comparing synthetic training data vs. real battle outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Two Approaches</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">ML-Hybrid</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Domain knowledge + learned weights using LightGBM
                    </p>
                    <Button asChild size="sm" className="w-full">
                      <Link href="https://huggingface.co/spaces/joshuajoshy/pokemon-team-recommender" target="_blank">
                        Try Demo
                      </Link>
                    </Button>
                  </div>
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Collaborative Filtering</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Pure data-driven approach based on co-occurrence patterns
                    </p>
                    <Button asChild size="sm" className="w-full">
                      <Link href="https://huggingface.co/spaces/joshuajoshy/pokemon-cf-recommender" target="_blank">
                        Try Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features (ML-Hybrid)</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• LightGBM Gradient Boosting Regressor (100 trees, 76KB model)</li>
                  <li>• 7 domain-specific features (type coverage, meta matchup, role diversity)</li>
                  <li>• Trained on 10K synthetic teams with weak supervision</li>
                  <li>• Inference time: &lt;1.5s for 12-candidate search</li>
                  <li>• 28 unit tests with 93% code coverage</li>
                  <li>• Model Performance: Training R²: 0.685, Validation R²: 0.642</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Validation Study</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                  Compared synthetic training data against real Pokemon Showdown battle outcomes. Key finding: <strong>Synthetic model overestimated meta importance by 38%!</strong> Real battles prioritize raw stats (bulk + speed = 62%) over strategic factors.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild size="sm" variant="outline">
                    <Link href="https://github.com/yeungjosh/pokemon-real-data-experiment/blob/main/REPORT.md" target="_blank">
                      Read Research Report
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="https://github.com/yeungjosh/pokemon-real-data-experiment" target="_blank">
                      Experiment GitHub
                    </Link>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>LightGBM</Badge>
                  <Badge>Gradio</Badge>
                  <Badge>scikit-learn</Badge>
                  <Badge>Pandas</Badge>
                  <Badge>NumPy</Badge>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Bible Study App Modal */}
        <Dialog open={openProject === 'bible'} onOpenChange={() => setOpenProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold gradient-text">Bible Study App</DialogTitle>
              <DialogDescription className="text-lg">
                AI-Powered Scripture Study Application
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 flex items-center justify-center rounded-xl">
                <div className="text-9xl">📖</div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  A cross-platform Bible reading and study application with AI-powered assistance, verse highlighting, note-taking, and chat history management.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Interactive Bible reader with verse selection and highlighting</li>
                  <li>• AI chat assistant with verse context awareness</li>
                  <li>• Multi-session chat history management</li>
                  <li>• Verse highlighting with color coding</li>
                  <li>• Note-taking system attached to verse ranges</li>
                  <li>• Customizable reading settings (density, font scale, verse numbers)</li>
                  <li>• Dark mode support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Architecture</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Centralized state management via Context API + useReducer</li>
                  <li>• BibleProvider wraps main app with global Bible study state</li>
                  <li>• Component-driven architecture following shadcn/ui patterns</li>
                  <li>• localStorage-based authentication system</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React 18</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Vite</Badge>
                  <Badge>Capacitor 7</Badge>
                  <Badge>shadcn/ui</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>TanStack Query</Badge>
                  <Badge>React Router v6</Badge>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Platform:</strong> Web + iOS/Android via Capacitor
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {/* System Design Trainer Modal */}
        <Dialog open={openProject === 'systemdesign'} onOpenChange={() => setOpenProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold gradient-text">System Design Trainer</DialogTitle>
              <DialogDescription className="text-lg">
                Duolingo-Style Interview Practice for System Design
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 flex items-center justify-center rounded-xl">
                <div className="text-9xl">🎯</div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  A SwiftUI iOS application for practicing system design interview concepts through multiple-choice questions with curated explanations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Scenario-based question packs (URL Shortener, Twitter Feed, Ride-Share, etc.)</li>
                  <li>• Multiple-choice drills with immediate feedback</li>
                  <li>• Detailed explanations for correct and incorrect answers</li>
                  <li>• Free starter pack + Pro unlock (one-time IAP)</li>
                  <li>• Progress tracking: accuracy, streaks, weak topics</li>
                  <li>• Native accessibility support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Architecture</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Multi-module SPM structure (SystemDesignContent + SystemDesignTrainerApp)</li>
                  <li>• Actor-based ContentRepository with SHA256 checksum validation</li>
                  <li>• Protocol-oriented IAP design (StoreClient protocol, PurchaseManager)</li>
                  <li>• Composite EntitlementCache (Keychain + UserDefaults sync)</li>
                  <li>• Spec-driven development with TDD</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Content System</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• JSON-based question packs with manifest validation</li>
                  <li>• SHA256 integrity checks on all content</li>
                  <li>• Easy authoring workflow for new packs</li>
                  <li>• Automatic content validation via unit tests</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Swift 5.9+</Badge>
                  <Badge>SwiftUI</Badge>
                  <Badge>StoreKit 2</Badge>
                  <Badge>SPM</Badge>
                  <Badge>iOS 17+</Badge>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Status:</strong> Active development, MVP in progress
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {/* Restaurant Recommender Modal */}
        <Dialog open={openProject === 'restaurant'} onOpenChange={() => setOpenProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold gradient-text">Personalized Restaurant Recommender System</DialogTitle>
              <DialogDescription className="text-lg">
                Conversational AI for Google Assistant
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 flex items-center justify-center rounded-xl">
                <div className="text-9xl">🍽️</div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Developed a conversational AI system integrated with Google Assistant that provides personalized restaurant recommendations. The system transforms the generic search results into engaging, customized spoken suggestions based on user preferences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Natural language understanding for user preferences</li>
                  <li>• Personalized recommendations based on cuisine type</li>
                  <li>• Dietary restriction filtering (vegetarian, vegan, gluten-free, etc.)</li>
                  <li>• Location-based restaurant discovery</li>
                  <li>• Conversational interface with spoken responses</li>
                  <li>• Enhanced UX over traditional list-based results</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Technical Implementation</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Powered by Google Bard/Gemini for natural language processing</li>
                  <li>• Deployed on Google Cloud Platform for scalability</li>
                  <li>• Integrated with Google Assistant Actions</li>
                  <li>• Real-time preference analysis and filtering</li>
                  <li>• Custom dialog flows for natural conversation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Bard/Gemini</Badge>
                  <Badge>Google Cloud Platform</Badge>
                  <Badge>Google Assistant</Badge>
                  <Badge>Dialogflow</Badge>
                  <Badge>NLP</Badge>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Impact:</strong> Transformed generic restaurant listings into personalized, spoken recommendations tailored to individual preferences.
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {/* Pokemon Classifier Modal */}
        <Dialog open={openProject === 'pokemonclassifier'} onOpenChange={() => setOpenProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold gradient-text">Pokemon Classifier via Resnet</DialogTitle>
              <DialogDescription className="text-lg">
                Deep Learning Image Classification with PyTorch
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center rounded-xl">
                <div className="text-9xl">🔍</div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Fine-tuned a pre-trained ResNet34 convolutional neural network to identify Pokemon characters with 94% accuracy. The trained model was deployed as a publicly accessible web application on AWS Elastic Beanstalk.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Project Highlights</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• <strong>94% Classification Accuracy</strong> - High precision Pokemon identification</li>
                  <li>• Transfer Learning - Leveraged pre-trained ResNet34 architecture</li>
                  <li>• Fine-tuning - Adapted model for Pokemon-specific features</li>
                  <li>• Production Deployment - Publicly accessible web application</li>
                  <li>• Cloud Infrastructure - Scalable hosting on AWS Elastic Beanstalk</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Built with PyTorch deep learning framework</li>
                  <li>• Transfer learning from ImageNet pre-trained ResNet34</li>
                  <li>• Custom dataset preparation and augmentation</li>
                  <li>• Model optimization and hyperparameter tuning</li>
                  <li>• Flask/FastAPI web service for inference</li>
                  <li>• AWS Elastic Beanstalk deployment pipeline</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Learnings</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Transfer learning for specialized classification tasks</li>
                  <li>• Model deployment and serving best practices</li>
                  <li>• Cloud infrastructure management on AWS</li>
                  <li>• End-to-end ML pipeline from training to production</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>PyTorch</Badge>
                  <Badge>ResNet34</Badge>
                  <Badge>AWS Elastic Beanstalk</Badge>
                  <Badge>Computer Vision</Badge>
                  <Badge>Transfer Learning</Badge>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Achievement:</strong> Successfully deployed a production-ready deep learning model achieving 94% accuracy on Pokemon classification.
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {/* Pacman AI Modal */}
        <Dialog open={openProject === 'pacman'} onOpenChange={() => setOpenProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold gradient-text">Pacman AI</DialogTitle>
              <DialogDescription className="text-lg">
                UC Berkeley CS188: Introduction to Artificial Intelligence
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-yellow-50 to-blue-50 dark:from-yellow-900/20 dark:to-blue-900/20 flex items-center justify-center rounded-xl">
                <div className="text-9xl">👻</div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  A comprehensive series of AI projects from UC Berkeley&apos;s CS188 course, implementing core artificial intelligence techniques in the classic Pacman game domain. The projects cover the entire spectrum of AI fundamentals, from basic search to advanced machine learning.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Project Components</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">1. Search Algorithms</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      Implemented fundamental search algorithms to help Pacman navigate mazes and find optimal paths:
                    </p>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300 ml-4">
                      <li>• Depth-First Search (DFS) for maze exploration</li>
                      <li>• Breadth-First Search (BFS) for shortest path finding</li>
                      <li>• Uniform Cost Search (UCS) for weighted path optimization</li>
                      <li>• A* Search with custom heuristics for efficient navigation</li>
                      <li>• Applied to traveling salesman problems (collecting all food pellets)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">2. Multi-Agent Search</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      Modeled Pacman as an adversarial game with intelligent ghost opponents:
                    </p>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300 ml-4">
                      <li>• Minimax algorithm for optimal play against adversarial agents</li>
                      <li>• Alpha-Beta pruning for efficient game tree search</li>
                      <li>• Expectimax for handling stochastic ghost behaviors</li>
                      <li>• Custom evaluation functions for state assessment</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">3. Reinforcement Learning</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      Trained agents to learn optimal policies through trial and error:
                    </p>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300 ml-4">
                      <li>• Value Iteration for computing optimal value functions</li>
                      <li>• Q-Learning for model-free reinforcement learning</li>
                      <li>• Approximate Q-Learning with feature extraction</li>
                      <li>• Applied to both Pacman and crawler agents</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">4. Probabilistic Inference</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      Used probabilistic reasoning to locate ghosts with noisy sensors:
                    </p>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300 ml-4">
                      <li>• Bayes Nets for representing probabilistic dependencies</li>
                      <li>• Exact inference using variable elimination</li>
                      <li>• Hidden Markov Models (HMM) with the forward algorithm</li>
                      <li>• Particle filtering for approximate inference</li>
                      <li>• Ghost tracking with noisy distance readings</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">5. Machine Learning</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      Applied supervised learning techniques to classification tasks:
                    </p>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300 ml-4">
                      <li>• Perceptron algorithm for binary classification</li>
                      <li>• Multi-layer neural networks with backpropagation</li>
                      <li>• Digit classification (MNIST-style dataset)</li>
                      <li>• Language identification from text features</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Learnings</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Understanding trade-offs between optimality, completeness, and computational efficiency</li>
                  <li>• Designing effective heuristics for informed search algorithms</li>
                  <li>• Modeling uncertainty and making decisions under incomplete information</li>
                  <li>• Balancing exploration vs. exploitation in reinforcement learning</li>
                  <li>• Feature engineering for approximate learning methods</li>
                  <li>• Debugging complex AI systems with emergent behaviors</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python 3.6+</Badge>
                  <Badge>NumPy</Badge>
                  <Badge>Algorithm Design</Badge>
                  <Badge>UC Berkeley CS188</Badge>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Academic Project:</strong> Completed as part of UC Berkeley&apos;s Introduction to Artificial Intelligence course (CS188)
              </p>
            </div>
          </DialogContent>
        </Dialog>

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
