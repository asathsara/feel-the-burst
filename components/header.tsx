"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Header = () => {

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/10 backdrop-blur-md border-b border-white/5"
        >
            <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                BURST
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-white/70">
                <Link href="#flavors" className="hover:text-white transition-colors">FLAVORS</Link>
                <Link href="#about" className="hover:text-white transition-colors">ABOUT</Link>
                <Link href="#story" className="hover:text-white transition-colors">STORY</Link>
            </nav>

            <button className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all rounded-full">
                Buy Now
            </button>
        </motion.header>
    );
};
