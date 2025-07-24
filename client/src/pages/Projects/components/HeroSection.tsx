const HeroSection = () => {
  return (
    <div>
      <section className="text-center py-20 bg-gray-50">
        <span className="text-sm tracking-widest uppercase text-gray-500">
          Featured Work
        </span>
        <h2 className="text-4xl font-bold mt-2 text-gray-800">
          Our Work Speaks for Itself
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-600">
          From startups to enterprises, we've helped businesses transform ideas
          into reality. Explore our portfolio to see how we blend creativity,
          technology, and strategy to deliver results that matter.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition">
            View Projects
          </button>
          <button className="border border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition">
            Let's Build Yours
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
