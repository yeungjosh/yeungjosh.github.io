import Link from "next/link";
import { ContactInfo } from "@/types/portfolio";

interface ContactSectionProps {
  contact: ContactInfo;
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section className="w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-800/50" id="contact">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
              Get in Touch
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300">
              Interested in collaborating or just want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="mt-8 text-2xl font-semibold text-slate-900 dark:text-white">
            {contact.email}
          </div>

          <div className="flex gap-6 mt-8">
            {contact.socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-lg"
              >
                {link.platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
