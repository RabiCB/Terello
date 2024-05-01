"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Addbutton = ({ d,id }: any) => {
  console.log(id,"kfkfk")
  const [isIncart, setIsincart] = useState(false);
  const [checking, setChecking] = useState(false);
  const { items } = useCart();

console.log(d)
  useEffect(() => {
    setChecking(true);
    if (items.some((item) => item.id === id)) {
      setIsincart(true);
    }
  }, [items,id]);
  const { addItem } = useCart();
  const router = useRouter();
  return (
    <>
    {checking &&<button
      onClick={() => {
        addItem(d);
        if (isIncart) {
          router.push("/cart");
        }
      }}
      className={` bg-blue-600  p-4 w-full text-white rounded-full text-center`}
    >
      {!isIncart ? "Add To Cart" : "View Cart"}
    </button>}
    </>
  );
};

export default Addbutton;
