"use client";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "@/assets/Footer-logo.svg";

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
    { label: "Privacy Policy", href: "/privacy" },
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
  "Figma",
  "SEO",
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main footer content */}
      <div className="max-w-11/12 mx-auto py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand column — takes 2 cols on large */}
        <div className="lg:col-span-2 space-y-5">
          {/* Logo with tagline */}
          <Link href="/">
            <Image
              src={FooterLogo}
              width={180}
              height={50}
              alt="SkillSphere"
              className="opacity-90"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
            A modern online learning platform where you can explore courses,
            watch lessons, and enroll in skill-based programs.
          </p>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Nav link columns */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              {section}
            </h4>
            <ul className="space-y-3">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="w-11/12 mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://github.com/shahadat-hossain99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors"
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
