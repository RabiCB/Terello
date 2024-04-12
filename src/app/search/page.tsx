import React from "react";
import { getSearchResults } from "../../../queries/api/getProduct";
import Searchcardskeleton from "@/components/skeleton/Searchcardskeleton";
import Link from "next/link";
import { Button } from "antd";
import AddToButton from "@/components/Addtocart/Button";

const Page = async (props: any) => {
  const data = await getSearchResults(props?.searchParams?.query);
  
  const q = props.searchParams?.query;


  return (
    <>
      <p className="my-2 mx-1 font-semibold">Results for : {q}</p>
      <div className="flex flex-col  gap-6">
        {data?.map((D: any) => (
          <div
            className="border-[1px] min-h-[160px] shadow-md border-gray-300  rounded-[15px] p-4 inline-flex max-[420px]:flex-col max-[420px]:items-center"
            key={D.id}
          >
            <Link href={`/product/${D.slug}`}>
              <img
                id="box"
                src={D?.images?.[0]?.url}
                alt="image"
                className="min-w-[160px] transition-all ease-in-out duration-150 h-[160px]"
              />
            </Link>
            <div className="mt-4 ml-2">
              <p className=" font-semibold">{D.name}</p>
              <p className=" "> Rs. {D.price}</p>
             <AddToButton data={D}/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
