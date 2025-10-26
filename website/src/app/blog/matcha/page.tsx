import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function MatchaBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-green-50 dark:from-slate-950 dark:via-green-950/20 dark:to-slate-950">
      {/* Header */}
      <header className="border-b border-green-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <Button asChild variant="ghost" size="sm">
            <Link href="/#blog" className="flex items-center gap-2 hover:gap-3 transition-all text-green-700 dark:text-green-400">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-900 dark:to-emerald-900">
        <div className="absolute inset-0 bg-[url('/matcha-green-tea.avif')] opacity-20 bg-cover bg-center"></div>
        <div className="relative container mx-auto px-6 py-24 max-w-4xl text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            🍵 Matcha Enthusiast
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            The Art of Brewing the Perfect Cup of Matcha
          </h1>
          <p className="text-xl md:text-2xl text-green-50 mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover the traditional techniques and modern twists for making exceptional matcha
          </p>
        </div>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Introduction */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-xl border border-green-100 dark:border-slate-800 mb-12">
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Brewing the perfect cup of matcha is an art that requires attention to detail and a passion for quality. From selecting premium powder to mastering the whisking technique, every step contributes to creating a smooth, vibrant, and delicious matcha experience.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you&apos;re a seasoned matcha aficionado or just beginning your green tea journey, this guide will help you unlock the full potential of this ancient superfood.
          </p>
        </div>

        {/* Brewing Steps */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            The <span className="text-green-600 dark:text-green-400">Perfect Brewing</span> Method
          </h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-900 dark:to-green-900/20 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Choose High-Quality Matcha</h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Start with high-quality matcha powder for the best flavor and color. Look for vibrant green color—the brighter, the better! Ceremonial grade is best for drinking, while culinary grade works for cooking and baking.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-900 dark:to-green-900/20 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Sift the Matcha</h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Sift the matcha powder through a fine mesh strainer to remove any clumps and ensure a smooth, lump-free texture. This crucial step prevents chunks in your final drink.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-900 dark:to-green-900/20 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Heat the Water</h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Heat water to about <strong>175°F (80°C)</strong>. Avoid boiling water as it can make the matcha taste bitter and destroy beneficial compounds. Use a thermometer for precision, or let boiled water cool for 5-10 minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-900 dark:to-green-900/20 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Add Matcha to Bowl</h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Place 1-2 teaspoons of sifted matcha into a matcha bowl (chawan). For a lighter drink use 1 tsp, for traditional thick matcha (koicha) use 2 tsp.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-900 dark:to-green-900/20 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Pour in Water</h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Add a small amount of hot water (about 2 ounces or 60ml) to the matcha powder. This creates the perfect concentration for a rich, flavorful cup.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-900 dark:to-green-900/20 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">
                  6
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Whisk Vigorously</h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                    Using a bamboo whisk (chasen), whisk the matcha in a rapid <strong>W or M motion</strong> (not circular!) until a frothy layer forms on top. This should take about 15-20 seconds of vigorous whisking.
                  </p>
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl">
                    <p className="text-base text-green-900 dark:text-green-200">
                      <strong>Pro Tip:</strong> The key to perfect froth is speed and the zigzag motion. Keep your wrist loose and move quickly!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-900 dark:to-green-900/20 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">
                  7
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Enjoy!</h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Pour the matcha into a cup and enjoy your perfect cup of matcha! Take a moment to appreciate the vibrant color, earthy aroma, and smooth taste. Best enjoyed immediately while still warm and frothy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Matcha Hacks */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Fun <span className="text-green-600 dark:text-green-400">Matcha Hacks</span> & Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-slate-800">
              <div className="text-4xl mb-4">🧊</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Iced Matcha Latte</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Make traditional matcha with less water, then pour over ice and add cold milk of choice. Perfect for hot summer days!
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-slate-800">
              <div className="text-4xl mb-4">🥛</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Creamy Matcha Latte</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Add frothed oat or almond milk for a café-style latte. The creaminess balances matcha&apos;s earthiness beautifully.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-slate-800">
              <div className="text-4xl mb-4">🍯</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Natural Sweeteners</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Try honey, maple syrup, or agave for natural sweetness. Add after whisking to preserve matcha&apos;s delicate flavors.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-slate-800">
              <div className="text-4xl mb-4">🥃</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Shaker Method</h3>
              <p className="text-slate-600 dark:text-slate-400">
                No whisk? Use a small jar or shaker bottle! Add matcha and water, shake vigorously for 20 seconds. Works surprisingly well!
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-slate-800">
              <div className="text-4xl mb-4">🍰</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Baking with Matcha</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Add 1-2 tsp matcha powder to cookies, cakes, or pancakes for a subtle earthy flavor and beautiful green color.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-slate-800">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Temperature Matters</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Too hot = bitter. Too cold = weak. The 175°F sweet spot unlocks matcha&apos;s full flavor without bitterness.
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Fascinating <span className="text-green-600 dark:text-green-400">Matcha Facts</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-900 dark:to-emerald-900 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-5xl mb-4">🏯</div>
              <h3 className="text-2xl font-bold mb-3">Ancient Origins</h3>
              <p className="text-green-50 text-lg leading-relaxed">
                Matcha has been a part of Japanese culture for over <strong>800 years</strong>, originally used by Zen Buddhist monks to aid in meditation and maintain alertness during long sessions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-900 dark:to-teal-900 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-2xl font-bold mb-3">Antioxidant Powerhouse</h3>
              <p className="text-emerald-50 text-lg leading-relaxed">
                Matcha is rich in antioxidants, including catechins like EGCG, which can help protect against cell damage. One cup has <strong>137x more antioxidants</strong> than regular green tea!
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 dark:from-teal-900 dark:to-cyan-900 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-5xl mb-4">🧘</div>
              <h3 className="text-2xl font-bold mb-3">Calm Energy</h3>
              <p className="text-teal-50 text-lg leading-relaxed">
                Matcha contains <strong>L-theanine</strong>, an amino acid that promotes a state of relaxation and well-being without drowsiness. It creates a calm, focused energy—no jitters!
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-900 dark:to-blue-900 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3">Vibrant Chlorophyll</h3>
              <p className="text-cyan-50 text-lg leading-relaxed">
                The vibrant green color comes from <strong>high chlorophyll content</strong>, achieved by shade-growing the tea plants. This is linked to natural detoxifying properties and metabolism boost.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 text-white shadow-xl col-span-full">
              <div className="text-5xl mb-4 text-center">🍵</div>
              <h3 className="text-2xl font-bold mb-3 text-center">Traditional Tea Ceremony</h3>
              <p className="text-blue-50 text-lg leading-relaxed max-w-3xl mx-auto text-center">
                The Japanese tea ceremony, known as <strong>&quot;chanoyu&quot;</strong> or <strong>&quot;sado&quot;</strong>, is a ritualistic preparation of matcha that symbolizes <strong>harmony, respect, purity, and tranquility</strong>. Every movement is deliberate and meaningful, transforming tea preparation into a meditative art form.
              </p>
            </div>
          </div>
        </div>

        {/* Favorite Foods Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            My Favorite <span className="text-green-600 dark:text-green-400">Foods</span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-10 text-lg">
            Beyond matcha, here are some of my other culinary favorites
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 flex items-center justify-center text-7xl">
                🥪
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">The Ultimate NYC Sandwich</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Packed with fresh ingredients and memories from my trips to NYC. There&apos;s nothing quite like a classic deli sandwich!
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 flex items-center justify-center text-7xl">
                🥩
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Juicy Grilled Steak</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Perfectly seasoned and grilled to perfection. A delicious treat that never disappoints!
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-pink-200 dark:from-red-900/20 dark:to-pink-900/20 flex items-center justify-center text-7xl">
                🍒
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Fresh Cherries</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  A sweet and healthy snack I can enjoy any time. Nature&apos;s candy!
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-red-100 dark:from-purple-900/20 dark:to-red-900/20 flex items-center justify-center text-7xl">
                🍝
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Wine & Vegetable Pasta</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  The combination of wine and fresh vegetables creates a rich, flavorful experience.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/20 flex items-center justify-center text-7xl">
                🧊
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Refreshing Popsicle</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Perfect for cooling down on a hot summer day. Simple pleasures!
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 flex items-center justify-center text-7xl">
                🐟
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Healthy Salmon Dish</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Delicious and packed with essential nutrients. The perfect balance of taste and health!
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 flex items-center justify-center text-7xl">
                🥐
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">French Croissant</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Flaky, buttery perfection. These remind me of my travels to France!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-900 dark:to-emerald-900 rounded-3xl p-12 text-white text-center shadow-2xl">
          <div className="text-6xl mb-6">🍵</div>
          <h2 className="text-4xl font-bold mb-6">About Me, The Matcha Enthusiast</h2>
          <p className="text-xl text-green-50 leading-relaxed max-w-2xl mx-auto mb-6">
            Hi there! I&apos;m a matcha enthusiast who loves exploring and experimenting with matcha in various recipes. From drinks to desserts, I&apos;m here to share my journey with you.
          </p>
          <p className="text-lg text-green-100 leading-relaxed max-w-2xl mx-auto">
            Join me as we delve into the vibrant and delicious world of matcha. Whether you&apos;re looking for the perfect brewing technique or creative recipe ideas, you&apos;re in the right place!
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-green-200 dark:border-slate-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Thank you for visiting my matcha blog. I hope you enjoyed the recipes and stories shared here.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm">
              Matcha Recipes
            </span>
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm">
              Drinks
            </span>
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm">
              Wellness
            </span>
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm">
              Lifestyle
            </span>
          </div>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/#blog">
              Back to All Posts
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}
