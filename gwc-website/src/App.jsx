import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import {BackgroundGradientAnimation} from "./components/ui/background-gradient-animation.tsx";
import About from "./sections/About.jsx";
import {BackgroundGradient} from "./components/ui/background-gradient-img.tsx";

const App = () => {

    return (
        <BackgroundGradient>
            <div className='container mx-auto'>

                <Navbar />
                <Hero />
                <About />
                {/* current events */}
                {/* photo album */}
                {/* contact */}

            </div>
        </BackgroundGradient>
    )
};

export default App;