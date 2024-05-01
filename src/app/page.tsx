import Image from "next/image";

import { getProducts } from "../../queries/api/getProduct";
import Link from "next/link";
import Imagecarousel from "@/components/Imagecard/Imagecarousel";
import { Button } from "antd";
import AddToButton from "@/components/Addtocart/Button";
import { Metadata } from "next";
import { HomeCarousel } from "@/components/Carousel/HomeCarousel";
import Drawer from "@/components/Drawer/Drawer";


export const metadata: Metadata = {
  title:"Terello your shopping site",
  verification:{
    google:"XIAahfWG8YRWavFqXIBlRtVhromJbmrAf8bnRmfZIao"
  },
  description:"Terello the best shopping site"
}
 
export default async function Home() {
  const data = await getProducts();
  console.log(data.images);

  //typescript intergartion left

  return (
    <>
    <HomeCarousel/>
   
      <div className="grid  grid-cols-6 gap-6 max-xl:grid-cols-4 max-lg:grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1">
        {data?.map((d: any, index: string) => (
          <div
            key={index}
            className="border-[1px] w-full h-full border-gray-300 rounded-[15px] p-2 flex flex-col items-center cursor-pointer"
          >
            <Link className="flex flex-col items-center" href={`/product/${d?.slug}`}>
              {/* <img src={d?.images?.[0]?.url} className="w-full h-full"/> */}
              <Imagecarousel images={d?.images} />

              <p>{d?.name}</p>
              <p> Rs. {d?.price}</p>
            </Link>
            <AddToButton data={d} />
          </div>
        ))}


      </div>
    </>
  );
}
