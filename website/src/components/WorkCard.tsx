import { Badge } from "@/components/ui/badge";
import { WorkExperience } from "@/types/portfolio";

interface WorkCardProps {
  work: WorkExperience;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{work.company}</h3>
            <p className="text-lg font-semibold text-green-600 dark:text-green-400">{work.role}</p>
            {work.team && <p className="text-slate-600 dark:text-slate-400">{work.team}</p>}
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {work.startDate} - {work.endDate}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">{work.location}</p>
          </div>
        </div>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
          {work.bullets.map((bullet, index) => (
            <li key={index}>• {bullet}</li>
          ))}
        </ul>
        {work.technologies && work.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {work.technologies.map((tech) => (
              <Badge
                key={tech}
                className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
