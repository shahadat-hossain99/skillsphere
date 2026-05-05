"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "UI/UX Designer",
    image: "https://i.ibb.co.com/QFP1n0Xy/02.jpg",
    rating: 5.0,
    review:
      "The design courses are top-notch. I improved my skills a lot in a short time.",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Frontend Developer",
    image: "https://i.ibb.co.com/mVKBwwVc/01.jpg",
    rating: 5.0,
    review:
      "Amazing platform! The UI and learning experience are very smooth and beginner friendly.",
  },
  {
    id: 3,
    name: "Shank Khan",
    role: "React Learner",
    image: "https://i.ibb.co.com/rKfMY3PC/03.jpg",
    rating: 4.4,
    review:
      "I learned React very easily. The course structure is very well organized.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Full Stack Developer",
    image: "https://i.ibb.co.com/PZCggpcy/04.jpg",
    rating: 5.0,
    review:
      "Best platform for full stack learning. Everything is explained clearly.",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Backend Engineer",
    image: "https://i.ibb.co.com/JWr532PB/06.jpg",
    rating: 4.9,
    review: "Node.js and backend concepts are taught in a very simple way.",
  },
  {
    id: 6,
    name: "Bruce Lee",
    role: "Graphic Designer",
    image: "https://i.ibb.co.com/tM5hKRbz/05.jpg",
    rating: 5.0,
    review:
      "Loved the UI/UX design section. Very practical and useful lessons.",
  },
  {
    id: 7,
    name: "James Anderson",
    role: "Student",
    image: "https://i.ibb.co.com/Z1MQ0hfc/07.jpg",
    rating: 4.5,
    review: "Great learning experience for beginners like me.",
  },
  {
    id: 8,
    name: "Emeliano Martinez",
    role: "Web Developer",
    image: "https://i.ibb.co.com/mrTTXNFY/08.jpg",
    rating: 5.0,
    review: "The courses helped me land my first job as a web developer.",
  },
  {
    id: 9,
    name: "Daniel Thomas",
    role: "Software Engineer",
    image: "https://i.ibb.co.com/KxLrwMpq/09.jpg",
    rating: 5.0,
    review: "Excellent content and very structured learning path.",
  },
  {
    id: 10,
    name: "Jason Watson",
    role: "UI Designer",
    image: "https://i.ibb.co.com/PZCggpcy/04.jpg",
    rating: 5.0,
    review: "Very creative and practical design lessons. Highly recommended!",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="w-72 mx-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            size={14}
            className={
              i < Math.round(review.rating)
                ? "text-yellow-400"
                : "text-gray-200"
            }
          />
        ))}
        <span className="text-xs text-gray-400 ml-1">{review.rating}</span>
      </div>

      {/* Review text */}
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
        &ldquo;{review.review}&ldquo;
      </p>

      {/* User info */}
      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-gray-100">
          <Image
            src={review.image}
            alt={review.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{review.name}</p>
          <p className="text-xs text-teal-400">{review.role}</p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="w-11/12 mx-auto mt-40 mb-20 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
          Student{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
            Reviews
          </span>
        </h2>
        <p className="text-gray-500 mt-3">What our students say about us</p>
      </div>

      <Marquee pauseOnHover gradient={false} speed={60}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Marquee>
    </section>
  );
};

export default Reviews;
