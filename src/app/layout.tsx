"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Footercomp } from "@/components/footer/Footer";
import { CartProvider } from "react-use-cart";
import { useEffect } from "react";

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
        <body>
        
          <main className="mx-auto max-md:mx-6 max-w-screen-xl pb-8 ">
          <Header />
            <main className="px-4 sm:px-4 ">{children}</main>
           
          </main>
        </body>
      </CartProvider>
    </html>
  );
}
