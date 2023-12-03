import React, { useState, useEffect } from "react";

import { Cart } from "../Components/Navbar/Cart";

import { useSelector } from "react-redux";

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);
  return (
    <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {cart.length === 0
          ? "there is nothing in the cart please add some products to proceed further"
          : "Shopping Cart"}
      </h1>
      <section>
        {cart.map((cartItem) => (
          <Cart key={cartItem.id} item={cartItem} />
        ))}
      </section>
      <section
        aria-labelledby="summary-heading"
        className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
      >
        <h2
          id="summary-heading"
          className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
        >
          Price Details
        </h2>
        <div>
          <dl className=" space-y-1 px-2 py-4">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-800">
                Total Item {cart.length}
              </dt>
            </div>

            <div className="flex items-center justify-between border-y border-dashed py-4 ">
              <dt className="text-base font-medium text-gray-900">
                Total Amount
              </dt>
              <dd className="text-base font-medium text-gray-900">₹{total}</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
