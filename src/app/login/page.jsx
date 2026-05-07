/* eslint-disable react/no-unescaped-entities */
"use client";

import { Form, Input, Label, TextField, FieldError } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Link from "next/link";
import { IoCheckmarkCircle, IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const benefits = [
  "Continue where you left off",
  "Track your learning progress",
  "Access all enrolled courses",
  "Connect with your community",
];

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await toast.promise(
      authClient.signIn.email({ email, password, callbackURL: "/" }),
      {
        pending: "Signing you in...",
        success: "Welcome back! 👋",
        error: "Invalid email or password",
      },
    );
  };

  const handleGoogleSignIn = async () => {
    toast.info("Redirecting to Google... 🔄");

    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-white via-blue-50/30 to-teal-50/40">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 to-teal-500 flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <Link
          href="/"
          className="text-2xl font-extrabold text-white tracking-tight"
        >
          Skill<span className="text-teal-200">Sphere</span>
        </Link>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Welcome Back! 👋
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-10">
            Sign in to continue your learning journey and pick up right where
            you left off.
          </p>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-white/90">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <IoCheckmarkCircle className="text-teal-200 text-sm" />
                </span>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-4">
          {[
            { value: "10K+", label: "Students" },
            { value: "200+", label: "Courses" },
            { value: "4.9★", label: "Rating" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-white/10 rounded-2xl p-4 text-center border border-white/20"
            >
              <p className="text-2xl font-extrabold text-white">{value}</p>
              <p className="text-white/60 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <Link
              href="/"
              className="text-2xl font-extrabold text-blue-500 tracking-tight"
            >
              Skill<span className="text-teal-500">Sphere</span>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
              Sign in to your account
            </h1>
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-blue-500 font-medium hover:underline"
              >
                Create one free
              </Link>
            </p>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition shadow-sm text-sm font-medium text-gray-700 mb-6"
          >
            <FcGoogle className="text-base" />
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px bg-gray-200 w-full" />
            <span className="text-xs text-gray-400 whitespace-nowrap">
              or sign in with email
            </span>
            <div className="h-px bg-gray-200 w-full" />
          </div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField isRequired name="email" type="email" className="w-full">
              <Label className="text-sm font-medium text-slate-700 mb-1.5 block">
                Email Address
              </Label>
              <Input
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-300 transition"
                placeholder="john@example.com"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            <TextField
              isRequired
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full"
            >
              <div className="flex items-center justify-between mb-1.5">
                <Label className="text-sm font-medium text-slate-700">
                  Password
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-300 transition"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
                </button>
              </div>
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-gray-300 accent-blue-500 cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-500 cursor-pointer"
              >
                Remember me for 30 days
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition shadow-lg shadow-blue-200 mt-2"
            >
              Sign In →
            </button>
          </Form>

          <p className="text-xs text-gray-400 text-center mt-6">
            By signing in, you agree to our{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
