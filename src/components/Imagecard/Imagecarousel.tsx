"use client"

import { useGSAP } from '@gsap/react'
import React, { useEffect, useState } from 'react'


import gsap from "gsap";
import { Button } from 'antd';



interface Iprops{
    images:{
        url:string
        id:string

    }[]

}[]
const Imagecarousel = ({images}:Iprops) => {
   

    useGSAP(() => {
        // gsap code here...
        gsap.fromTo("#box", {y: 20},{y:0}); // <-- automatically reverted
      
      },[])

    const [index,setIndex]=useState(0)

    console.log(index,"fkfkf")

    useEffect(()=>{
        const timer = setTimeout(() => {
            const nextImage = (index + 1) % images.length
            setIndex(nextImage)
          }, 3000)
      
          return () => clearTimeout(timer)

    },[images, index])
  return (
   <>
   <img id="box" src={images?.[index]?.url} className="w-full transition-all ease-in-out duration-150 h-full"/>
   <div className='absolute right-4 bottom-4 flex items-center'>
   {
    images.length>=2 && images?.map((D,i)=>{
      let imageindex=i
     
      
        return <div key={i} className={`bg-black duration-200  h-2 w-2 rounded-full m-1 ease-in-out transition  ${index==imageindex && "bg-white"}`}></div> 
      
    })
   }
  
   </div>
   </>
  )
}   

export default Imagecarousel