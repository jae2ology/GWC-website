import {useState} from "react";

const Contact = () => {
    const [status, setStatus] = useState(""); // feedback message

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch("https://gwc-website.netlify.app/.netlify/functions/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Network response was not ok");

            const result = await res.json();
            console.log("Success:", result);
            setStatus("Message was sent! We will get back to you shortly!");
            e.target.reset(); // clear form
        } catch (err) {
            console.error("Error submitting form:", err);
            setStatus("Please try again.");
        }
    };

    return (
        <section className="contact c-space section-spacing">
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
            </form>
        </section>
    );
};

export default Contact;
