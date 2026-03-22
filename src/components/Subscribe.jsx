import { ArrowRight, Mail } from 'lucide-react';

const Subscribe = () => {
    return (
        <section className="py-24 md:py-32 relative border-t border-white/5 bg-transparent" id="subscribe">
            {/* Decorative lines */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/5 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col md:flex-row items-center gap-16">

                <div className="w-full md:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#94150D]"></span>
                        <span className="text-white font-mono text-[10px] uppercase tracking-widest">Phase 03 Active</span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
                        Join the <span className="text-[#94150D] text-3d-md">Signal.</span>
                    </h2>

                    <p className="text-white font-bold text-lg leading-relaxed mb-8 border-l-[3px] border-[#94150D] pl-6">
                        Subscribe to receive new custom healing frequency meditations directly to your terminal. Delivered securely <strong className="text-white font-normal">every Monday</strong>.
                    </p>

                    <div className="flex items-center gap-8 font-mono text-xs text-[#525252] uppercase tracking-[0.2em]">
                        <span>No SPAM</span>
                        <span>//</span>
                        <span>Unsubscribe Anytime</span>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="bg-black p-8 md:p-10 border-[6px] border-[#94150D] [border-style:outset] relative group shadow-[4px_4px_0px_#000]">

                        <div className="relative">
                            <div className="mb-8 p-4 bg-black inline-flex border-[4px] border-[#BB2417] [border-style:inset]">
                                <Mail className="w-6 h-6 text-[#FCDFB9]" />
                            </div>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="email" className="block text-[#FCDFB9] font-mono text-xs tracking-widest uppercase mb-3 font-bold">
                                        Transmission Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="ENTER EMAIL . . ."
                                        className="w-full bg-black border-[4px] border-white/20 [border-style:inset] p-4 text-white font-mono placeholder:text-[#525252] focus:outline-none focus:border-[#94150D] transition-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full flex justify-between items-center transition-all duration-300 group/btn"
                                >
                                    <span>Initiate Sequence</span>
                                    <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </form>

                            <div className="mt-6 flex items-start gap-3">
                                <input type="checkbox" id="consent" className="mt-1 accent-[#94150D]" />
                                <label htmlFor="consent" className="text-white text-xs font-mono leading-relaxed font-bold">
                                    I consent to the integration of HeArt Lightz frequencies into my internal databanks.
                                </label>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Subscribe;
