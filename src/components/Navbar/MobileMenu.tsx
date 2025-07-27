"use client";
import { useState } from "react";
import NavItem from "./NavItem";
import { ROUTES_URL } from "@/constants";

const MobileMenu = ({ currentPath }: { currentPath: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        className="px-2 py-1 rounded border border-yellow-500 text-yellow-400"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-[#1a1c2c] rounded-lg shadow-lg z-50 flex flex-col gap-2 px-4 py-3">
          <NavItem
            to={ROUTES_URL.HOME}
            label="_hello"
            activePath={currentPath}
          />
          <NavItem
            to={ROUTES_URL.ABOUT}
            label="_about-me"
            activePath={currentPath}
          />
          <NavItem
            to={ROUTES_URL.PROJECTS}
            label="_projects"
            activePath={currentPath}
          />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
