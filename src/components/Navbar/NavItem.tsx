// components/NavItem.tsx
import Link from "next/link";

interface NavItemProps {
  to: string;
  label: string;
  activePath: string;
}

const NavItem = ({ to, label, activePath }: NavItemProps) => {
  const isActive = to === activePath;

  return (
    <Link
      href={to}
      className={`px-2 md:border-l border-gray-600 relative ${
        isActive ? "text-blue-500 font-semibold" : ""
      }`}
    >
      {label}
    </Link>
  );
};

export default NavItem;
