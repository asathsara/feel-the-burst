"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BurstVideo } from "./ui/burst-video";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <BurstVideo
                    src="https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/orange.webp"
                    alt="Orange Burst Background"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 text-center px-4"
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

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-linear-to-b from-white to-transparent animate-bounce" />
                <span className="text-[10px] tracking-widest text-white/40 uppercase">Scroll</span>
            </div>
        </section>
    );
};
