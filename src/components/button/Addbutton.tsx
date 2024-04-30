"use client"
import React from 'react'
import { useCart } from 'react-use-cart'

const Addbutton = ({d}:any) => {
    const {addItem}=useCart()
  return (
     <button onClick={()=>addItem(d)} className="bg-blue-600 p-4 w-full text-white rounded-full text-center">Add To Cart</button> 
  )
}

export default Addbutton