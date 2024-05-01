import React from "react";
import { getProductsdetail } from "../../../../queries/api/getProduct";
import Addbutton from "@/components/button/Addbutton";

const page = async (props: any) => {
  const detail = await getProductsdetail(props?.params?.slug);

  console.log(detail);


  return (
    <>
      {detail?.map((d: any) => (
        <div
          className="flex w-full  h-full p-4 border-[1px] rounded-md shadow-sm  gap-6  max-lg:flex-col "
          key={d?.id}
        >
          <img
            src={d?.images?.[0]?.url}
            className="max-h-[500px] w-full object-contain "
            alt="d;ldld"
          />
          <div className="pt-4 w-full  h-full" >
            <h1 className="text-3xl  font-bold my-1">{d?.name}</h1>
            <button className="  bg-blue-600 p-2 rounded-full text-white    text-sm font-semibold" >Rs. {d?.price}</button>
            <p className="my-1 ">{d?.description}</p>
            <hr className="my-4"></hr>
            {/* <button className="bg-blue-600 p-4 w-full text-white rounded-full text-center">Add To Cart</button> */}
            <Addbutton d={d} id={d?.id}/>
          </div>
        </div>
      ))}
    </>
  );
};

export default page;
