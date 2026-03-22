import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 70%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="py-32 relative flex items-center justify-center min-h-[70vh] border-y border-white/5 bg-transparent"
            id="philosophy"
        >
            <div className="container mx-auto px-6 max-w-5xl text-center relative z-10 border-[6px] border-[#94150D] [border-style:inset] shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] p-12 bg-black">

                <span className="block text-[#FCDFB9] font-mono text-xs uppercase tracking-[0.3em] font-bold mb-8">
                    The Manifesto
                </span>

                <h2
                    ref={textRef}
                    className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-bold"
                >
                    We believe sound is a physical <span className="text-[#94150D] text-3d-lg">architecture.</span><br /><br />
                    By tuning specific frequencies, we can <span className="text-[#FCDFB9] underline decoration-[#BB2417]">restructure</span> the nervous system, rewriting distress into absolute <span className="text-[#F0CCAA] text-3d-lg">clarity.</span>
                </h2>

            </div>
        </section>
    );
};

export default Philosophy;
