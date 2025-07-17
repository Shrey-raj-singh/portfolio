import { useState } from "react";
import { siteConfig } from "../utils/constant";

const ContactPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xwpbqnbq", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                alert("There was an error submitting the form.");
            }
        } catch (error) {
            alert("Something went wrong.");
            console.log(error);
        }

        setIsLoading(false);
    };


    return (
        <main className="max-h-screen flex flex-col justify-center items-center px-[10%]  text-center">

            <div className="font-space w-full text-left mt-8">
                <p className="text-[22px] sm:text-[26px] md:text-[32px] font-bold leading-tight text-white">
                    Get in touch
                </p>

                <p className="text-[12px] sm:text-[12px] md:[14px] text-[#9CABBA]">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    Feel free to reach out!
                </p>
            </div>

            {isLoading && (
                <div className="fixed inset-0 z-50 bg-transparent bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#0A80ED] border-opacity-100"></div>
                </div>
            )}

            <div className="w-full text-left mt-4 relative ">
                <form
                    className="w-full max-w-[448px] space-y-6 mb-12"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="mt-2 w-full px-4 py-3 rounded-[8px] bg-[#293038] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="mt-2 w-full px-4 py-3 rounded-[8px] bg-[#293038] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Your Message"
                        className="mt-2  w-full px-4 py-3 rounded-[8px] bg-[#293038] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />

                    {submitted ? <></> : <button
                        type="submit"
                        className="absolute left-0 bottom-0 px-6 font-bold py-2 mt-6 sm:mt-8 text-white rounded-[20px] cursor-pointer hover:bg-blue-700 transition"
                        style={{ backgroundColor: siteConfig.colors.primary }}
                    >
                        Send Message
                    </button>}
                    {submitted && (
                        <p className="text-green-400 text-sm mt-2">✅ Message sent successfully!</p>
                    )}
                </form>

            </div>

            <div className="font-grotesk w-full text-left mt-4">
                <p className="text-[10px] sm:text-[12px] md:text-[14px] text-[#9CABBA] leading-relaxed cursor-">
                    Email: rjshrey23@gmail.com
                </p>

                <p className="text-[10px] sm:text-[12px] md:text-[14px] text-[#9CABBA] leading-relaxed cursor-">
                    Phone: +91 7587845520
                </p>
            </div>

        </main>
    );
}

export default ContactPage;