import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="relative h-screen w-full">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="macbook"
      />
      <div className="absolute inset-0 flex  flex-col items-center justify-center  px-4  py-4 my-4">
        <h1 className="text-7xl font-bold text-white mb-4 block">
          The Laptop Store
        </h1>

        <p className="text-3xl font-bold text-white block">
          Buy your first laptop or desktop from us{" "}
        </p>
        <Link
          to="/explore"
          className="relative inline-block px-4 py-2 font-medium group my-4"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            Explore more
          </span>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
