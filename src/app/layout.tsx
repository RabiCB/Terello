"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Footercomp } from "@/components/footer/Footer";
import { CartProvider } from "react-use-cart";
import { useEffect } from "react";
import { Drawer } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  useEffect(()=>{
   scrollTo(0,0)
   
  },[])
  return (
    <html lang="en">
      <CartProvider>
        <body className=" max-w-screen-2xl mx-auto min-h-screen px-4 ">
  
      
          <Header />
          
          
           {children}
           
         
        </body>
      </CartProvider>
    </html>
  );
}
