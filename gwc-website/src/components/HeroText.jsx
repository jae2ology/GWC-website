import {BackgroundGradient} from "./ui/background-gradient-img.tsx";


const HeroText = () => {
        return (

            <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            <div className="flex flex-col md:flex-row items-center md:items-start c-space gap-8">
                {/* TEXT SECTION */}
                <div className="flex-1 space-y-4">
                    <h1 className="text-4xl font-medium">
                        Hi! We are Girls Who Code!
                    </h1>
                    <p className="text-2xl font-small text-neutral-300">
                        We are a student organization at Georgia Southern University
                    </p>
                    <p className="text-2xl font-small text-neutral-300">
                        on the Statesboro campus that is committed to breaking
                    </p>
                    <p className="text-2xl font-small text-neutral-300">
                        gender gaps in technology.
                    </p>
                    <p className="text-1xl font-small text-neutral-300">
                        Our organization hosts Hackathons, Coding Workshops, Study Events,
                        and so much more!
                    </p>
                </div>

                {/* IMAGE SECTION */}
                <div>
                    <BackgroundGradient className="rounded-[300px]">
                        <div className="flex-1 flex justify-center md:justify-end">
                            <img
                                src="/assets/group.png"
                                alt="Girls Who Code"
                                className="w-64 h-auto md:w-80 rounded-2xl"
                            />
                        </div>
                    </BackgroundGradient>
                </div>
            </div>
        </div>
    );
}

export default HeroText;