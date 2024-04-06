import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
  return (
    <div className=' mx-auto flex-grow flex items-center justify-between  min-h-[80px] mb-6 '>
      <div className='flex items-center justify-start '>
        <div className='h-[42px] w-[84px] relative'>
          <Image alt='terello' src={'/logo/terello.svg'}  fill />
          
        </div>
        <Link href={"/#"} className='mx-2'>Tshirts</Link>
        <Link href={"/#"} className='mx-2'>New Items</Link>
        </div>
        <div className='inline-flex cursor-pointer items-center'>
       <CiShoppingCart size={28} />
       <span className='mx-4'>6 $</span>
        </div>
    </div>
  )
}

export default Header