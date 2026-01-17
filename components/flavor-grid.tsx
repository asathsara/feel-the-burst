"use client";

import { motion } from "framer-motion";
import { BurstVideo } from "./ui/burst-video";
import { cn } from "@/lib/utils";

interface FlavorProps {
    name: string;
    tagline: string;
    src: string;
    color: string;
    glowColor: string;
}

const FlavorCard = ({ name, tagline, src, color, glowColor }: FlavorProps) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                boxShadow: `0 0 40px ${glowColor}`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group aspect-square md:aspect-auto md:h-125 overflow-hidden rounded-3xl bg-neutral-900"
        >
            <BurstVideo src={src} alt={name} className="w-full h-full" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={cn("text-xs font-bold uppercase tracking-widest mb-2", color)}
                >
                    {tagline}
                </motion.p>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-none">
                    {name}
                </h3>
            </div>
        </motion.div>
    );
};

export const FlavorGrid = () => {
    const flavors = [
        {
            name: "Citrus Burst",
            tagline: "Orange",
            src: "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/orange.webp",
            color: "text-orange-500",
            glowColor: "rgba(249, 115, 22, 0.4)",
        },
        {
            name: "Tropical Burst",
            tagline: "Pineapple",
            src: "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/pineapple.webp",
            color: "text-yellow-400",
            glowColor: "rgba(250, 204, 21, 0.4)",
        },
        {
            name: "Vineyard Burst",
            tagline: "Grape",
            src: "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/grapes.webp",
            color: "text-purple-500",
            glowColor: "rgba(168, 85, 247, 0.4)",
        },
        {
            name: "Summer Burst",
            tagline: "Strawberry",
            src: "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/stawberry.webp",
            color: "text-red-500",
            glowColor: "rgba(239, 68, 68, 0.4)",
        },
    ];

    return (
        <section id="flavors" className="py-24 px-6 md:px-12 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        Choose Your <span className="text-white/20">Energy</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {flavors.map((flavor) => (
                        <div key={flavor.name} className="lg:col-span-1 flex flex-col">
                            <FlavorCard {...flavor} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
