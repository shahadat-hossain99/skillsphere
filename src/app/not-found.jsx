import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found | SkillSphere",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-linear-to-br from-white via-blue-50/30 to-teal-50/40 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* 404 big number */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500 select-none">
          404
        </h1>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto -mt-4 mb-6">
          <span className="text-2xl">🔍</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 leading-relaxed mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-teal-500 text-white text-sm font-medium rounded-xl shadow-lg shadow-blue-200 hover:opacity-90 transition"
          >
            Go Home
          </Link>
          <Link
            href="/courses"
            className="px-6 py-2.5 border border-blue-500 text-blue-600 text-sm font-medium rounded-xl hover:bg-blue-50 transition"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </main>
  );
}
