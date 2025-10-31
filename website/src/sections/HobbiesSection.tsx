import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hobby } from "@/types/portfolio";

interface HobbiesSectionProps {
  hobbies: Hobby[];
}

export default function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  // Special handling for chess hobby with rating and links
  const renderHobbyDetails = (hobby: Hobby) => {
    if (hobby.id === 'chess' && hobby.details) {
      const rating = hobby.details.find(d => d.includes('Rating'));
      const lichessLink = hobby.details.find(d => d.includes('Lichess'));
      const chessComLink = hobby.details.find(d => d.includes('Chess.com'));

      return (
        <>
          {rating && (
            <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-4">
              {rating}
            </div>
          )}
          {(lichessLink || chessComLink) && (
            <div className="flex flex-wrap gap-2">
              {lichessLink && (
                <Button asChild size="sm" variant="outline" className="border-2 border-slate-900 dark:border-slate-300">
                  <Link href={lichessLink.split(': ')[1]} target="_blank">
                    Lichess
                  </Link>
                </Button>
              )}
              {chessComLink && (
                <Button asChild size="sm" variant="outline" className="border-2 border-slate-900 dark:border-slate-300">
                  <Link href={chessComLink.split(': ')[1]} target="_blank">
                    Chess.com
                  </Link>
                </Button>
              )}
            </div>
          )}
        </>
      );
    }

    // Default details rendering
    return hobby.details?.map((detail, index) => (
      <p key={index} className="text-sm text-slate-500 dark:text-slate-500 italic">
        {detail}
      </p>
    ));
  };

  return (
    <section className="w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-800/50" id="hobbies">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-3">
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
              Outside of Work
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
              Hobbies & <span className="gradient-text">Interests</span>
            </h2>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300">
              When I&apos;m not coding, you&apos;ll find me playing competitive games or enjoying strategic challenges
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="text-5xl mb-4">{hobby.emoji}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {hobby.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">
                {hobby.description}
              </p>
              {renderHobbyDetails(hobby)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
