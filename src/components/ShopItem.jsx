import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';

const ShopItem = ({ title, date, description, imageUrl, audioUrl, downloadUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Pause all other audio elements on the page before playing this one
        document.querySelectorAll('audio').forEach(audioEl => {
          if (audioEl !== audioRef.current && !audioEl.paused) {
            audioEl.pause();
          }
        });
        audioRef.current.play();
      }
    }
  };

  const skip = (amount) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };

  return (
    <div className="bg-[#1a1a1a] frame-outset mb-8 flex flex-col w-full max-w-3xl mx-auto">
      {/* Media Header */}
      <div className="p-4 border-b-4 border-[#94150D] [border-style:ridge] bg-black flex flex-col md:flex-row gap-6 items-center md:items-stretch">
        {imageUrl && (
          <div className="flex shrink-0">
            <img
              src={imageUrl}
              alt={title}
              className="w-40 h-40 md:w-48 md:h-full object-cover border-4 border-[#94150D] [border-style:inset]"
            />
          </div>
        )}
        {audioUrl && (
          <div className="flex-1 w-full bg-[#050505] p-5 border-4 border-[#94150D] [border-style:outset] mt-4 md:mt-0 flex flex-col justify-between">
            <audio ref={audioRef} src={audioUrl} preload="metadata" />

            {/* Visualizer & Meta Box */}
            <div className="bg-[#0a0a0a] border border-white/5 p-4 mb-6 relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
              <span className="absolute top-3 right-3 text-[#94150D] font-mono text-[10px] animate-pulse font-bold tracking-widest">
                {isPlaying ? 'PLAYING' : 'IDLE'}
              </span>
              <p className="font-mono text-xs text-[#525252] mb-1">Audio Preview</p>
              <h4 className="font-bold text-[#FCDFB9] text-lg mb-6 truncate">{title}</h4>

              {/* Visualizer Mock */}
              <div className="h-8 flex items-end gap-[3px] opacity-60">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 bg-[#BB2417] transition-all duration-75 ease-in-out ${isPlaying ? 'animate-pulse' : 'h-1'}`}
                    style={{
                      height: isPlaying ? `${Math.max(15, Math.random() * 100)}%` : '4px',
                      opacity: isPlaying ? Math.random() * 0.5 + 0.5 : 0.3
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5 justify-center md:justify-start px-2">
                <button onClick={() => skip(-15)} className="text-[#a3a3a3] hover:text-white transition-colors" title="Rewind 15s">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-[#94150D] flex items-center justify-center text-[#FCDFB9] hover:bg-[#BB2417] hover:scale-105 transition-all shadow-[0_0_15px_rgba(148,21,13,0.4)]"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                </button>
                <button onClick={() => skip(15)} className="text-[#a3a3a3] hover:text-white transition-colors" title="Forward 15s">
                  <SkipForward className="w-5 h-5" />
                </button>

                <div className="ml-auto hidden sm:flex items-center gap-2 text-[#525252]">
                  <Volume2 className="w-4 h-4" />
                  <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-[#525252]"></div>
                  </div>
                </div>
              </div>

              {/* Scrubber */}
              <div
                className="h-1.5 bg-white/5 w-full relative group cursor-pointer border border-white/5"
                onClick={(e) => {
                  if (audioRef.current && audioRef.current.duration) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const percentage = x / rect.width;
                    audioRef.current.currentTime = percentage * audioRef.current.duration;
                  }
                }}
              >
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#94150D] to-[#BB2417] transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FCDFB9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(252,223,185,0.8)]"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-3d-sm mb-2 leading-tight">{title}</h2>
        <p className="text-[#a3a3a3] text-sm mb-6 tracking-wider uppercase font-bold">{date}</p>

        <div className="text-[#e5e5e5] mb-8 space-y-3 font-mono text-sm md:text-base leading-relaxed bg-black/30 p-4 border-2 border-[#525252] [border-style:inset]">
          {description.map((desc, idx) => (
            <p key={idx} className="flex items-start gap-3">
              <span className="text-[#94150D] font-bold">▶</span>
              <span>{desc}</span>
            </p>
          ))}
        </div>

        {downloadUrl && (
          <div className="mt-8 border-t-4 border-dashed border-[#525252] pt-8 flex flex-col items-center">
            <p className="text-sm text-center mb-4 text-[#FCDFB9] font-bold tracking-widest uppercase">
              Secure Your Copy
            </p>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full md:w-auto text-center flex items-center justify-center gap-3 py-4 px-8 text-lg hover:brightness-110 active:brightness-90 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
              Download Free
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopItem;
