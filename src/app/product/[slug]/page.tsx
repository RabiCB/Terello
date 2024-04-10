import React from 'react'
import { getProductsdetail } from '../../../../queries/api/getProduct'

const page = async(props:any) => {
   const detail=await getProductsdetail(props?.params?.slug)

   console.log(detail)
  return (
    <>
    {
      detail?.map((d:any,index:string)=>(
        <div className="bg-gray-300 rounded-md p-4 flex flex-col items-center cursor-pointer" key={index}>
          {
            d?.description
          }
        </div>
      ))
    }
    </>
  )
}

export default page