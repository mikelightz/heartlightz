import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t-[6px] border-[#94150D] [border-top-style:outset] py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-6 group inline-flex">
                            <Heart className="w-6 h-6 text-[#94150D] group-hover:text-white transition-colors duration-300" />
                            <span className="font-serif text-xl font-bold tracking-wider text-3d-sm text-[#94150D]">
                                HeArt Lightz
                            </span>
                        </a>
                        <p className="text-[#a3a3a3] text-sm leading-relaxed max-w-sm">
                            Sonic Wellness from the Heart. Meditative sound designs, exploration in art healing, connection, and authenticity.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-mono text-xs tracking-widest uppercase mb-6">Directory</h4>
                        <ul className="space-y-3">
                            {['Meditations', 'Portfolio', 'Protocol', 'Manifesto'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-[#525252] hover:text-[#C98A86] text-sm transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-mono text-xs tracking-widest uppercase mb-6">System Status</h4>
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BB2417] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#94150D]"></span>
                            </span>
                            <span className="text-[#a3a3a3] text-sm font-mono">Signal Active</span>
                        </div>
                        <p className="mt-4 text-[#525252] text-xs font-mono">
                            Freq: 432Hz / 528Hz<br />
                            Node: H-L-01
                        </p>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#525252] text-xs tracking-wider font-mono">
                        &copy; {new Date().getFullYear()} HeArt Lightz. All Frequencies Reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-[#525252] hover:text-[#FCDFB9] text-xs uppercase tracking-widest transition-colors">Twitter</a>
                        <a href="#" className="text-[#525252] hover:text-[#FCDFB9] text-xs uppercase tracking-widest transition-colors">SoundCloud</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
