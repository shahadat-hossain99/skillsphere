import React from "react";

import i01 from "../../assets/i-01.jpg";
import i02 from "../../assets/i-02.jpg";
import i03 from "../../assets/i-03.jpg";
import i04 from "../../assets/i-04.jpg";
import InstructorCard from "./InstractorCard";

const instructors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Full Stack Web Developer",
    image: i01,
    rating: 4.9,
    experience: "5+ Years",
    category: "Development",
    bio: "Specialized in building scalable full-stack web applications using modern JavaScript frameworks and cloud technologies.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Frontend Engineer (React Specialist)",
    image: i02,
    rating: 4.8,
    experience: "4+ Years",
    category: "Development",
    bio: "Expert in React ecosystem, focused on building high-performance and accessible user interfaces with clean architecture.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "UI/UX Designer",
    image: i03,
    rating: 4.7,
    experience: "3+ Years",
    category: "Design",
    bio: "Designs intuitive and user-centered digital experiences with a strong focus on usability, aesthetics, and interaction design.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Backend Engineer (Node.js Expert)",
    image: i04,
    rating: 4.8,
    experience: "6+ Years",
    category: "Development",
    bio: "Builds robust backend systems and APIs using Node.js, focusing on performance, security, and scalable architecture.",
  },
];

const Instructors = () => {
  return (
    <section className="w-11/12 mx-auto mt-24 mb-24">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
          Top{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
            Instructors
          </span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
          Learn from industry experts with real-world experience and proven
          teaching systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </section>
  );
};

export default Instructors;
