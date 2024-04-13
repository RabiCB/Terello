"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "react-use-cart";
const Header = () => {
  const [query, setQuery] = useState("");
  const [routing, setRouting] = useState(false);
  const router = useRouter();
  const [isMounted,setIsmounted]=useState(false)

  const { totalItems,cartTotal } = useCart();

  const handleSearch = () => {
    router.replace(`/search?query=${query}`);
  };
  useEffect(()=>{
    setIsmounted(true)
    return ()=>{
      setIsmounted(false)
    }
  },[])


  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" && query) {
      handleSearch();
    }
  };
  return (
    <div className=" mx-auto flex-grow flex items-center justify-between  min-h-[80px] mb-6 ">
      <div className="flex items-center justify-start ">
        <Link href={"/"} className="h-[42px] w-[84px] relative">
          <Image alt="terello" src={"/logo/terello.svg"} fill />
        </Link>
        <Link href={"/#"} className="mx-2">
          Tshirts
        </Link>
        <Link href={"/#"} className="mx-2">
          New Items
        </Link>
      </div>
      <div className="">
        <input
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress as any}
          placeholder="Search"
          className="border-[1px] min-h-[36px] text-sm text-gray-600 border-gray-300 rounded-[9px] py-1 px-2 min-w-[260px] outline-none max-md:hidden"
        />
      </div>
      <Link href="/cart" className="inline-flex cursor-pointer items-center">
        <div className="relative">
        <CiShoppingCart size={28} />
        {isMounted &&<span className="absolute top-[-12px] right-[-4px] text-sm text-gray-600">
          {totalItems}
        </span>}
        </div>
        
       
      </Link>
    </div>
  );
};

export default Header;
