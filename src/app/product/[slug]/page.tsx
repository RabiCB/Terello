import React from "react";
import { getProductsdetail } from "../../../../queries/api/getProduct";

const page = async (props: any) => {
  const detail = await getProductsdetail(props?.params?.slug);

  console.log(detail);
  return (
    <>
      {detail?.map((d: any) => (
        <div
          className="grid grid-cols-2 gap-8 max-md:grid-cols-1  "
          key={d?.id}
        >
          <img
            src={d?.images?.[0]?.url}
            className="h-full w-full"
            alt="d;ldld"
          />
          <div >
            <h1 className="text-3xl  font-bold my-1">{d?.name}</h1>
            <h1 className="text-xl  font-semibold my-1">Rs. {d?.price}</h1>
            <p className="my-1 ">{d?.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default page;
