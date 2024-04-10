import Image from "next/image";

import { getProducts } from "../../queries/api/getProduct";
import Link from "next/link";
import Imagecarousel from "@/components/Imagecard/Imagecarousel";



export default async function  Home() {
const data=await getProducts()
console.log(data.images)
  
  return (
    <div className="px-4 sm:px-4 ">
     
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
        {
          data?.map((d:any,index:string)=>(
            <Link href={`/product/${d?.slug}`} className="bg-gray-300 rounded-md relative p-4 flex flex-col items-center cursor-pointer" key={index}>
             
              {/* <img src={d?.images?.[0]?.url} className="w-full h-full"/> */}
              <Imagecarousel images={d?.images}  />
           
              <p>{d?.name}</p>
              <p> Rs. {d?.price}</p>
            </Link>
          ))
        }
      
      </div>
    </div>
  );
}
