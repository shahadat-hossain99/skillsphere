"use client";

import Image from "next/image";
import Link from "next/link";
import FooterLogo from "@/assets/Footer-logo.svg";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const footerLinks = {
  Platform: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "My Profile", href: "/profile" },
  ],
  Account: [
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

const tags = [
  "Web Development",
  "UI/UX Design",
  "Marketing",
  "Data Science",
  "JavaScript",
  "React",
  "Next.js",
  "Python",
  "SEO",
];

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-400">
      {/* Main footer content */}
      <div className="max-w-11/12 mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* Brand section (Left - Spans 5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <Link href="/">
            <Image
              src={FooterLogo}
              width={180}
              height={50}
              alt="SkillSphere"
              className="opacity-100"
            />
          </Link>

          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            A modern online learning platform where you can explore courses,
            watch lessons, and enroll in skill-based programs.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded-full border border-gray-800 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links & Contact Section (Right - Spans 7 columns) */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Legal + Contact (Stacked as per image_ddc40f.png) */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/terms"
                    className="text-sm hover:text-cyan-400 transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm hover:text-cyan-400 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">
                Contact
              </h4>
              <div className="text-sm space-y-3">
                <p className="flex items-center gap-2">
                  📧 support@skillsphere.com
                </p>
                <p className="flex items-center gap-2">📞 +880 1234-567890</p>
                <p className="flex items-center gap-2">📍 Dhaka, Bangladesh</p>
              </div>
              <div className="flex gap-4 text-lg pt-2">
                <a
                  href="https://github.com/shahadat-hossain99"
                  target="_blank"
                  className="hover:text-cyan-400 transition"
                >
                  <FaGithub />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaLinkedin />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Other Columns based on footerLinks map */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm hover:text-cyan-400 transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-900/50 bg-[#010409]">
        <div className="max-w-11/12 mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 uppercase tracking-widest font-medium">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://github.com/shahadat-hossain99"
              className="text-blue-500 hover:text-cyan-400 transition"
            >
              Shahadat Hossain
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
