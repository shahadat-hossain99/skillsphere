"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { toast } from "react-toastify";

export default function MobileMenu({ open, setOpen }) {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  // console.log(user, "mobile");

  const handleLogOut = async () => {
    await toast.promise(
      authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = "/";
          },
        },
      }),
      {
        pending: "Signing out...",
        success: "Signed out successfully 👋",
        error: "Sign out failed. Try again.",
      },
    );
  };

  const menuRef = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open, setOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Menu Panel */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 h-screen w-[80%] max-w-sm bg-white/95 backdrop-blur-md z-40 transform transition-transform duration-300 shadow-xl ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 mt-16">
          {/* Links */}
          <ul className="flex flex-col gap-5 text-lg">
            <NavLinks onClick={() => setOpen(false)} />
          </ul>

          {/* Buttons */}

          {!user && (
            <div className="border-t pt-4 mt-4 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="w-full text-center py-2 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="w-full text-center py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow"
              >
                Register
              </Link>
            </div>
          )}

          {user && (
            <div className="border-t pt-4 mt-4 flex flex-col gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleLogOut} variant="danger" size="sm">
                LogOut
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
