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
  const [isMounted, setIsmounted] = useState(false);

  const { totalItems, cartTotal } = useCart();

  const handleSearch = () => {
    router.replace(`/search?query=${query}`);
  };
  useEffect(() => {
    setIsmounted(true);
    return () => {
      setIsmounted(false);
    };
  }, []);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" && query) {
      handleSearch();
    }
  };
  return (
    <div className="px-4   w-full  flex items-center justify-between  h-[80px]  ">
      <div className="flex items-center justify-start ">
        <Link href={"/"} className="h-[42px] w-[84px] relative">
          <Image alt="terello" src={"/logo/terello.svg"} fill />
        </Link>
        <Link href={"/#"} className="mx-2">
         All
        </Link>
        <Link href={"/#"} className="mx-2">
        Tshirts
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        <input
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress as any}
            placeholder="Search"
            className="border-[1px] min-h-[36px] text-sm text-gray-600 border-gray-300 rounded-[9px] py-1 px-8  outline-none max-md:hidden"
          />
        <Link href="/cart" className="relative">
          <CiShoppingCart size={28} />
          {isMounted &&<p className="absolute right-0 top-[-12px]">{totalItems}</p>}
          
        </Link>
      </div>
    </div>
  );
};

export default Header;
