import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ShopItem from './ShopItem';

const mockData = [
  {
    id: 1,
    category: 'Remixes & Mashups',
    title: 'KATSEYE - Gameboy (HeArt ♡ Amapiano Remix)',
    date: 'April 18, 2026',
    description: [
      '[114 BPM // G# MIN]',
      'Use the audio player above to listen to the preview.',
      'DJs: Download the uncompressed Intro Version WAV and High Quality MP3 in the attached .zip folder below!'
    ],
    imageUrl: '/images/music/gameboy_cover.png',
    audioUrl: '/audio/gameboy_audio.mp3',
    downloadUrl: 'https://heartlightz.lemonsqueezy.com/checkout/buy/1a1f1953-4545-4cce-a235-cdf9e49d3588'
  },
  /*{
    id: 2,
    category: 'Beats',
    title: 'Etherial Trap Beat - "Starlight"',
    date: 'March 10, 2026',
    description: [
      '[140 BPM // C MIN]',
      'Exclusive rights and stems available.',
      'Perfect for late-night vibes.'
    ],
    imageUrl: 'https://placehold.co/400x400/1a1a1a/FCDFB9?text=Starlight+Beat',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    downloadUrl: 'https://lemonsqueezy.com/checkout/test2'
  },
  {
    id: 3,
    category: 'Meditations',
    title: '432Hz Deep Healing Alignment',
    date: 'January 5, 2026',
    description: [
      '30-minute guided meditation track.',
      'Tuned to 432Hz for cellular healing.',
      'High quality WAV download.'
    ],
    imageUrl: 'https://placehold.co/400x400/1a1a1a/FCDFB9?text=432Hz+Heal',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    downloadUrl: 'https://lemonsqueezy.com/checkout/test3'
  },*/
  {
    id: 4,
    category: 'Remixes & Mashups',
    title: 'KATSEYE - Pinky Up (HeArt ♡ Brazilian Phonk Remix)',
    date: 'April 14, 2026',
    description: [
      '[133 BPM // Bb MIN]',
      'Use the audio player above to listen to the preview.',
      'DJs: Download the uncompressed Intro Version WAV and High Quality MP3 in the attached .zip folder below!'
    ],
    imageUrl: '/images/music/pinkyup_cover.png',
    audioUrl: '/audio/pinkyup_audio.mp3',
    downloadUrl: 'https://heartlightz.lemonsqueezy.com/checkout/buy/c0e3ef31-588f-49b0-ba70-b83d28ac5d08'
  }
];

const categories = ['All', 'Remixes & Mashups', 'Beats', 'Meditations', 'Sample Packs'];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      tl.fromTo('.shop-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.1 }
      )
        .fromTo('.shop-tab',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1 },
          "-=0.8"
        )
        .fromTo('.shop-item',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]); // Re-run animation when category changes to animate newly filtered items

  const filteredItems = activeCategory === 'All'
    ? mockData
    : mockData.filter(item => item.category === activeCategory);

  return (
    <section ref={containerRef} className="w-full min-h-screen py-12 px-4 md:px-8 max-w-6xl mx-auto pb-32">
      <div className="shop-header opacity-0 mb-16 text-center bg-black/50 p-8 frame-outset max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-3d-lg mb-6 tracking-wider">Shop</h1>
        <p className="text-[#FCDFB9] text-sm md:text-base tracking-widest uppercase font-bold">
          Exclusive Downloads & Premium Audio
        </p>
      </div>

      {/* File Tabs Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b-[6px] border-[#94150D] [border-style:ridge] pb-[2px] items-end justify-center md:justify-start px-2 mt-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                shop-tab opacity-0
                px-6 py-3 font-bold tracking-widest uppercase text-sm transition-none
                border-t-[6px] border-l-[6px] border-r-[6px] 
                ${isActive
                  ? 'bg-[#1a1a1a] border-[#94150D] text-white [border-style:outset] -mb-[8px] pb-5 z-10 relative shadow-[0_-4px_10px_rgba(0,0,0,0.5)]'
                  : 'bg-black border-[#525252] text-[#888] hover:text-[#FCDFB9] hover:bg-[#111] [border-style:ridge] -mb-[2px] opacity-80 hover:opacity-100'}
              `}
              style={isActive ? { borderBottom: '6px solid #1a1a1a' } : {}}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Shop Items Grid/List */}
      <div className="space-y-12">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="shop-item opacity-0">
              <ShopItem {...item} />
            </div>
          ))
        ) : (
          <div className="shop-item opacity-0 text-center py-16 frame-inset bg-black">
            <p className="text-[#FCDFB9] font-bold tracking-widest uppercase text-lg">No items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
