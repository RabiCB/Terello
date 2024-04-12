"use client";

import { Button, Spin } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const AddToButton = ({ data }: any) => {
  const { addItem, items } = useCart();

  const [isIncart, setIsincart] = useState(false);
  const [checking, setChecking] = useState(false);

  const router = useRouter();

 

  useEffect(() => {
    setChecking(true);
    if (items.some((item) => item.id === data.id)) {
      setIsincart(true);
    }
  }, [items, data]);


  return (
    <>
      {checking ? (
        <>
          {isIncart ? (
            <Button
              type="primary"
              className="mt-2"
              onClick={() => {
                router.push("/cart");
              }}
            >
              View Cart
            </Button>
          ) : (
            <Button
              type="default"
              className="mt-2"
              onClick={() => {
                addItem(data);
              }}
            >
              Add to cart
            </Button>
          )}
        </>
      ):<div className="min-h-[36px] py-1 px-2 mt-2 rounded-md w-[96px] animate-pulse bg-slate-300">
      
    </div>}
    </>
  );
};

export default AddToButton;
