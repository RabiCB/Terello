"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useCart } from "react-use-cart";

const CartItems = () => {
  const { items, cartTotal, addItem, updateItemQuantity,removeItem,totalItems } = useCart();
  const router=useRouter()

  if(totalItems===0)return <div className="flex items-center max-h-screen mt-[5%] justify-center w-full text-lg font-bold flex-col ">
    <p>Your Cart Is Empty</p> 
    <button onClick={()=>{
     router.push("/")
    }}  className="text-xs bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-full mt-4">Add Items To Cart</button>
    </div>
  return (
    <>
      <div className="my-2 text-right font-bold">
        Sub total:<span className="text-indigo-600"> Rs. {cartTotal}</span>
      </div>
    
      <div className="flex flex-col  gap-6">
        {items?.map((D: any) => (
          <>
          <div
            className="border-[1px] min-h-[100px] relative shadow-md border-gray-300  rounded-[15px] p-4 inline-flex max-[420px]:flex-col max-[420px]:items-center"
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
             
            </div>
             <div className="mt-8 ml-2 text-gray-500 cursor-pointer">
             <IoIosArrowUp
                onClick={() => updateItemQuantity(D.id, D.quantity + 1)}
              />
              <IoIosArrowDown
                onClick={() => updateItemQuantity(D.id, D.quantity - 1)}
              />
             
            </div>

            <div className="absolute right-4 align-middle">
              <AiFillDelete onClick={()=>removeItem(D.id)} size={24} className="text-red-500 cursor-pointer"/>
            </div>

          </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CartItems;
