import AboutPage from "@/pages/about";
import HomePage from "@/pages/home";
import dynamic from "next/dynamic";

export const runtime = "edge";


const Scene = dynamic(() => import("@/components/Scene"));

export default function Home() {
  return (
    <main className="text-white min-h-screen w-full relative">
      <div className="fixed inset-0 w-full">
        <Scene />
      </div>
      <div className="relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center snap-start">
          <HomePage />
        </section>
        <section id="about" className="min-h-screen lg:px-[200px] px-0 snap-start">
          <AboutPage />
        </section>
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center snap-start"
        >
          <h1 className="text-4xl">Projects</h1>
        </section>
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center snap-start"
        >
          <h1 className="text-4xl">Contact</h1>
        </section>
      </div>
    </main>
  );
}
