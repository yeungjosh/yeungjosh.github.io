import { Badge } from "@/components/ui/badge";
import { SkillCategory } from "@/types/portfolio";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
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
          {skills.map((category) => (
            <div key={category.id} className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-2xl">{category.emoji}</span> {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
