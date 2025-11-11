import { useEffect, useState } from "react";
import { WarpBackground } from "@/components/ui/warp-background.tsx";

/* UPDATE EVENTS HERE!!!!!!!!!! */
const CurrentEvents = () => {
    const Countdown = ({ targetDate }) => {
        const [timeLeft, setTimeLeft] = useState("");

        useEffect(() => {
            const interval = setInterval(() => {
                const diff = new Date(targetDate).getTime() - new Date().getTime();

                if (diff <= 0) {
                    setTimeLeft("Event started!");
                    clearInterval(interval);
                } else {
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                    const minutes = Math.floor((diff / (1000 * 60)) % 60);
                    const seconds = Math.floor((diff / 1000) % 60);

                    setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
                }
            }, 1000);

            return () => clearInterval(interval);
        }, [targetDate]);

        return <p className="text-lg font-bold">{timeLeft}</p>;
    };


    const events = [
        {
            name: "Innovate Your House Hackathon!",
            date: "2025-11-14T15:00:00",
            location: "IT Building 1201",
            description: "Create a solution to a problem on campus. Prizes for top 3 teams!",
        },
        {
            name: "WIT, SWE, and GWC S'mores Hangout!",
            date: "2025-11-20T18:00:00",
            location: "IT Pavillion",
            description: "Hang out and make s'mores before finals and thanksgiving!",
        },
    ];

        return (
            <section id="currentevents" className='relative c-space section-spacing'>
                <WarpBackground>
                <h2 className='text-heading'>Current Events</h2>
                <br />

                <div className="relative space-y-4">
                    {events.map((event) => (
                        <div key={event.name} className="border rounded-lg p-4 shadow-smfixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
                            <h3 className="text-xl font-semibold">{event.name}</h3>
                            <p className="text-sm text-white">
                                {new Date(event.date).toLocaleString()} • {event.location}
                            </p>
                            <p className="mt-2">{event.description}</p>
                            <Countdown targetDate={event.date} />
                        </div>
                    ))}
                </div>
                </WarpBackground>
            </section>
        );
};

export default CurrentEvents;
