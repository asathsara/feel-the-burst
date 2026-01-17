"use client";

import { cn } from "@/lib/utils";

interface BurstVideoProps {
    src: string;
    alt: string;
    className?: string;
}

export const BurstVideo = ({ src, alt, className }: BurstVideoProps) => {
    return (
        <div className={cn("relative w-full h-full overflow-hidden", className)}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                // These mimic common video attributes if it were a video
                loading="lazy"
                draggable={false}
            />
        </div>
    );
};
