import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | SkillSphere",
  description:
    "Learn about SkillSphere — a modern online learning platform dedicated to helping you grow your skills in Web Development, Design, Marketing, and more.",
};

const stats = [
  { value: "10K+", label: "Active Students" },
  { value: "200+", label: "Expert Courses" },
  { value: "50+", label: "Top Instructors" },
  { value: "95%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: "🎯",
    title: "Goal-Oriented Learning",
    description:
      "Every course is designed with clear outcomes. We help you build skills that directly translate to real-world results.",
  },
  {
    icon: "🌍",
    title: "Learn From Anywhere",
    description:
      "Our platform is fully accessible on any device, so you can learn at your own pace — wherever life takes you.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Instructors",
    description:
      "All instructors are industry professionals with years of hands-on experience in their fields.",
  },
  {
    icon: "🤝",
    title: "Community Driven",
    description:
      "Join a thriving community of learners, collaborate on projects, and grow together with like-minded people.",
  },
  {
    icon: "🚀",
    title: "Career Focused",
    description:
      "We bridge the gap between learning and employment with practical, job-ready curriculum.",
  },
  {
    icon: "🔒",
    title: "Trusted & Secure",
    description:
      "Your data and progress are safe with us. We use industry-standard security to protect every learner.",
  },
];

const team = [
  {
    name: "Alex Carter",
    role: "Founder & CEO",
    image: "/1.1.jpg",
    bio: "EdTech visionary with 10+ years building learning platforms.",
  },
  {
    name: " Johnson Roy",
    role: "Head of Curriculum",
    image: "/2.2.jpg",
    bio: "Former educator turned full-stack developer and course designer.",
  },
  {
    name: "Michael Brown",
    role: "Lead Engineer",
    image: "/3.1.jpg",
    bio: "Backend architect passionate about scalable education systems.",
  },
  {
    name: "Shawn Lee",
    role: "Head of Design",
    image: "/4.1.jpg",
    bio: "UI/UX expert crafting intuitive learning experiences since 2015.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-white via-blue-50/30 to-teal-50/40 py-24 px-6">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
            🎓 About SkillSphere
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Empowering Learners{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
              Worldwide
            </span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            SkillSphere is a modern online learning platform built for the next
            generation of creators, developers, designers, and marketers. We
            believe great education should be accessible to everyone.
          </p>
          <Link
            href="/courses"
            className="inline-block px-8 py-3 bg-linear-to-r from-blue-600 to-teal-500 text-white font-medium rounded-xl shadow-lg shadow-blue-200 hover:opacity-90 transition"
          >
            Explore Courses →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
                {value}
              </p>
              <p className="text-gray-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Making World-Class Education{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
                Accessible to All
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              We started SkillSphere with a simple belief — that anyone,
              anywhere, should have access to high-quality learning. Whether you
              want to switch careers, up-skill, or explore a new passion, we
              have a course for you.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our courses are taught by real industry professionals and
              structured around practical, hands-on projects so you can apply
              what you learn from day one.
            </p>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-blue-400/10 to-teal-400/10 rounded-3xl blur-xl scale-105 pointer-events-none" />
            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl p-8 space-y-5">
              {[
                {
                  icon: "📚",
                  label: "Web Development",
                  students: "3.2K students",
                },
                {
                  icon: "🎨",
                  label: "UI/UX Design",
                  students: "2.1K students",
                },
                {
                  icon: "📢",
                  label: "Digital Marketing",
                  students: "1.8K students",
                },
                {
                  icon: "📊",
                  label: "Data Science",
                  students: "1.4K students",
                },
              ].map(({ icon, label, students }) => (
                <div
                  key={label}
                  className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{icon}</span>
                    <span className="font-medium text-slate-800 group-hover:text-blue-600 transition">
                      {label}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-100">
                    {students}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-linear-to-br from-blue-50/40 to-teal-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
                Stand For
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{icon}</span>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              The People Behind{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">
                SkillSphere
              </span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              A passionate team of educators, engineers, and designers working
              to make learning better.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(({ name, role, image, bio }) => (
              <div
                key={name}
                className="group text-center bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 text-base">
                    {name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mt-0.5 mb-2">
                    {role}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-linear-to-r from-blue-600 to-teal-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of learners already growing their skills on
            SkillSphere.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/courses"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
