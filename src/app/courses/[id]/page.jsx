/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Card, Chip } from "@heroui/react";
import {
  IoStar,
  IoTime,
  IoPersonCircle,
  IoBarChart,
  IoCheckmarkCircle,
  IoPlayCircle,
  IoBookmark,
  IoShare,
} from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const CoursesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://skillsphere-grow-in-public.vercel.app/data.json",
  );
  const courses = await res.json();
  const course = courses.find((i) => i.id == id);

  // What you'll learn — generated from course level
  const whatYouLearn = [
    "Build real-world projects from scratch",
    "Understand core concepts deeply",
    "Write clean, maintainable code",
    "Follow industry best practices",
    "Deploy your projects live",
    "Get job-ready with hands-on experience",
  ];

  // Course includes
  const includes = [
    { icon: <IoTime />, label: `${course.duration} of on-demand video` },
    { icon: <IoPlayCircle />, label: "Full lifetime access" },
    { icon: <IoBarChart />, label: `${course.level} level` },
    { icon: <IoCheckmarkCircle />, label: "Certificate of completion" },
    { icon: <IoBookmark />, label: "Downloadable resources" },
    { icon: <IoPersonCircle />, label: `Taught by ${course.instructor}` },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-blue-50/20 to-teal-50/20 pb-20">
      {/* Top hero */}
      <div className="bg-linear-to-r from-blue-500 to-teal-500 py-12 px-4">
        <div className="w-11/12 md:w-9/12 mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white transition">
              Courses
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-50">{course.title}</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <Chip
              variant="flat"
              className="bg-white/20 text-white border-white/30"
            >
              {course.category}
            </Chip>
            <Chip
              variant="flat"
              className="bg-white/20 text-white border-white/30"
            >
              {course.level}
            </Chip>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-4 max-w-2xl">
            {course.title}
          </h1>

          <p className="text-white/80 leading-relaxed max-w-2xl mb-6">
            {course.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 text-white/90 text-sm">
            <span className="flex items-center gap-1.5">
              <IoStar className="text-yellow-400 text-base" />
              <strong>{course.rating}</strong>
              <span className="text-white/60">(2.4k ratings)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <IoTime className="text-base" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <IoPersonCircle className="text-base" />
              {course.instructor}
            </span>
            <span className="flex items-center gap-1.5">
              <IoBarChart className="text-base" />
              {course.level}
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-11/12 md:w-9/12 mx-auto mt-10 grid md:grid-cols-3 gap-8">
        {/* Left — Details */}
        <div className="md:col-span-2 space-y-8">
          {/* What you'll learn */}
          <Card className="p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-slate-900 mb-5">
              What You'll Learn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whatYouLearn.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <IoCheckmarkCircle className="text-teal-500 text-lg mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Course description */}
          <Card className="p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Course Description
            </h2>
            <p className="text-gray-600 leading-7 text-sm md:text-base">
              {course.description}
            </p>
            <p className="text-gray-600 leading-7 text-sm md:text-base mt-4">
              This course is designed for anyone who wants to gain practical
              skills in {course.category}. Whether you're a complete beginner or
              looking to level up, you'll find structured, hands-on lessons
              taught by an industry expert.
            </p>
          </Card>

          {/* Instructor */}
          <Card className="p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-slate-900 mb-5">
              Your Instructor
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shrink-0">
                {course.instructor?.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">
                  {course.instructor}
                </h3>
                <p className="text-sm text-teal-600">
                  {course.category} Instructor
                </p>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <IoStar className="text-yellow-400" /> {course.rating}{" "}
                    Rating
                  </span>
                  <span>· 2.4K Students</span>
                  <span>· 5 Courses</span>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              An experienced {course.category} professional with a passion for
              teaching and helping students build real-world skills. Known for
              clear explanations and practical, project-based teaching style.
            </p>
          </Card>
        </div>

        {/* Right — Sticky card */}
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-4">
            <Card className="rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Course image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500 rounded-xl"
                />
              </div>

              <div className="p-5 space-y-4">
                {/* Price */}
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-extrabold text-slate-900">Free</p>
                  <span className="text-xs text-gray-400 line-through">
                    $49.99
                  </span>
                </div>

                {/* Enroll button */}
                <button className="w-full py-3 bg-linear-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition shadow-lg shadow-purple-200">
                  Enroll Now
                </button>

                {/* Wishlist & Share */}
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition flex items-center justify-center gap-2">
                    <IoBookmark /> Wishlist
                  </button>
                  <button className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition flex items-center justify-center gap-2">
                    <IoShare /> Share
                  </button>
                </div>

                {/* Divider */}
                <hr className="border-gray-100" />

                {/* Course includes */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm">
                    This course includes:
                  </h4>
                  <ul className="space-y-2.5">
                    {includes.map(({ icon, label }, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-gray-600"
                      >
                        <span className="text-teal-500 text-base">{icon}</span>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Rating card */}
            <Card className="p-5 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-slate-900 mb-3">
                Course Rating
              </h4>
              <div className="flex items-center gap-3">
                <p className="text-5xl font-extrabold text-teal-500">
                  {course.rating}
                </p>
                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <IoStar
                        key={s}
                        className={
                          s <= Math.round(course.rating)
                            ? "text-yellow-400"
                            : "text-gray-200"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Course Rating · 2.4K reviews
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursesDetailsPage;
