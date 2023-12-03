import React from "react";
import { useNavigate } from "react-router-dom";

function CardPage({ product }) {
  const navigate = useNavigate();
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {product.map((items, id) => (
        <div key={id} className="rounded-md border">
          <img
            src={items.image}
            alt={items.title}
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {items.name}
            </h1>

            <div className="mt-4">
              <p>ratings : {items.rating}</p>
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <p> price : {items.price} rs</p>
            </div>

            <button
              onClick={() => navigate(`/explore/${items.id}`)}
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Discover more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardPage;
