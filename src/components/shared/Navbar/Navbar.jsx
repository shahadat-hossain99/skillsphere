"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Logo.svg";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="bg-white/90 backdrop-blur-md w-full py-3 shadow-sm sticky top-0 z-50">
      <nav className="max-w-11/12 mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            width={150}
            height={40}
            alt="SkillSphere"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          <NavLinks />
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <Link
            href="/login"
            className="px-5 py-2 text-sm text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-50"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Register
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-black transition ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={menuOpen} setOpen={setMenuOpen} />
    </header>
  );
};

export default Navbar;
