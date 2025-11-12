import { AnimatedTestimonials } from "../components/ui/animated-cards.tsx";


const About = () => {

    {/* UPDATE LEADERSHIP HERE!!!! */}
    function Cards() {
        const testimonials = [

            {
                quote: "Second-year Software Engineering and Computer Science double major. Certificates in Big Data and Analysis and Mobile Systems",
                name: "Jae Jackson",
                designation: "President",
                src: "/GWC-website/assets/jae.png"
            },

            {
                quote: "Second-year Art major with a concentration in Animation",
                name: "Zaria Boyd",
                designation: "Executive Vice-President",
                src: "/GWC-website/assets/zaria.png"
            },

            {
                quote: "Second-year Information Systems Major",
                name: "Jewell Juniel",
                designation: "Vice President of Finance",
                src: "/GWC-website/assets/jewell.png"
            },

            {
                quote: "Associate Professor in the Computer Science Department",
                name: "Viji Ramasamy",
                designation: "Advisor",
                src: "/GWC-website/assets/viji.png"
            },

            {
                quote: "Second-Year Software Engineering major",
                name: "Zoe Mike-Okunseri",
                designation: "Secretary",
                src: "/GWC-website/assets/gwc.jpg"
            },

            {
                quote: "Second-year Journalism major",
                name: "James Younge",
                designation: "Social Media Manager",
                src: "/GWC-website/assets/gwc.jpg"
            },

            {
                quote: "First-year Psychology major",
                name: "Kayla White",
                designation: "Social Media Committee",
                src: "/GWC-website/assets/gwc.jpg"
            },

            {
                quote: "Second-year Electrical Engineering and Computer Engineering double major",
                name: "Deshawn Simmons",
                designation: "Coding Specialist",
                src: "/GWC-website/assets/gwc.jpg"
            }


        ];
        return <AnimatedTestimonials testimonials={testimonials} />;
    }

    {/* FORMATTING >*/}

    return (
        <section id="about" className="c-space section-spacing">
            <h2 className="text-3xl font-bold mb-6 text-white text-shadow-card border rounded-lg p-4 shadow-smfixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">About Us</h2>
            <h1>We started in Spring 2025 on the Statesboro campus, where we originated our coding workshops.</h1>
            <h1>Our leadership team changes from semester to semester, but here is our current team!</h1>
            <div className='mt-8'>
                <Cards />
            </div>
        </section>
    );
}


export default About