import Image from 'next/image';
import WorkCard from "@/components/WorkCard";
import { WorkExperience } from "@/types/portfolio";

interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
}

export default function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  return (
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
          {workExperience.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
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
  );
}
