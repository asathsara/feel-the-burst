import { Hero } from "@/components/hero";
import { FlavorGrid } from "@/components/flavor-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <FlavorGrid />

      {/* Additional Section for "High Energy" */}
      <section id="about" className="py-32 px-6 flex items-center justify-center bg-white text-black overflow-hidden relative">
        <div className="max-w-4xl text-center z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            UNLEASH THE <br />POWER WITHIN
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
            Engineered for those who never stop. BURST combines natural caffeine with essential electrolytes
            to keep you moving at the speed of light. No sugar, no crash, just pure energy.
          </p>
          <div className="mt-12">
            <button className="px-10 py-4 bg-black text-white text-sm font-bold uppercase tracking-[0.3em] hover:scale-105 transition-transform rounded-full">
              Explore Our Story
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/20 blur-[120px] rounded-full" />
      </section>

      <Footer />
    </main>
  );
}
