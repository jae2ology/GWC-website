import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import {BackgroundGradientAnimation} from "./components/ui/background-gradient-animation.tsx";
import About from "./sections/About.jsx";

const App = () => {

    return (
        <BackgroundGradientAnimation>
            <div className='container mx-auto max-w-7xl'>

                <Navbar />
                <Hero />
                <About />
                {/* current events */}
                {/* photo album */}
                {/* contact */}

            </div>

        </BackgroundGradientAnimation>

    )
};

export default App;