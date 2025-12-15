import React from "react";

// 1. Define what a "Link" looks like so TypeScript is happy
interface LinkItem {
  title: string;
  subtitle?: string; // The '?' means this is optional
  url: string;
  featured: boolean;
}

interface SocialItem {
  name: string;
  url: string;
  icon: string;
}

// 2. Your Data Arrays (Now strictly typed)
const links: LinkItem[] = [
  {
    title: "Download 'SZA x Menos é Mais'",
    subtitle: "Free Edit • Mp3 Download",
    url: "https://hypeddit.com/your-link", // UPDATE THIS
    featured: true,
  },
  {
    title: "Visuals for Your Music",
    subtitle: "Custom Audio-Reactive Content for Artists",
    url: "https://forms.google.com/your-form", // UPDATE THIS
    featured: true,
  },
  {
    title: "Meditation Soundscapes",
    subtitle: "Stream on Spotify",
    url: "#",
    featured: false,
  },
];

const socials: SocialItem[] = [
  { name: "TikTok", url: "#", icon: "TT" },
  { name: "Instagram", url: "#", icon: "IG" },
  { name: "YouTube", url: "#", icon: "YT" },
];

export default function LinkHub() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-neutral-950 text-white overflow-hidden font-sans">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/80" />
        {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
           <source src="/sky-video.mp4" type="video/mp4" />
        </video> */}
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-md p-6 flex flex-col items-center">
        {/* PROFILE HEADER */}
        <div className="mb-8 text-center">
          {/* Make sure this image exists in your /public folder! */}
          <img
            src="/public/avi.jpg"
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-2 border-white/10 shadow-xl object-cover mb-4"
          />
          <h1 className="text-2xl font-bold tracking-tight">Your Name</h1>
          <p className="text-neutral-400 text-sm mt-1">
            Producer | Editor | Visuals
          </p>
        </div>

        {/* LINK STACK */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                block w-full p-4 rounded-xl border transition-all duration-200
                backdrop-blur-md bg-white/5 
                hover:scale-[1.02] hover:bg-white/10 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]
                ${link.featured ? "border-purple-500/50" : "border-white/10"}
              `}
            >
              <span className="block font-semibold text-lg">{link.title}</span>
              {link.subtitle && (
                <span className="block text-sm text-neutral-400 mt-1">
                  {link.subtitle}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* SOCIAL ROW */}
        <div className="mt-12 flex gap-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-neutral-500 hover:text-white text-xl transition-colors font-bold"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
