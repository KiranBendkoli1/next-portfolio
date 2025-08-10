import AboutPage from "@/pages/about";
import HomePage from "@/pages/home";
import dynamic from "next/dynamic";

export const runtime = "edge";


const Scene = dynamic(() => import("@/components/Scene"));

export default function Home() {
  return (
    <main className="text-white min-h-screen w-full relative">
      <div className="absolute w-full">
        <Scene />
      </div>
      <section id="home" className="h-screen flex items-center justify-center">
        <HomePage />
      </section>
      <section id="about" className="h-screen px-[200px]">
        <AboutPage />
      </section>
      <section
        id="projects"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl">Projects</h1>
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl">Contact</h1>
      </section>{" "}
    </main>
  );
}
