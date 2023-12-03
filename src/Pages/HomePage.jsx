import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center  justify-center">
      <h1 className="text-7xl font-bold text-center">The Laptop Store</h1>
      <Link className="border-black px-5 mx-5" to="/explore">
        Explore more
      </Link>
    </div>
  );
}

export default HomePage;
