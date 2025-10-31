import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const hasImage = !!project.thumbnail;
  const hasEmoji = !!project.emoji;

  return (
    <div
      onClick={onClick}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
    >
      {/* Visual */}
      {hasImage ? (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.thumbnail!}
            alt={project.title}
            className="w-full h-full object-cover"
            width={800}
            height={450}
          />
        </div>
      ) : hasEmoji ? (
        <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
          <div className="text-8xl">{project.emoji}</div>
        </div>
      ) : null}

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
