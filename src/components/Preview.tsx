import { ABOUT } from "@/constants";
import React from "react";
interface PreviewProps {
  params: { file?: string };
}
const Preview = ({ params }: PreviewProps) => {
  const fileParam = params?.file as string;
  const activeFile = ABOUT.find((file) => file.label === fileParam) || ABOUT[0];

  return (
    <div className="border mt-5 sm:mt-0 border-zinc-700 bg-opacity-30 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-0 border-b border-zinc-700">
        <div className="text-sm font-medium capitalize text-white relative">
          {activeFile.label}
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Address Bar */}
      <div className="px-4 py-2 text-sm text-gray-300 bg-opacity-40 border-b border-zinc-700">
        http://127.0.0.1:3000/
        {`${activeFile.label}.html`}
      </div>

      {/* Preview Content */}
      <div className="flex-1 flex">
        <div
          className="prose prose-invert max-w-none overflow-auto p-4"
          dangerouslySetInnerHTML={{ __html: activeFile.code }}
        />
      </div>
    </div>
  );
};

export default Preview;
