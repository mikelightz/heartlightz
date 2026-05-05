import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Settings } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      tl.fromTo('.about-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.1 }
      )
        .fromTo('.about-section',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="p-4 md:p-8 flex flex-col gap-8 max-w-7xl mx-auto mb-24">
      {/* Header */}
      <div className="about-header opacity-0 text-center mt-12 mb-8 bg-black/50 p-6 frame-outset">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wider text-3d mb-4">
          About & Contact
        </h1>
        <p className="text-[#FCDFB9] text-lg max-w-3xl mx-auto font-bold uppercase tracking-widest">
          The Vision Behind The Sound
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - The Vision */}
        <div className="about-section opacity-0 flex flex-col gap-6">
          <div className="bg-[#94150D]/20 p-4 border-[4px] border-[#94150D] [border-style:ridge]">
            <h2 className="font-serif text-3xl font-bold text-white mb-2">
              The Vision
            </h2>
            <p className="text-[#FCDFB9] leading-relaxed">
              HeART Lightz is a multimedia production space dedicated to high-fidelity sound design, frequency-based composition, and visual storytelling.
            </p>
          </div>

          <div className="bg-black frame-outset p-6 md:p-8 flex flex-col gap-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              My background is rooted heavily in both film and advanced music production. Every instrumental, sample pack, and synthesizer bank on this platform is custom-crafted from the ground up. The focus is always on analog warmth, deliberate intention, and club-ready utility. There is no AI generation and no recycled stock filler—just raw, detailed sound design engineered to cut through a mix.
            </p>
            <div className="border-l-[4px] border-[#94150D] pl-4 py-2 mt-4 bg-[#141414]">
              <p className="text-[#FCDFB9] italic font-bold">
                This storefront exists to provide independent artists, producers, and creators with the exact same uncompromising audio tools I use in my own daily workflow.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image & Contact */}
        <div className="about-section opacity-0 flex flex-col gap-6">
          {/* Tape-saturated Studio Image */}
          <div className="frame-outset overflow-hidden bg-black aspect-video lg:aspect-auto lg:flex-1 relative">
            {/* Vintage CRT Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-40"></div>
            <img
              src="/images/12.jpg"
              alt="Analog Studio Workspace"
              className="w-full h-full object-cover sepia-[.3] contrast-125 saturate-[.8] brightness-90 hover:sepia-0 hover:contrast-100 hover:saturate-100 transition-all duration-700"
            />
          </div>

          {/* Contact & Inquiries */}
          <div className="bg-[#141414] frame-inset p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-[#FCDFB9] mb-4 flex items-center gap-3">
              <Mail className="text-[#94150D]" />
              Contact & Inquiries
            </h2>
            <p className="text-gray-300 mb-6">
              Whether you are looking to upgrade an existing beat lease, inquire about a custom sound design commission, or need technical support with a digital download, my inbox is open.
            </p>

            <div className="flex flex-col gap-4">
              <div className="bg-black p-4 border border-gray-800 hover:border-[#94150D] transition-colors">
                <span className="text-gray-500 text-sm font-bold uppercase block mb-1">General & Support</span>
                <a href="mailto:heartlightzstudio@gmail.com" className="text-white font-bold hover:text-[#94150D] transition-colors text-lg break-all">
                  heartlightzstudio@gmail.com
                </a>
              </div>

              <div className="bg-black p-4 border border-gray-800 hover:border-[#94150D] transition-colors">
                <span className="text-gray-500 text-sm font-bold uppercase block mb-1 flex items-center gap-2">
                  <Settings className="w-4 h-4" /> Custom Commissions
                </span>
                <p className="text-sm text-gray-300 italic">
                  Please include your project timeline and specific sonic references in your initial email.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-6 text-center">
              (Note: Please allow 24-48 hours for a response to all support inquiries).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
