export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <h2 className="text-xl font-black tracking-tighter text-white">BURST</h2>
                    <p className="text-sm text-white/40 mt-1">© 2024 BURST DRINK CO.</p>
                </div>

                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/60">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
                </div>

                <div className="text-xs text-white/40">
                    Designed for High Performance
                </div>
            </div>
        </footer>
    );
};
