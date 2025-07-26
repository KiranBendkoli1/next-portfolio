import Link from "next/link";

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem = ({ to, label }: NavItemProps) => {
  return (
    <Link href={to} className={`px-2 md:border-l border-gray-600 relative `}>
      {label}
    </Link>
  );
};

export default NavItem;
