import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CheckCircle2, Ban, Music2, Video, Mic2, FileAudio, FileBadge2 } from 'lucide-react';

const Licensing = ({ setCurrentPage }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      tl.fromTo('.licensing-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.1 }
      )
        .fromTo('.licensing-section',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 },
          "-=0.8"
        )
        .fromTo('.lease-card',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15 },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const leases = [
    {
      name: "Basic Lease",
      price: "$29.99",
      description: "The entry point for independent demos and single releases.",
      deliverable: "High-Quality 320kbps MP3",
      streams: "Up to 50,000",
      videos: "1",
      live: "Non-Profit / Promotional Only",
      publishing: "50/50 Writer's Split",
      contentId: "🚫 Not Allowed"
    },
    {
      name: "Standard Lease",
      price: "$49.99",
      description: "The industry standard for uncompressed, high-fidelity vocal tracking.",
      deliverable: "Uncompressed 24-Bit WAV",
      streams: "Up to 500,000",
      videos: "2",
      live: "Permitted (Up to $1,000 profit)",
      publishing: "50/50 Writer's Split",
      contentId: "🚫 Not Allowed"
    },
    {
      name: "Premium Lease",
      price: "$99.99",
      description: "Complete mix control. For professional engineers who need to manipulate the 808s, log drums, and melodies individually.",
      deliverable: "24-Bit WAV + Individual Track Stems",
      streams: "Up to 1,000,000",
      videos: "3",
      live: "Permitted (Up to $5,000 profit)",
      publishing: "50/50 Writer's Split",
      contentId: "🚫 Not Allowed"
    },
    {
      name: "Unlimited Lease",
      price: "$149.99",
      description: "Absolute peace of mind. No streaming caps, no take-down notices.",
      deliverable: "24-Bit WAV + Individual Track Stems",
      streams: "Unlimited",
      videos: "Unlimited",
      live: "Unlimited",
      publishing: "50/50 Writer's Split",
      contentId: "🚫 Not Allowed"
    },
    {
      name: "Exclusive Rights",
      price: "Make an Offer",
      subprice: "(Starting at $500)",
      description: "Total ownership. The instrumental is permanently removed from the store.",
      deliverable: "24-Bit WAV + Individual Track Stems + Exclusive Contract",
      streams: "Unlimited",
      videos: "Unlimited",
      live: "Unlimited",
      publishing: "50/50 Writer's Split (Unless Negotiated)",
      contentId: "✅ Allowed"
    }
  ];

  return (
    <section id="licensing" ref={containerRef} className="p-4 md:p-8 flex flex-col gap-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="licensing-header opacity-0 text-center mt-12 mb-8 bg-black/50 p-6 frame-outset">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wider text-3d mb-4">
          Licensing & Pricing Guide
        </h1>
        <p className="text-[#FCDFB9] text-lg max-w-3xl mx-auto font-bold">
          Select the license that fits your project. All instrumentals and sound design assets are 100% originally crafted by HeART Lightz.
        </p>
      </div>

      {/* Artist Leases Section */}
      <div className="licensing-section opacity-0 flex flex-col gap-6">
        <div className="bg-[#94150D]/20 p-4 border-[4px] border-[#94150D] [border-style:ridge]">
          <h2 className="font-serif text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Music2 className="text-[#FCDFB9]" />
            1. Artist Leases (Instrumentals & Beats)
          </h2>
          <p className="text-[#FCDFB9]">
            For recording artists, rappers, and singers looking to release original songs on Spotify, Apple Music, and other DSPs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {leases.map((lease, index) => (
            <div key={index} className="lease-card opacity-0 bg-black frame-outset p-6 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="border-b-[4px] border-[#94150D] [border-style:ridge] pb-4">
                <h3 className="font-serif text-xl font-bold text-[#FCDFB9] mb-2">{lease.name}</h3>
                <div className="text-3xl font-bold text-white group-hover:text-[#94150D] transition-colors">{lease.price}</div>
                {lease.subprice && <div className="text-sm text-gray-400 mt-1">{lease.subprice}</div>}
              </div>

              <p className="text-sm text-gray-300 min-h-[60px] italic">
                {lease.description}
              </p>

              <ul className="flex flex-col gap-3 text-sm flex-grow">
                <li className="flex flex-col gap-1 border-b border-gray-800 pb-2">
                  <span className="text-gray-400 font-bold uppercase text-xs">Deliverable:</span>
                  <span className="text-[#FCDFB9]">{lease.deliverable}</span>
                </li>
                <li className="flex flex-col gap-1 border-b border-gray-800 pb-2">
                  <span className="text-gray-400 font-bold uppercase text-xs">Audio Streams:</span>
                  <span className="text-white">{lease.streams}</span>
                </li>
                <li className="flex flex-col gap-1 border-b border-gray-800 pb-2">
                  <span className="text-gray-400 font-bold uppercase text-xs">Music Videos:</span>
                  <span className="text-white">{lease.videos}</span>
                </li>
                <li className="flex flex-col gap-1 border-b border-gray-800 pb-2">
                  <span className="text-gray-400 font-bold uppercase text-xs">Live Performances:</span>
                  <span className="text-white">{lease.live}</span>
                </li>
                <li className="flex flex-col gap-1 border-b border-gray-800 pb-2">
                  <span className="text-gray-400 font-bold uppercase text-xs">Publishing:</span>
                  <span className="text-white">{lease.publishing}</span>
                </li>
                <li className="flex flex-col gap-1 pt-2">
                  <span className="text-gray-400 font-bold uppercase text-xs">Content ID:</span>
                  <span className="font-bold">{lease.contentId}</span>
                </li>
              </ul>

              <button
                onClick={() => {
                  setCurrentPage('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary mt-4 w-full"
              >
                Go to Shop
              </button>
            </div>
          ))}
        </div>

        {/* Important Rules */}
        <div className="bg-[#141414] frame-inset p-6 mt-4">
          <h3 className="font-serif text-2xl font-bold text-[#FCDFB9] mb-4">Important Beat Licensing Rules:</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-start">
              <div className="bg-[#94150D] p-1 rounded-sm shrink-0">
                <FileBadge2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <strong className="text-white">Upgrades:</strong> You can upgrade your lease at any time before hitting your streaming cap by paying the difference. Just contact{' '}
                <button 
                  onClick={() => {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#94150D] hover:text-[#FCDFB9] underline underline-offset-4 font-bold transition-colors cursor-pointer"
                >
                  support
                </button>.
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-[#94150D] p-1 rounded-sm shrink-0">
                <Ban className="w-5 h-5 text-white" />
              </div>
              <div>
                <strong className="text-white">Content ID:</strong> Unless you purchase Exclusive Rights, you may not register your song with YouTube Content ID. This protects all artists using non-exclusive leases.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Assets Section */}
      <div className="licensing-section opacity-0 flex flex-col gap-6 mt-12">
        <div className="bg-[#94150D]/20 p-4 border-[4px] border-[#94150D] [border-style:ridge]">
          <h2 className="font-serif text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <FileAudio className="text-[#FCDFB9]" />
            2. Creator Assets (Sample Packs, Presets & Soundscapes)
          </h2>
          <p className="text-[#FCDFB9]">
            For music producers, video editors, wellness facilitators, and content creators.
          </p>
        </div>

        <div className="bg-black frame-outset p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#94150D] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FCDFB9] opacity-5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col gap-8">
            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4 text-3d-sm">Standard Royalty-Free License</h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl border-l-[4px] border-[#94150D] pl-4">
                All utility products—including Drum Kits, Custom Serum Wavetable Presets, and Meditative Ambient Soundscapes—are sold under a flat-fee, royalty-free license.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1a1a1a] p-6 border-[2px] border-gray-800 hover:border-[#94150D] transition-colors flex flex-col gap-3">
                <CheckCircle2 className="text-[#4ade80] w-8 h-8" />
                <h4 className="font-bold text-white text-lg">Use in Commercial Work</h4>
                <p className="text-sm text-gray-400">
                  Drop our drum one-shots into your beats or use our ambient visualizers in your monetized YouTube videos, podcasts, and client projects.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 border-[2px] border-gray-800 hover:border-[#94150D] transition-colors flex flex-col gap-3">
                <CheckCircle2 className="text-[#4ade80] w-8 h-8" />
                <h4 className="font-bold text-white text-lg">Keep 100% of Your Royalties</h4>
                <p className="text-sm text-gray-400">
                  No streaming caps, no 50/50 publishing splits, and no backend paperwork. You pay once, you use it forever.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 border-[2px] border-gray-800 hover:border-[#94150D] transition-colors flex flex-col gap-3">
                <Ban className="text-[#f87171] w-8 h-8" />
                <h4 className="font-bold text-white text-lg">No Redistribution</h4>
                <p className="text-sm text-gray-400">
                  You cannot isolate our individual sounds, stems, or presets and resell them as your own sample pack or stock audio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Terms Link */}
      <div className="licensing-section opacity-0 mt-8 text-center text-sm text-gray-500 max-w-2xl mx-auto px-4 pb-12">
        <p>
          By purchasing any product from HeART Lightz, you agree to our full, legally binding{' '}
          <button
            onClick={() => {
              setCurrentPage('tos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[#94150D] hover:text-[#FCDFB9] underline underline-offset-4 font-bold transition-colors cursor-pointer"
          >
            Terms of Service
          </button>
          {' '}and our strictly enforced All Sales Final refund policy.
        </p>
      </div>

    </section>
  );
};

export default Licensing;
