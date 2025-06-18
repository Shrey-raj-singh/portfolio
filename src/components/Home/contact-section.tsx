import { useState } from "react";
import { siteConfig } from "../../utils/constant";


const ContactSection = () => {
    
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
        <>

            {isLoading && (
                <div className="fixed inset-0 z-50 bg-transparent bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#0A80ED] border-opacity-100"></div>
                </div>
            )}

            <div className="w-full text-left mt-16 relative">
                <p className="text-[22px] sm:text-[26px] font-bold leading-tight text-white">
                    Contact
                </p>
                <form
                    className="mt-8 w-full max-w-[448px] space-y-6"
                    onSubmit={handleSubmit}
                >

                    <label className="font-medium text-[16px] sm:text-[17px] md:text-[18px] text-white leading-relaxed">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="mt-2 w-full px-4 py-3 rounded-[8px] bg-[#293038] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label className="font-medium text-[16px] sm:text-[17px] md:text-[18px] text-white leading-relaxed">
                        Your Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="mt-2 w-full px-4 py-3 rounded-[8px] bg-[#293038] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label className="font-medium text-[16px] sm:text-[17px] md:text-[18px] text-white leading-relaxed">
                        Message
                    </label>
                    <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Your Message"
                        className="mt-2 mb-12 w-full px-4 py-3 rounded-[8px] bg-[#293038] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />

                    <button
                        type="submit"
                        className="absolute right-0 bottom-0 px-6 font-bold py-2 mt-6 sm:mt-8 text-white rounded-[20px] cursor-pointer hover:bg-blue-700 transition"
                        style={{ backgroundColor: siteConfig.colors.primary }}
                    >
                        Send
                    </button>
                </form>
                {submitted && (
                    <p className="text-green-400 text-sm mt-4">✅ Message sent successfully!</p>
                )}

            </div>
        </>
    );
}

export default ContactSection;