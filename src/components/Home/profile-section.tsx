import PrimaryLinkButton from "../primaryLinkButton";


const ProfileSection = () => {
    return (
            <div className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] rounded-[12px] overflow-hidden">
                {/* Background Image */}
                <img
                    src="/profile-pic.jpg"
                    alt="Profile Background"
                    className="w-full h-full object-cover object-center rounded-[12px]"
                />

                {/* Overlay content */}
                <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 right-4 sm:right-8 text-left px-2 sm:px-0">
                    <p className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-white font-semibold leading-tight">
                        Shrey Raj Singh, Full Stack Developer & AI/ML Engineer
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white mt-2 max-w-[800px]">
                        Versatile engineer with expertise in full-stack development and AI/ML.
                        Passionate about creating innovative solutions and driving technological advancements.
                    </p>
                    <PrimaryLinkButton to="/projects">View Projects</PrimaryLinkButton>
                </div>
            </div>

    );
}

export default ProfileSection;