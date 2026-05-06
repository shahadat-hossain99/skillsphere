import Banner from "@/components/homepage/Banner";
import TopCourses from "@/components/homepage/Courses/TopCourses";
import Instructors from "@/components/homepage/Instractors";
import Reviews from "@/components/homepage/Review";
import LearningTips from "@/components/homepage/Tips";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <TopCourses />
      <LearningTips />
      <Instructors />
      <Reviews />
    </>
  );
}
