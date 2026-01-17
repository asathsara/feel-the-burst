export interface Flavor {
    name: string;
    tagline: string;
    src: string;
    color: string;
    glowColor: string;
}

export const FLAVORS: Flavor[] = [
    {
        name: "Citrus Burst",
        tagline: "Orange",
        src: "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/orange_image.webp",
        color: "text-orange-500",
        glowColor: "rgba(249, 115, 22, 0.4)",
    },
    {
        name: "Tropical Burst",
        tagline: "Pineapple",
        src: "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/pineapple_image.webp",
        color: "text-yellow-400",
        glowColor: "rgba(250, 204, 21, 0.4)",
    },
    {
        name: "Vineyard Burst",
        tagline: "Grape",
        src: "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/grapes_image.webp",
        color: "text-purple-500",
        glowColor: "rgba(168, 85, 247, 0.4)",
    },
    {
        name: "Summer Burst",
        tagline: "Strawberry",
        src: "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/stawberry_image.webp",
        color: "text-red-500",
        glowColor: "rgba(239, 68, 68, 0.4)",
    },
];

export const HERO_VIDEOS = [
    "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/orange.webp",
    "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/pineapple.webp",
    "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/grapes.webp",
    "https://iqbotppurfczlvjtcoud.supabase.co/storage/v1/object/public/assets/stawberry.webp",
];
