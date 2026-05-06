import React from "react";
import CourseCard from "./CourseCard";

const NewReleases = async () => {
  const res = await fetch(
    "https://skillsphere-grow-in-public.vercel.app/data.json",
    {
      cache: "no-store",
    },
  );

  const courses = await res.json();

  const NewReleasedCourses = courses.filter(
    (course) => course.rating < 4.7 && course.rating >= 4.2,
  );

  return (
    <section className="w-11/12 mx-auto mt-20 md:mb-14 mb-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#0f172a]">
          🔥New{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
            Released
          </span>{" "}
          Courses
        </h2>
        <p className="text-gray-500 mt-2">
          Most Recently Launched courses by Our Top Instructors
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {NewReleasedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
