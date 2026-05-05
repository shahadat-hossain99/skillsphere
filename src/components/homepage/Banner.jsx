"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import Img from "../../assets/student.jpg";

export default function Banner() {
  return (
    <section className="pt-14 md:pt-28 max-w-7xl mx-auto px-6 pb-16">
      <div className="grid md:grid-cols-2 items-center gap-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Chip variant="bordered" className="mb-4 p-2 text-[14px]">
            Learn Anytime, Anywhere
          </Chip>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight ">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
              Upgrade Your Skills
            </span>{" "}
            🚀
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Upgrade your skills today and unlock new opportunities for growth,
            success, and a brighter future—start learning something new now!
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <Button color="primary" variant="outline">
              Explore Courses
            </Button>

            <Button color="primary">Join Now</Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-80 md:w-105 h-85 md:h-95 rounded-2xl overflow-hidden  shadow-lg">
            <Image
              src={Img}
              alt="student"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
