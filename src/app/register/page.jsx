"use client";

import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Description,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoCheckmarkCircle, IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const benefits = [
  "Access 200+ expert-led courses",
  "Learn at your own pace",
  "Get a certificate of completion",
  "Join 10K+ active learners",
];

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (!error) {
      router.push("/");
      toast.success("Your account created successfully");
    } else {
      toast.error("Register failed", {
        position: "top-center",
        autoClose: 1100,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-white via-blue-50/30 to-teal-50/40">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 to-teal-500 flex-col justify-between p-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        {/* Logo */}
        <div>
          <Link
            href="/"
            className="text-2xl font-extrabold text-white tracking-tight"
          >
            Skill<span className="text-teal-200">Sphere</span>
          </Link>
        </div>

        {/* Center content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Start Your Learning Journey Today 🚀
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-10">
            Join thousands of learners building real skills, landing better
            jobs, and growing every day.
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

        {/* Bottom quote */}
        <div className="relative z-10 bg-white/10 rounded-2xl p-5 border border-white/20">
          <p className="text-white/90 text-sm leading-relaxed italic">
            &ldquo;SkillSphere helped me land my first developer job in just 3
            months. The courses are practical and beginner-friendly!&ldquo;
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-8 h-8 rounded-full bg-teal-300 flex items-center justify-center text-[#5D38DE] font-bold text-sm">
              S
            </div>
            <div>
              <p className="text-white text-xs font-semibold">Sarah Khan</p>
              <p className="text-white/60 text-xs">React Learner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <Link
              href="/"
              className="text-2xl font-extrabold text-blue-500 tracking-tight"
            >
              Skill<span className="text-teal-500">Sphere</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
              Create your account
            </h1>
            <p className="text-gray-500 text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-500 font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Google button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition shadow-sm text-sm font-medium text-gray-700 mb-6"
          >
            <FcGoogle className=" text-base" />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px bg-gray-200 w-full" />
            <span className="text-xs text-gray-400 whitespace-nowrap">
              or register with email
            </span>
            <div className="h-px bg-gray-200 w-full" />
          </div>

          {/* Form */}
          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            {/* Name */}
            <TextField isRequired name="name" type="text" className="w-full">
              <Label className="text-sm font-medium text-slate-700 mb-1.5 block">
                Full Name
              </Label>
              <Input
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-300 transition"
                placeholder="Enter Your Name"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Image URL */}
            <TextField isRequired name="image" type="text" className="w-full">
              <Label className="text-sm font-medium text-slate-700 mb-1.5 block">
                Profile Image URL
              </Label>
              <Input
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-300 transition"
                placeholder="https://example.com/photo.jpg"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-sm font-medium text-slate-700 mb-1.5 block">
                Email Address
              </Label>
              <Input
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-300 transition"
                placeholder="john@example.com"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full"
              validate={(value) => {
                if (value.length < 8)
                  return "Password must be at least 8 characters";
                if (!/[A-Z]/.test(value))
                  return "Must contain at least one uppercase letter";
                if (!/[0-9]/.test(value))
                  return "Must contain at least one number";
                return null;
              }}
            >
              <Label className="text-sm font-medium text-slate-700 mb-1.5 block">
                Password
              </Label>
              <div className="relative">
                <Input
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-300 transition"
                  placeholder="Min 8 chars, 1 uppercase, 1 number"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
                </button>
              </div>
              <Description className="text-xs text-gray-400 mt-1">
                Min 8 characters · 1 uppercase · 1 number
              </Description>
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition shadow-lg shadow-purple-200 mt-2"
            >
              Create Account →
            </button>

            {/* Reset */}
            <button
              type="reset"
              className="w-full py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 transition"
            >
              Reset Form
            </button>
          </Form>

          <p className="text-xs text-gray-400 text-center mt-6">
            By creating an account, you agree to our{" "}
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

export default RegisterPage;
