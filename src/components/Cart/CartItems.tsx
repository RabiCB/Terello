"use client";
import Link from "next/link";
import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { useCart } from "react-use-cart";

const CartItems = () => {
  const { items, cartTotal, addItem, updateItemQuantity } = useCart();
  return (
    <>
      <p className="my-2 text-right font-bold">
        Sub total:<span className="text-indigo-600"> Rs. {cartTotal}</span>
      </p>
      <div className="flex flex-col  gap-6">
        {items?.map((D: any) => (
          <div
            className="border-[1px] min-h-[100px] shadow-md border-gray-300  rounded-[15px] p-4 inline-flex max-[420px]:flex-col max-[420px]:items-center"
            key={D.id}
          >
            <Link href={`/product/${D.slug}`}>
              <img
                id="box"
                src={D?.images?.[0]?.url}
                alt="image"
                className="min-w-[80px] transition-all ease-in-out duration-150 h-[80px]"
              />
            </Link>
            <div className="mt-4 ml-2">
              <p className=" font-semibold">{D.name}</p>
              <p className=" "> Rs. {D.price}</p>
              <IoAddOutline
                onClick={() => updateItemQuantity(D.id, D.quantity + 1)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItems;
