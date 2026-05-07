const Loading = () => {
  return (
    <section className="min-h-screen py-10 md:py-16">
      <div className="text-center mb-8 md:mb-12 px-4 animate-pulse">
        <div className="h-10 w-72 mx-auto rounded-lg bg-gray-200 mb-4"></div>
        <div className="h-4 w-96 max-w-full mx-auto rounded bg-gray-200 mb-6"></div>

        <div className="mt-6 flex justify-center">
          <div className="flex w-full max-w-md rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="h-12 flex-1 bg-gray-100"></div>
            <div className="h-12 w-28 bg-teal-200"></div>
          </div>
        </div>

        <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gray-200"></div>
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="h-44 bg-gray-200 animate-pulse"></div>

            <div className="p-4 space-y-3">
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>

              <div className="pt-3 flex justify-between items-center">
                <div className="h-5 w-16 bg-gray-200 rounded"></div>
                <div className="h-9 w-24 bg-teal-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loading;
