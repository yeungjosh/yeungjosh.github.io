import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null;

  const hasImage = !!project.thumbnail;
  const hasEmoji = !!project.emoji;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold gradient-text">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {project.modal.fullDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          {/* Visual */}
          {hasImage ? (
            <div className="aspect-video relative overflow-hidden rounded-xl">
              <Image
                src={project.thumbnail!}
                alt={project.title}
                className="w-full h-full object-cover"
                width={800}
                height={450}
              />
            </div>
          ) : hasEmoji ? (
            <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center rounded-xl">
              <div className="text-9xl">{project.emoji}</div>
            </div>
          ) : null}

          {/* Overview */}
          {project.modal.fullDescription && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Overview</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.modal.fullDescription}
              </p>
            </div>
          )}

          {/* Features */}
          {project.modal.features && project.modal.features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                {project.modal.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Details */}
          {project.modal.technicalDetails && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.modal.technicalDetails}
              </p>
            </div>
          )}

          {/* Problem/Solution/Impact */}
          {project.modal.problem && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Problem</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.modal.problem}
              </p>
            </div>
          )}

          {project.modal.solution && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Solution</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.modal.solution}
              </p>
            </div>
          )}

          {project.modal.impact && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.modal.impact}
              </p>
            </div>
          )}

          {/* Research Context */}
          {project.modal.researchContext && (
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Research conducted at:</strong>{" "}
                <Link
                  href={project.modal.researchContext.institutionUrl}
                  target="_blank"
                  className="text-green-600 dark:text-violet-400 hover:underline"
                >
                  {project.modal.researchContext.institution}
                </Link>
                {project.modal.researchContext.advisors && project.modal.researchContext.advisors.length > 0 && (
                  <>
                    {" "}under{" "}
                    {project.modal.researchContext.advisors.map((advisor, index) => (
                      <span key={index}>
                        <Link
                          href={advisor.url}
                          target="_blank"
                          className="text-green-600 dark:text-violet-400 hover:underline"
                        >
                          {advisor.name}
                        </Link>
                        {index < project.modal.researchContext!.advisors.length - 1 && " and "}
                      </span>
                    ))}
                  </>
                )}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          {project.modal.technologies && project.modal.technologies.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.modal.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {project.links && Object.keys(project.links).length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.live && (
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href={project.links.live} target="_blank">
                    {project.links.live.includes('huggingface') ? 'Try Live Demo' : 'View Live'}
                  </Link>
                </Button>
              )}
              {project.links.github && (
                <Button asChild variant="outline">
                  <Link href={project.links.github} target="_blank">
                    View on GitHub
                  </Link>
                </Button>
              )}
              {project.links.article && (
                <Button asChild variant="outline">
                  <Link href={project.links.article}>
                    Read Full Article
                  </Link>
                </Button>
              )}
              {project.links.demo && (
                <Button asChild variant="outline">
                  <Link href={project.links.demo} target="_blank">
                    View Demo
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
