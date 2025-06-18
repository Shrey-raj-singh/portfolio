import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <>
            <div className="w-full text-left mt-16">
                <p className="text-[22px] sm:text-[26px] md:text-[30px] font-bold leading-tight text-white">
                    About
                </p>

                <p className="mt-6 text-[16px] sm:text-[17px] md:text-[18px] text-white leading-relaxed cursor-">
                    Experienced full-stack developer and AI/ML engineer with a strong foundation in software
                    development and machine learning. Proven ability to design, develop, and deploy scalable and
                    efficient solutions. Seeking challenging opportunities to leverage my skills and contribute to impactful projects.
                </p>

                <p className=" text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed text-[#0A80ED] ">
                    <Link to="/about" className="inline-block ">
                        Read more.
                    </Link>
                </p>
            </div>
        </>
    );
}

export default AboutSection;