"use client";

import { ABOUT } from "@/constants";
import React from "react";
import { IoIosFolder } from "react-icons/io";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaHtml5 } from "react-icons/fa";

const Explorer = () => {
  const params = useParams();
  const activeFile = params?.file as string;

  return (
    <aside className="w-full md:w-1/5 p-2 overflow-auto border-b md:border-b-0 md:border-r border-gray-600">
      <div className="flex items-center mb-2">
        <IoIosFolder className="mr-1 text-blue-400 size-5" />
        <span className="font-semibold">Explorer</span>
      </div>
      {ABOUT.map((folder) => (
        <div key={folder.label}>
          <Link
            key={folder.label}
            href={`/about/${folder.label}`}
            className={`flex items-center gap-x-2 p-1 rounded cursor-pointer hover:bg-gray-700 ${
              activeFile === folder.label ? "bg-gray-700 font-bold" : ""
            }`}
          >
            <FaHtml5 className="text-orange-600" /> {folder.label}.html
          </Link>
        </div>
      ))}
    </aside>
  );
};

export default Explorer;
