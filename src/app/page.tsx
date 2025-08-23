import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact/ContactPage";
import HomePage from "@/pages/home";
import Projects3D from "@/pages/projects/Projects3D";
import dynamic from "next/dynamic";
import { headers } from "next/headers";

export const runtime = "edge";
const AuroraCanvas = dynamic(() => import("@/components/Aurora/AuroraScene"));

export default function Home() {
  return (
    <main className="text-white min-h-screen w-full relative">
      <div className="fixed -z-10 w-full h-screen">
        <AuroraCanvas />
      </div>
      <section
        id="home"
        className="max-w-[1500px] mx-auto px-0 snap-start pt-0 sm:pt-16"
      >
        <HomePage />
      </section>
      <section
        id="about"
        className="max-w-[1500px] mx-auto px-0 snap-start pt-0 sm:pt-16"
      >
        <AboutPage />
      </section>
      <section
        id="projects"
        className="max-w-[1500px] mx-auto px-0 snap-start pt-0 sm:pt-16"
      >
        <Projects3D />
      </section>
      <section
        id="contact"
        className="px-0 snap-start pt-0 sm:pt-16"
      >
        <ContactPage />
      </section>
    </main>
  );
}
