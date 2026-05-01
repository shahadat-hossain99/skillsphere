"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "My Profile", href: "/profile" },
];

export default function NavLinks({ onClick }) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            onClick={onClick}
            className={`text-sm font-medium relative group transition ${
              pathname === href
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {label}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                pathname === href ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        </li>
      ))}
    </>
  );
}
