"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";
import { BurstVideo } from "./ui/burst-video";
import useEmblaCarousel from "embla-carousel-react";
import { HERO_VIDEOS } from "@/data/flavors";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <div className="embla h-full overflow-hidden" ref={emblaRef}>
                    <div className="embla__container h-full flex">
                        {HERO_VIDEOS.map((src, index) => (
                            <div key={src} className="embla__slide flex-[0_0_100%] min-w-0 h-full relative">
                                <BurstVideo
                                    src={src}
                                    alt={`Hero Animation ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
            </motion.div>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
                <button
                    onClick={scrollPrev}
                    className="flex items-center justify-center text-white/40 hover:text-white transition-all pointer-events-auto active:scale-90 group p-4"
                >
                    <ChevronLeft className="w-12 h-12 stroke-[1.5px] group-hover:-translate-x-1 transition-transform opacity-30" />
                </button>
                <button
                    onClick={scrollNext}
                    className="flex items-center justify-center text-white/40 hover:text-white transition-all pointer-events-auto active:scale-90 group p-4"
                >
                    <ChevronRight className="w-12 h-12 stroke-[1.5px] group-hover:translate-x-1 transition-transform opacity-30" />
                </button>
            </div>

            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 text-center px-4 pointer-events-none"
            >
                <h1 className="text-6xl md:text-[12rem] font-black tracking-tighter leading-none text-white drop-shadow-2xl">
                    FEEL THE <br />
                    <span className="text-transparent border-t-white border-b-white bg-clip-text bg-linear-to-b from-white to-white/20">
                        BURST
                    </span>
                </h1>
                <p className="mt-8 text-sm md:text-base font-medium tracking-[0.5em] text-white/60 uppercase">
                    Premium High-Energy Refreshment
                </p>
            </motion.div>

            {/* Dots navigation */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {HERO_VIDEOS.map((src, index) => (
                    <button
                        key={src}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={cn(
                            "w-1.5 h-1.5 rounded-full transition-all duration-300",
                            selectedIndex === index ? "bg-white w-4" : "bg-white/20 hover:bg-white/40"
                        )}
                    />
                ))}
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-linear-to-b from-white to-transparent animate-bounce" />
                <span className="text-[10px] tracking-widest text-white/40 uppercase">Scroll</span>
            </div>
        </section>
    );
};
