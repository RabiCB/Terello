"use client"

import React, { useEffect, useState } from 'react'

interface Iprops{
    images:{
        url:string
        id:string

    }[]

}[]
const Imagecarousel = ({images}:Iprops) => {

    console.log(images)

    const [index,setIndex]=useState(0)

    console.log(index)

    useEffect(()=>{
        const timer = setTimeout(() => {
            const nextImage = (index + 1) % images.length
            setIndex(nextImage)
          }, 3000)
      
          return () => clearTimeout(timer)

    },[images, index])
  return (
   <>
   <img src={images?.[index]?.url} className="w-full transition-all ease-in-out duration-150 h-full"/>4
   <div className='absolute right-4 bottom-4 flex items-center'>
   {
    images.length>=2 && images?.map((D,i)=>{
        return <div key={i} className={`bg-white duration-200  h-2 w-2 rounded-full m-1 ease-in-out transition  ${index===i ? 'bg-black':''}`}></div> 
      
    })
   }
   </div>
   </>
  )
}   

export default Imagecarousel