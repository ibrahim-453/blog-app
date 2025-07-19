import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-yellow-300">MyBlog</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-100">
          Discover amazing stories, insightful articles, and the latest trends in tech, design, and lifestyle.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            to="/blogs"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded shadow hover:bg-yellow-300 transition"
          >
            Read Blogs
          </Link>
          <Link
            to="/create"
            className="px-6 py-3 bg-white text-cyan-700 font-semibold rounded shadow hover:bg-gray-100 transition"
          >
            Write a Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
