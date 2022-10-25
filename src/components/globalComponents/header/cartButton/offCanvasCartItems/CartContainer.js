import React from "react";
import { useCartContext } from "../../../contexts/cartContext/CartContext";
import CartItems from "./CartItems";
import './offCanvasStyles.css';
import { NumericFormat } from 'react-number-format';

function CartContainer() {
  const { cartItemsArray, itemCounts } = useCartContext();

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
        <div className="flex flex-col gap-2 ">
          {cartItemsArray.map((item) => {
            return (
              <div className="h-20 w-full bg-black rounded-lg p-3">
                <CartItems />
              </div>
            );
          })}
        </div>
      </div>
      <div className="offcanvas-body  pl-4 pr-4 pt-2 pb-2 bottom-0">
        <div className="h-14 w-full bg-orange-300 flex gap-10 items-center rounded-lg p-3 ">
          <div>
            <span className="text-base font-bold"> {itemCounts} </span>{" "}
            <span className="font-semibold text-lg "> &nbsp;items</span>
          </div>
          <div>
            <span className="text-base font-bold">Total</span><span className="text-base font-bold">&nbsp; <NumericFormat value={10000} displayType={'text'} thousandSeparator={true} prefix={''} />
</span><span className="taka-icon "> &nbsp;৳ </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
