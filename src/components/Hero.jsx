import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);
    const title1Ref = useRef(null);
    const title2Ref = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

            tl.fromTo(title1Ref.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, delay: 0.2 }
            )
                .fromTo(title2Ref.current,
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1 },
                    "-=1.2"
                )
                .fromTo(textRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1 },
                    "-=1"
                )
                .fromTo('.hero-btn',
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, stagger: 0.1 },
                    "-=1"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background Architecture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-transparent"></div>
                {/* Subtle grid lines */}
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 pb-32 flex flex-col items-center text-center">

                {/* Monospaced Top Label */}
                <div className="hero-btn opacity-0 inline-flex items-center gap-2 px-4 py-1.5 bg-black mb-12 border-[4px] border-[#94150D] [border-style:outset] shadow-[4px_4px_0px_#000]">
                    <span className="w-3 h-3 bg-[#BB2417] animate-pulse rounded-none"></span>
                    <span className="text-[#FCDFB9] font-mono text-xs tracking-widest uppercase font-bold">System Initialized</span>
                </div>

                {/* Massive Typography */}
                <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white leading-[0.9] mb-4 overflow-hidden">
                    <span ref={title1Ref} className="block text-[#F0CCAA] text-3d mb-7">Beats By HeArt</span>
                    {/*<span ref={title2Ref} className="block italic text-[#94150D] text-3d drop-shadow-[0_0_15px_rgba(201,138,134,0.4)]">Everything from the Heart.</span> */}
                </h1>

                <p ref={textRef} className="mt-8 max-w-2xl text-white text-lg md:text-xl font-bold tracking-wide leading-relaxed bg-black/80 p-6 border-[4px] border-[#94150D] [border-style:inset] shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                    Meditative sound designs, exploration in art healing, connection, and authenticity.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                    <a href="#portfolio" className="hero-btn opacity-0 btn-primary">
                        Explore Frequencies
                    </a>
                    <a href="#subscribe" className="hero-btn opacity-0 btn-outline">
                        Join the Signal
                    </a>
                </div>

            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hero-btn opacity-0">
                <ArrowDown className="text-[#525252] w-6 h-6 hover:text-[#FCDFB9] transition-colors" />
            </div>

        </section>
    );
};

export default Hero;
