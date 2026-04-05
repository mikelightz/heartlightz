import { useEffect } from 'react';
import { Activity, RadioReceiver, Zap } from 'lucide-react';
import { getCalApi } from "@calcom/embed-react";

const Features = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        })();
    }, []);
    const cards = [
        {
            title: "Custom Gigs",
            description: "Algorithms tracking internal rhythms to output corresponding ambient structures.",
            icon: <Activity className="w-8 h-8 text-[#94150D]" />,
            color: "border-[#94150D]",
            link: "https://www.fiverr.com/medwjr?source=gig_page"
        },
        {
            title: "Journal",
            description: "Direct signals translated into mindful reflections and actionable sonic therapies.",
            icon: <Zap className="w-8 h-8 text-[#FCDFB9]" />,
            color: "border-[#FCDFB9]",
            link: "https://heartlightz.substack.com/"
        },
        {
            title: "1 : on : 1 Sessions",
            description: "Rhythmic synchronization sessions booked immediately into your neural calendar.",
            icon: <RadioReceiver className="w-8 h-8 text-[#BB2417]" />,
            color: "border-[#BB2417]",
            calLink: "heartlightz/30min",
            calNamespace: "30min"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-transparent" id="features">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="mb-20">
                    <h2 className="text-[#FCDFB9] font-mono text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-4 font-bold">
                        <span className="w-12 h-[3px] bg-[#94150D]"></span>
                        System Modules
                    </h2>
                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold max-w-2xl leading-tight">
                        Fresh Tools for
                        <br />
                        <span className="text-[#94150D] text-3d-md">Mental Wellness</span>.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => {
                        const isCalTrigger = !!card.calLink;
                        const CardWrapper = card.link ? 'a' : (isCalTrigger ? 'button' : 'div');

                        let wrapperProps = {};
                        if (card.link) {
                            wrapperProps = { href: card.link, target: "_blank", rel: "noopener noreferrer" };
                        } else if (isCalTrigger) {
                            wrapperProps = {
                                "data-cal-namespace": card.calNamespace,
                                "data-cal-link": card.calLink,
                                "data-cal-config": '{"layout":"month_view"}'
                            };
                        }

                        return (
                            <CardWrapper
                                key={index}
                                {...wrapperProps}
                                className={`block text-left w-full p-8 bg-[#0a0a0a] border-[4px] ${card.color} [border-style:outset] relative overflow-hidden shadow-[4px_4px_0px_#000] hover:[border-style:inset] hover:bg-[#141414] active:shadow-[1px_1px_0px_#000] transition-none cursor-pointer group`}
                            >
                                <div className="mb-6 p-2 bg-black inline-block border-[4px] border-[#1a1a1a] [border-style:inset] group-hover:border-[#525252]">
                                    {card.icon}
                                </div>

                                <h4 className="text-xl text-[#F0CCAA] font-bold mb-4 font-serif tracking-wide text-3d">
                                    {card.title}
                                </h4>

                                <p className="text-white font-bold text-sm leading-relaxed mb-8">
                                    {card.description}
                                </p>

                                <hr className="border-[2px] border-[#94150D] [border-style:ridge] mb-4 w-full" />

                                <span className="absolute bottom-6 right-6 font-mono text-[10px] text-[#525252] tracking-widest group-hover:text-[#FCDFB9]">
                                    MOD-0{index + 1}
                                </span>
                            </CardWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
