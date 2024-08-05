import React from "react";
import { Link, useParams } from "react-router-dom";
import posts from "./posts";

const Blog = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row w-full my-8 p-4">
      <div className="md:w-2/3 p-4">
        <h2 className="text-3xl font-bold my-4">{post.title}</h2>
        <p className="text-gray-700 mb-8">{post.content}</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
      <div className="md:w-1/3 p-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto object-cover rounded"
        />
      </div>
    </div>
  );
};

export default Blog;
