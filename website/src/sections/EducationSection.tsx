import { Education } from "@/types/portfolio";

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
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

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  {edu.school.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {edu.school}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mt-1">
                      {edu.degree}, {edu.field}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    {edu.gpa && (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600 dark:text-slate-400">GPA:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{edu.gpa}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Years:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                  </div>
                  {edu.description && (
                    <div className="pt-2">
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {edu.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
