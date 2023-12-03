import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  increaseQuantity,
  deleteFromCart,
  decreaseQuantity,
} from "../../feature/CartSlice";

export function Cart({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart);

  const increase = (id) => {
    dispatch(increaseQuantity(id));
  };
  const Delete = (id) => {
    toast.error("Removed item from cart");
    dispatch(deleteFromCart(id));
  };
  const decrease = (id) => {
    if (item.quantity === 1) {
      dispatch(deleteFromCart(id));
      console.log(item);
    } else {
      dispatch(decreaseQuantity(id));
    }
  };
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section
          aria-labelledby="cart-heading"
          className="rounded-lg bg-white lg:col-span-8"
        >
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>
          <ul role="list" className="divide-y divide-gray-200">
            <div key={item.id} className="">
              <li className="flex py-6 sm:py-6 ">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                  />
                </div>
                {/* <Toaster position="top-center" /> */}

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <a
                            href={item.href}
                            className="font-semibold text-black"
                          >
                            {item.name}
                          </a>
                        </h3>
                      </div>
                      <div className="mt-1 flex text-sm">
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                      <div className="mt-1 flex items-end">
                        <p className="text-xs font-medium text-gray-500 line-through">
                          65000rs
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          &nbsp;&nbsp;{item.price} rs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <div className="mb-2 flex">
                <div className="min-w-24 flex">
                  <button
                    type="button"
                    className="h-7 w-7"
                    onClick={() => decrease(item.id)}
                  >
                    -
                  </button>
                  <span className="text-lg font-bold">
                    {Number(item.quantity)}
                  </span>
                  <button
                    type="button"
                    className="flex h-7 w-7 items-center justify-center"
                    onClick={() => increase(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="ml-6 flex text-sm">
                  <button
                    type="button"
                    className="flex items-center space-x-1 px-2 py-1 pl-0"
                    onClick={() => Delete(item.id)}
                  >
                    <Trash size={12} className="text-red-500" />
                    <span className="text-xs font-medium text-red-500">
                      Remove
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </ul>
        </section>
        {/* Order summary */}
      </form>
    </div>
  );
}
