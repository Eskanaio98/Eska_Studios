import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Link from "next/link";
import NavBar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";

export default function Home(){
    return (
        <main className="flex min-h-screen flex-col bg-[#4C516D]">
            <NavBar />
            <div className="container mt-24 mx-auto px-12 py-4">
             <HeroSection />
             <AchievementSection />
             <AboutSection />
             <ProjectsSection />
             <EmailSection />
            </div>
            <Footer />
        </main>
    );
}
