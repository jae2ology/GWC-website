import {useState} from "react";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "97606adc-6015-4882-b602-3b221b6630f9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };


    return (
        <section id="contact" className="c-space section-spacing">
            <h2 className="text-3xl font-bold mb-6 text-white text-shadow-card border rounded-lg p-4 shadow-smfixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
                Contact Us!
            </h2>

            {/* form */}
            <form onSubmit={onSubmit} className="p-10 input-box text-shadow-card border rounded-lg backdrop-blur-2xl inset-x-0 bg-primary/20">
                <div className="mb-6">
                    <label className="bold z-20 w-full mb-2 block">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="field-input w-full p-3 rounded-md"
                        placeholder="Enter your name..."
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="bold z-20 w-full mb-2 block">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        className="field-input w-full p-3 rounded-md"
                        placeholder="Enter your email..."
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="bold z-20 w-full mb-2 block">Your Message</label>
                    <textarea
                        name="message"
                        className="field-input w-full p-3 rounded-md h-32 resize-y"
                        placeholder="Enter your message..."
                        required
                    />
                </div>

                {/* PLS work button */}
                <button
                    type="submit"
                    className="mb-6 w-full p-3 rounded-md bg-primary/60 text-white hover:bg-primary/20 transition duration-300"
                >
                    Send Us a Message!
                </button>
                <span>{result}</span>
            </form>
        </section>
    );
};

export default Contact;
