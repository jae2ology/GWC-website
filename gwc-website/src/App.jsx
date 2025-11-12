import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import CurrentEvents from "./sections/CurrentEvents.jsx";
import {BubbleBackground} from "@/components/animate-ui/components/backgrounds/bubble.tsx";
import Photos from "@/sections/Photos.jsx";
import Contact from "@/sections/Contact.jsx";

const App = () => {

    return (
        <BubbleBackground>
            <section id={"home"}>
            <div className='container mx-auto'>
                <Navbar />
                <Hero />
                <About />
                <CurrentEvents />
                {/* photo album!*/}
                <Contact />
            </div>
            </section>
        </BubbleBackground>

    )
};

export default App;