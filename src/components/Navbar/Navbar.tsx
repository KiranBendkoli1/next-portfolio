// components/Navbar.tsx (Server)
import { headers } from "next/headers";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { ROUTES_URL } from "@/constants";

const Navbar = async () => {
  const headerList = await headers(); // await the promise
  const pathname = headerList.get("x-next-pathname") || "";

  return (
    <nav className="w-full border-b border-gray-600 shadow">
      <div className="flex items-center justify-between p-2 md:justify-start">
        <h1 className="pl-2 pr-12">kiran-bendkoli</h1>

        {/* Mobile menu toggle (Client-side) */}
        <MobileMenu currentPath={pathname} />

        {/* Desktop nav */}
        <div className="hidden gap-4 px-4 md:flex">
          <NavItem to={ROUTES_URL.HOME} label="_hello" activePath={pathname} />
          <NavItem
            to={ROUTES_URL.ABOUT}
            label="_about-me"
            activePath={pathname}
          />
          <NavItem
            to={ROUTES_URL.PROJECTS}
            label="_projects"
            activePath={pathname}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
