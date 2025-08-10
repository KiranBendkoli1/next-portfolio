import React from "react";
import dynamic from "next/dynamic";

export const runtime = "edge";

const Scene = dynamic(() => import("@/components/Scene"));

const ScenePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Scene />
    </div>
  );
};

export default ScenePage;
