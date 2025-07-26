'use client';
import { use, useState } from "react";
import NavItem from "./NavItem";
import { ROUTES_URL } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-600 shadow">
      <div className="flex items-center justify-between p-2 md:justify-start">
        <h1 className="pl-2 pr-12">kiran-bendkoli</h1>
        <button
          className="px-2 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* Desktop nav */}
        <div className="hidden gap-4 px-4 md:flex">
          <NavItem to={ROUTES_URL.HOME} label="_hello" />
          <NavItem to={ROUTES_URL.ABOUT} label="_about-me" />
          <NavItem to={ROUTES_URL.PROJECTS} label="_projects" />
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="flex flex-col gap-2 px-6 pb-3 md:hidden">
          <NavItem to={ROUTES_URL.HOME} label="_hello" />
          <NavItem to={ROUTES_URL.ABOUT} label="_about-me" />
          <NavItem to={ROUTES_URL.PROJECTS} label="_projects" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
