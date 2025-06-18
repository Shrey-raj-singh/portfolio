import ProfileSection from "../components/Home/profile-section";
import ContactSection from "../components/Home/contact-section";
import SkillsSection from "../components/Home/skills-section";
import AboutSection from "../components/Home/about-section";
import ProjectSection from "../components/Home/project-section";



const HomePage = () => {

    return (
        <main className="min-h-screen flex flex-col justify-center items-center px-[10%] my-12 text-center">

            <ProfileSection />

            <SkillsSection />

            <ProjectSection />

            <AboutSection />

            <ContactSection />

        </main>
    );
}

export default HomePage;