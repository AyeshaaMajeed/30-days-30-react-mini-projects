// Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg from "./assets/bg.jpg";
import posts from "./posts";

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="relative w-full h-80 bg-gray-200">
        <img
          src={bg}
          alt="Background image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div>
        <h3 className="font-bold text-4xl mb-4 mt-1">Latest blogs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, showAll ? posts.length : 3).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl mx-auto max-w-md shadow-md overflow-hidden md:max-w-2xl m-3"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="uppercase text-sm tracking-wide font-semibold text-indigo-500">
                  Case study
                </div>
                <a
                  href="#"
                  className="text-xl font-bold leading-tight hover:underline"
                >
                  {post.title}
                </a>
                <p className="mt-2 text-gray-500">
                  {post.content.substring(0, 150)}...
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
          <div className="justify-center items-center">
            <button
              onClick={toggleShowAll}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 mb-4"
            >
              {showAll ? "See Less" : "See All"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
