import React from "react";
import CoursesCard from "./CourseCard";
import { Button } from "@heroui/react";
import Link from "next/link";

const TopCourses = async () => {
  const res = await fetch(
    "https://skillsphere-grow-in-public.vercel.app/data.json",
    {
      cache: "no-store",
    },
  );
  const courses = await res.json();

  const topCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section className="mt-14 md:mt-24  py-10 md:py-16">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <h2 className="text-xl md:text-4xl font-bold text-[#0f172a]">
              Our Top{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
                Courses
              </span>
            </h2>

            <p className="text-gray-500 text-sm md:text-base mt-2">
              Most popular and highly rated courses by our students
            </p>

            <div className="w-16 h-1 bg-linear-to-r from-blue-600 to-teal-500 mt-3 rounded-full"></div>
          </div>

          <Link href="/courses">
            <Button
              variant="light"
              className="text-teal-500 font-medium hover:bg-teal-200/10"
            >
              View All →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topCourses.map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
