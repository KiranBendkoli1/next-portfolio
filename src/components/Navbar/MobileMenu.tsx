"use client";
import { useState } from "react";
import NavItem from "./NavItem";
import { ROUTES_URL } from "@/constants";

const MobileMenu = ({ currentPath }: { currentPath: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="px-2 md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
        ☰
      </button>

      {isOpen && (
        <div className="flex flex-col gap-2 px-6 pb-3 md:hidden">
          <NavItem to={ROUTES_URL.HOME} label="_hello" activePath={currentPath} />
          <NavItem to={ROUTES_URL.ABOUT} label="_about-me" activePath={currentPath} />
          <NavItem to={ROUTES_URL.PROJECTS} label="_projects" activePath={currentPath} />
        </div>
      )}
    </>
  );
};

export default MobileMenu;
