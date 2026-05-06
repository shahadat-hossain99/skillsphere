const NoCoursesFound = ({ search }) => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 text-center">
      {/* Icon */}
      <div className="w-20 h-20 rounded-2xl bg-teal-400/10 flex items-center justify-center mb-6">
        <span className="text-4xl">🔍</span>
      </div>

      {/* Text */}
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        No courses found
      </h3>
      <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
        We couldn&apos;t find any courses matching{" "}
        <span className="text-teal-500 font-medium">
          &ldquo;{search}&ldquo;
        </span>
        . Try a different keyword.
      </p>

      {/* Suggestions */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {["Web Development", "UI/UX Design", "Marketing", "React"].map((s) => (
          <span
            key={s}
            className="text-xs px-3 py-1.5 rounded-full border border-teal-500/30 text-teal-500 bg-teal-600/5 cursor-default"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NoCoursesFound;
