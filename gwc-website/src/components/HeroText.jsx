import {BackgroundGradient} from "./ui/background-gradient-img.tsx";


const HeroText = () => {
        return (

            <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text
            ">
            <div className="flex flex-col md:flex-row items-center md:items-start c-space gap-2 ">
                {/* TEXT SECTION */}
                <div className="flex-1 space-y-4 border rounded-lg p-4 shadow-smfixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
                    <h1 className="text-4xl font-medium">
                        Hi! We are Girls Who Code!
                    </h1>
                    <div className='container text-2xl font-small text-white'>
                        <p>We are an organization on the Statesboro campus committed to breaking gender gaps in technology using Computer Science education.</p>
                    </div>
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
                            />
                        </div>
                    </BackgroundGradient>
                </div>
            </div>
        </div>
    );
}

export default HeroText;