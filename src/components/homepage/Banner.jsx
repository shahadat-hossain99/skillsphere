"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import Img from "../../assets/student.jpg";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-blue-50/30 to-teal-50/40 pt-14 md:pt-24 pb-16">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Chip
              variant="flat"
              className="bg-teal-400/20 text-teal-700 font-medium px-3 py-1"
            >
              🌍 Learn Anytime, Anywhere
            </Chip>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
                Upgrade Your Skills
              </span>{" "}
              🚀
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Upgrade your skills today and unlock new opportunities for growth,
              success, and a brighter future — start learning something new now!
            </p>

            {/* Stats row */}
            <div className="flex gap-8 pt-2">
              {[
                { value: "10K+", label: "Students" },
                { value: "200+", label: "Courses" },
                { value: "50+", label: "Instructors" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-slate-900">{value}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap pt-2">
              <Link href="/courses">
                <Button
                  variant="bordered"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50 font-medium px-6"
                >
                  Explore Courses
                </Button>
              </Link>
              <Link href="/">
                <Button
                  color="primary"
                  className="bg-linear-to-r from-blue-600 to-teal-500 text-white font-medium px-6 shadow-lg shadow-blue-200"
                >
                  Join Now →
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-400/20 to-teal-400/20 blur-xl scale-105 pointer-events-none" />

              {/* Image card */}
              <div className="relative w-80 md:w-105 h-90 md:h-110 rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white">
                <Image
                  src={Img}
                  alt="student"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    New course enrolled!
                  </p>
                  <p className="text-xs text-gray-400">
                    Web Development · Just now
                  </p>
                </div>
              </motion.div>

              {/* Floating rating badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100"
              >
                <p className="text-xs text-gray-400">Avg Rating</p>
                <p className="text-lg font-bold text-slate-900">⭐ 4.9/5</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
