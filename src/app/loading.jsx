"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-linear-to-br from-white via-blue-50/30 to-teal-50/40 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center"
      >
        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 border-r-teal-500 animate-spin" />
        </div>

        {/* Logo text */}
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500 mb-2">
          Skill-Sphere Host
        </h2>

        <p className="text-gray-600 text-sm">Loading your content...</p>

        {/* Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 w-full max-w-2xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 animate-pulse"
            >
              <div className="w-full h-28 bg-gray-100 rounded-xl mb-4" />
              <div className="h-3 bg-gray-100 rounded-full mb-2 w-3/4" />
              <div className="h-3 bg-gray-100 rounded-full w-1/2" />
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
