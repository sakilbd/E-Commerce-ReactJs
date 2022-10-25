import React from "react";
import { useCartContext } from "../../../contexts/cartContext/CartContext";
import CartItems from "./CartItems";

function CartContainer() {
  const { cartItemsArray } = useCartContext();

  cartItemsArray.map((item) => {});

  return (
    <div
      className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header flex items-center justify-between p-4">
        <h5
          className="offcanvas-title mb-0 leading-normal font-semibold"
          id="offcanvasRightLabel"
        >
          Cart
        </h5>
        <button
          type="button"
          className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
        {cartItemsArray.map((item) => {
          return (
            <div className="h-32 w-full bg-black p-5">
              <CartItems />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartContainer;
