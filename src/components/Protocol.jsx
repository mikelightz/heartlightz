import { ScanEye, Dna, AudioWaveform } from 'lucide-react';

const Protocol = () => {
    const steps = [
        {
            num: "01",
            title: "Acoustic Scan",
            desc: "An initial diagnostic of your internal rhythms. We analyze your baseline frequency to determine harmonic deficiencies.",
            icon: <ScanEye className="w-12 h-12 text-[#94150D]" />
        },
        {
            num: "02",
            title: "Synthesis & Injection",
            desc: "Custom production of Solfeggio frequencies injected directly into your daily routine via our secure auditory pipeline.",
            icon: <Dna className="w-12 h-12 text-[#FCDFB9]" />
        },
        {
            num: "03",
            title: "Resonance Stabilization",
            desc: "Continuous monitoring to ensure long-term nervous system alignment. The protocol is permanent.",
            icon: <AudioWaveform className="w-12 h-12 text-[#BB2417]" />
        }
    ];

    return (
        <section className="py-24 relative bg-transparent" id="protocol">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-[#FCDFB9] font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-4 font-bold">
                            <span className="w-12 h-[3px] bg-[#94150D]"></span>
                            Methodology
                        </h2>
                        <h3 className="font-serif text-4xl md:text-5xl text-[#94150D] font-bold text-3d-md">
                            The Protocol
                        </h3>
                    </div>
                    <p className="text-[#525252] text-sm max-w-sm font-mono leading-relaxed">
                        Strict adherence to the 3-phase auditory calibration sequence guarantees maximum efficacy.
                    </p>
                </div>

                <div className="space-y-6">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="sticky top-24 bg-black border-[6px] border-[#94150D] [border-style:outset] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 transition-none shadow-[4px_4px_0px_#000]"
                            style={{ zIndex: idx + 10 }}
                        >
                            <div className="flex-shrink-0">
                                <span className="text-6xl md:text-8xl font-serif text-[#222] font-black tracking-tighter leading-none">
                                    {step.num}
                                </span>
                                <div className="absolute top-12 left-12 md:top-16 md:left-16">
                                    {step.icon}
                                </div>
                            </div>

                            <div className="flex-grow">
                                <h4 className="text-2xl md:text-3xl font-serif text-[#F0CCAA] mb-4">
                                    {step.title}
                                </h4>
                                <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-2xl">
                                    {step.desc}
                                </p>
                            </div>

                            <div className="hidden lg:block w-32 h-[1px] bg-gradient-to-r from-[#94150D] to-transparent"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Protocol;
