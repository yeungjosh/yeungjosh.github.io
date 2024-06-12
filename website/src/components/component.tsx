/**
/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] justify-center">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#1b5e20] text-[#c8e6c9]">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6 fill-[#c8e6c9]" />
          <span className="sr-only">Matcha Engineer</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#c8e6c9]" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#c8e6c9]" href="#">
            Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#c8e6c9]" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#c8e6c9]" href="#">
            Blog
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f1f8e9]" id="about">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="rounded-full w-[300px] h-[300px] mx-auto overflow-hidden">
              <Image
                alt="Profile"
                className="object-cover"
                height="300"
                src="/profile_pic.jpg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-[#1b5e20]">
                  Hi, my name is Josh Yeung!
                </h1>
                <p className="max-w-[600px] text-[#388e3c] md:text-xl">
                  I am a software engineer at Google with a passion for matcha and building beautiful, functional web
                  applications.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#1b5e20] px-8 text-sm font-medium text-[#c8e6c9] shadow transition-colors hover:bg-[#1b5e20]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1b5e20] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#c8e6c9] dark:text-[#1b5e20] dark:hover:bg-[#c8e6c9]/90 dark:focus-visible:ring-[#c8e6c9]"
                  href="#"
                >
                  Contact Me
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-[#1b5e20] bg-[#f1f8e9] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#e8f5e9] hover:text-[#1b5e20] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1b5e20] disabled:pointer-events-none disabled:opacity-50 dark:border-[#c8e6c9] dark:bg-[#1b5e20] dark:hover:bg-[#c8e6c9] dark:hover:text-[#1b5e20] dark:focus-visible:ring-[#c8e6c9] dark:border-gray-800"
                  href="#"
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#e8f5e9] dark:bg-[#1b5e20]" id="work">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1b5e20] dark:text-[#c8e6c9]">
                  Work Experience
                </h2>
                <p className="max-w-[900px] text-[#388e3c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#c8e6c9]">
                  I have had the privilege of working at some of the top technology companies, where I have honed my skills
                  as a software engineer.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#1b5e20] dark:text-[#c8e6c9]">Google</h3>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">Software Engineer, 2022 - Present</p>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">
                    Developed features and resolved critical bugs for Google Assistant, impacting millions of devices.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#1b5e20] dark:text-[#c8e6c9]">Qualtrics</h3>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">Research Engineer Intern, 2021</p>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">
                  • Improved Qualtrics IQ’s text analysis capabilities using NLP, leading to more reliable experimental results.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#1b5e20] dark:text-[#c8e6c9]">Qualtrics</h3>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">Software Engineer Intern, 2020</p>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">
                    Contributed to the development of Devops tools during a summer internship.
                  </p>
                </div>
              </div>
              <Image
                alt="Work"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/bayview.jpeg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f1f8e9]" id="projects">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1b5e20]">My Projects</h2>
                <p className="max-w-[900px] text-[#388e3c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the projects I have worked on in my spare time.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#1b5e20]">Pokemon Classifier via Resnet</h3>
                  <p className="text-[#388e3c]">A web application that uses Resnet34 (a pre-trained image recognition system) to specifically identify Pokemon using transfer learning.</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#c8e6c9] text-[#1b5e20]" variant="secondary">
                      React
                    </Badge>
                    <Badge className="bg-[#c8e6c9] text-[#1b5e20]" variant="secondary">
                      Node.js
                    </Badge>
                    <Badge className="bg-[#c8e6c9] text-[#1b5e20]" variant="secondary">
                      PyTorch
                    </Badge>
                    <Badge className="bg-[#c8e6c9] text-[#1b5e20]" variant="secondary">
                      AWS
                    </Badge>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#1b5e20]">Matcha Recipes</h3>
                  <p className="text-[#388e3c]">A collection of delicious matcha-based recipes.</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#c8e6c9] text-[#1b5e20]" variant="secondary">
                      Next.js
                    </Badge>
                    <Badge className="bg-[#c8e6c9] text-[#1b5e20]" variant="secondary">
                      Prisma
                    </Badge>
                    <Badge className="bg-[#c8e6c9] text-[#1b5e20]" variant="secondary">
                      PostgreSQL
                    </Badge>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#1b5e20]">Experimental Bytes Instagram</h3>
                  <p className="text-[#388e3c]">Check out @experimentalbytes where culinary art meets food science! 🌟</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#c8e6c9] text-[#1b5e20]" variant="secondary">
                      Awesoming cooking skills
                    </Badge>
                  </div>
                </div>
              </div>
              <Image
                alt="Projects"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full"
                height="510"
                src="/pokemon_classifier.jpeg"
                width="550"
              />
            </div>
          </div>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#e8f5e9]" id="matcha">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#c8e6c9] px-3 py-1 text-sm text-[#1b5e20] dark:bg-[#1b5e20] dark:text-[#c8e6c9]">
                    Matcha Passion
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1b5e20]">
                    The Benefits of Matcha
                  </h2>
                  <p className="max-w-[900px] text-[#388e3c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Matcha is not just a delicious beverage, it is also packed with health benefits. From boosting
                    metabolism to improving focus, matcha is a superfood that I cannot get enough of.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Image
                  alt="Matcha Benefits"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height={310}
                  src="/matcha-green-tea.avif"
                  width={550}
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#1b5e20]">Why I Love Matcha</h3>
                    <p className="text-[#388e3c]">
                      Matcha is packed with antioxidants, boosts metabolism, and provides a gentle caffeine boost that
                      helps me stay focused and energized throughout the day.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#1b5e20]">My Favorite Matcha Spots</h3>
                    <p className="text-[#388e3c]">
                      When I am not brewing matcha at home, you can find me exploring the best matcha cafes and shops in
                      the city. From the traditional Japanese tea houses to the modern matcha bars, I have tried them all.
                    </p>
                  </div>
                  <Button
                    className="bg-[#c8e6c9] text-[#1b5e20] hover:bg-[#e8f5e9] hover:text-[#1b5e20] focus-visible:ring-[#1b5e20]"
                    variant="outline"
                  >
                    Discover More
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#e8f5e9] dark:bg-[#1b5e20]" id="blog">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1b5e20] dark:text-[#c8e6c9]">
                  From the Blog
                </h2>
                <p className="max-w-[900px] text-[#388e3c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#c8e6c9]">
                  Read about my thoughts on software engineering, matcha, and more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Link
                className="relative overflow-hidden rounded-xl transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b5e20] dark:focus-visible:ring-[#c8e6c9]"
                href="https://matchaisthebest.w3spaces.com"
              >
                <Image
                  alt="Blog Post"
                  className="object-cover aspect-video"
                  height="310"
                  src="/josh_matcha_blog.png"
                  width="550"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">The Art of Brewing the Perfect Cup of Matcha</h3>
                  <p className="text-sm" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
