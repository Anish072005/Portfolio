import { AnimatedBackground } from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />
            
            <div className="px-12 pt-24 pb-24">
                <section id="hero" className="py-24 lg:py-40">
                    <Hero />
                </section>
                <div style={{ height: "45px" }} />                
                <section id="about" className="py-24 lg:py-40 scroll-mt-32">
                    <About />
                </section>

                <div style={{ height: "120px" }} />
                
                <section id="skills" className="py-24 lg:py-40 scroll-mt-32">
                    <Skills />
                </section>
          
                <div style={{ height: "120px" }} />

                <section id="education" className="py-24 lg:py-40 scroll-mt-32">
    <Education />
</section>
 <div style={{ height: "120px" }} />
                
                <section id="projects" className="py-24 lg:py-40 scroll-mt-32">
                    <Projects />
                </section>

                <div style={{ height: "120px" }} />
                
                <section id="contact" className="pt-24 pb-12 lg:pt-40 lg:pb-20 scroll-mt-32">
                    <Contact />
                </section>
            </div>
            
            <Footer />
        </main>
    );
}