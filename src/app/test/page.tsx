import Imagecarousel from "@/components/Imagecard/Imagecarousel";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { getProducts } from "../../../queries/api/getProduct";
import AddToButton from "@/components/Addtocart/Button";
import { HomeCarousel } from "@/components/Carousel/HomeCarousel";

const Page = async () => {
  const data = await getProducts();

  return (
    <div className="flex h-[calc(100vh-80px)] gap-4 flex-grow  overflow-y-auto">
      <div className=" max-lg:hidden   p-2 min-w-[240px] overflow-hidden ">
        <div className="h-full left overflow-y-auto p-2">
          {[...Array(100)].map((_, index) => (
            <p key={index}>Center Content {index + 1}</p>
          ))}
        </div>
      </div>
      <div
        style={{
          scrollbarWidth: "none",
        }}
        className=" flex-1 overflow-y-scroll bg-gray-400 p-8 mx-auto flex flex-col gap-4 items-center "
      >
        <div className="w-full">
          <HomeCarousel />
        </div>
        {data?.map((d: any, index: string) => (
          <div
            key={index}
            className="border-[1px] min-w-[60%] max-md:w-[100%]  border-gray-300 rounded-[15px] p-2 flex flex-col items-center cursor-pointer"
          >
            <Link
              className="flex flex-col items-center"
              href={`/product/${d?.slug}`}
            >
              <img src={d?.images?.[0]?.url} className="w-full max-h-[320px]" />
              {/* <Imagecarousel images={d?.images} /> */}

              <p>{d?.name}</p>
              <p> Rs. {d?.price}</p>
            </Link>
            <AddToButton data={d} />
          </div>
        ))}
      </div>
      <div className=" w-[240px] p-2 overflow-hidden max-md:hidden ">
        <div className="h-full left overflow-y-auto  ">
          {[...Array(100)].map((_, index) => (
            <p key={index}>Center Content {index + 1}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
