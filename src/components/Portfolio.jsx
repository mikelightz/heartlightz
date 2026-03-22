import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, HardDrive } from 'lucide-react';

const Portfolio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [progress, setProgress] = useState(0);

    // Dummy audio data for portfolio structure
    const tracks = [
        { id: 'T-01', title: 'Midnight Baseline (432Hz)', duration: '4:12', format: 'WAV' },
        { id: 'T-02', title: 'Cerebral Drift (528Hz)', duration: '6:30', format: 'MP3' },
        { id: 'T-03', title: 'Sub-Ohm Resonance', duration: '5:45', format: 'FLAC' },
    ];

    // Simulating playback progress
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const nextTrack = () => {
        setCurrentTrack((prev) => (prev + 1) % tracks.length);
        setProgress(0);
    };

    const prevTrack = () => {
        setCurrentTrack((prev) => (prev - 1 < 0 ? tracks.length - 1 : prev - 1));
        setProgress(0);
    };

    return (
        <section className="py-24 relative border-y border-white/5 bg-transparent" id="portfolio">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-[#FCDFB9] font-mono text-xs tracking-[0.3em] uppercase mb-4 font-bold">
                        Auditory Archives
                    </h2>
                    <h3 className="font-serif text-3xl md:text-5xl text-white font-bold">
                        The <span className="text-[#94150D] text-3d-md">Portfolio</span>.
                    </h3>
                </div>

                {/* The "Player" Container */}
                <div className="bg-black border-[6px] border-[#94150D] [border-style:outset] p-1 relative overflow-hidden shadow-[4px_4px_0px_#000]">
                    {/* Top Bar - Retro OS feel */}
                    <div className="bg-[#94150D] border-b-[4px] border-[#BB2417] [border-bottom-style:outset] px-4 py-2 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <HardDrive className="w-4 h-4 text-white" />
                            <span className="font-mono text-[10px] text-white tracking-widest uppercase font-bold">HD:/HeArtLightz/Media</span>
                        </div>
                        <div className="flex gap-1.5 bg-black border-[3px] border-[#525252] [border-style:inset] p-1">
                            <div className="w-2.5 h-2.5 bg-white"></div>
                            <div className="w-2.5 h-2.5 bg-white"></div>
                            <div className="w-2.5 h-2.5 bg-[#BB2417]"></div>
                        </div>
                    </div>

                    <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent">

                        {/* Left: Metadata & Controls */}
                        <div>
                            <div className="bg-[#050505] border border-white/5 p-6 mb-8 relative">
                                <span className="absolute top-2 right-2 text-[#94150D] font-mono text-[10px] animate-pulse">
                                    {isPlaying ? 'PLAYING' : 'IDLE'}
                                </span>
                                <p className="font-mono text-xs text-[#525252] mb-1">Track {tracks[currentTrack].id}</p>
                                <h4 className="font-bold text-[#FCDFB9] text-xl mb-4 truncate">{tracks[currentTrack].title}</h4>

                                {/* Visualizer Mock */}
                                <div className="h-8 flex items-end gap-1 opacity-50">
                                    {[...Array(24)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-1.5 bg-[#BB2417] transition-all duration-100 ease-in-out ${isPlaying ? 'animate-pulse' : 'h-1'}`}
                                            style={{
                                                height: isPlaying ? `${Math.max(10, Math.random() * 100)}%` : '4px',
                                                opacity: isPlaying ? Math.random() * 0.5 + 0.5 : 0.3
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center gap-6">
                                <button onClick={prevTrack} className="text-[#a3a3a3] hover:text-white transition-colors">
                                    <SkipBack className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={togglePlay}
                                    className="w-16 h-16 rounded-full bg-[#94150D] flex items-center justify-center text-[#FCDFB9] hover:bg-[#BB2417] hover:scale-105 transition-all shadow-[0_0_20px_rgba(148,21,13,0.4)]"
                                >
                                    {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                                </button>
                                <button onClick={nextTrack} className="text-[#a3a3a3] hover:text-white transition-colors">
                                    <SkipForward className="w-6 h-6" />
                                </button>
                                <div className="ml-auto flex items-center gap-2 text-[#525252]">
                                    <Volume2 className="w-4 h-4" />
                                    <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="w-2/3 h-full bg-[#525252]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Playlist */}
                        <div className="border border-white/5 bg-[#050505] p-2 h-full flex flex-col">
                            <div className="border-b border-white/5 px-4 py-2 mb-2">
                                <span className="font-mono text-[10px] text-[#BB2417] uppercase tracking-widest">Playlist.DB</span>
                            </div>
                            <div className="flex-1 overflow-y-auto pr-2 space-y-1">
                                {tracks.map((track, idx) => (
                                    <button
                                        key={track.id}
                                        onClick={() => {
                                            setCurrentTrack(idx);
                                            if (!isPlaying) setIsPlaying(true);
                                            setProgress(0);
                                        }}
                                        className={`w-full text-left px-4 py-3 flex items-center justify-between group transition-colors ${currentTrack === idx
                                            ? 'bg-[#141414] border-l-2 border-[#94150D]'
                                            : 'hover:bg-white/5 border-l-2 border-transparent'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={`font-mono text-xs ${currentTrack === idx ? 'text-[#94150D]' : 'text-[#525252]'}`}>
                                                {track.id}
                                            </span>
                                            <span className={`text-sm tracking-wide ${currentTrack === idx ? 'text-[#FCDFB9]' : 'text-[#a3a3a3] group-hover:text-white'}`}>
                                                {track.title}
                                            </span>
                                        </div>
                                        <span className="font-mono text-[10px] text-[#525252]">{track.format}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Scrubber */}
                    <div className="h-1 bg-white/5 w-full relative group cursor-pointer">
                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#94150D] to-[#BB2417] transition-all duration-1000 ease-linear"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Portfolio;
