import React from "react";
import TravelGlobe from "@/components/TravelGlobe";
import places from "@/data/places.json";

type Place = {
  name: string;
  coords: [number, number];
  notes?: string;
  photos?: string[];
};

export default function PlacesGlobeSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-black" id="places">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-3">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              Geography
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
              Places I&apos;ve <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Lived</span> 🌍
            </h2>
            <p className="max-w-2xl text-lg text-slate-300">
              Based in Seattle, WA — here&apos;s a quick globe view of my home cities
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <TravelGlobe places={places as Place[]} />
        </div>

        {/* Accessible fallback list */}
        <div className="max-w-6xl mx-auto mt-12">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Cities</h3>
          <ul className="grid gap-4 text-slate-300 sm:grid-cols-2 lg:grid-cols-3">
            {(places as Place[]).map((p) => (
              <li key={p.name} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">{p.name}</div>
                  {p.notes && <div className="text-sm text-slate-400 mt-1">{p.notes}</div>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
