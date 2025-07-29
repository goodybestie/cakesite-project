"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useCart } from "@/context/page";
import { useState } from "react";
import OrderFormModal from "@/app/ordersection/page";
import CartPageModal from "../cart/page";


export default function BackButton() {
const {cartCount} = useCart()
const [isModalOpen, setIsModalOpen] = useState(false);



  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
  // console.log("Open cart modal");


  return (
    <>
  <div className="flex justify-between items-center px-4 py-2">
  <Link href="/herosection">
    <button
      className="flex items-center gap-2 text-black px-4 py-2 
                 hover:bg-amber-50 font-bold text-sm transition cursor-pointer rounded"
    >
      <AiOutlineArrowLeft className="text-base" />
      Back to Home
    </button>
  </Link>

 <button className="relative px-4 py-3 cursor-pointer rounded-md hover:bg-amber-50 transition"
  onClick={handleOpenModal}>
  <FiShoppingCart className="text-2xl text-amber-500"  />
  {cartCount > 0 && (
    <div className="absolute -top-1 -right-1 bg-amber-500 text-white text-[10px] font-bold rounded-full px-2 py-0.5">
      {cartCount}
    </div>
  )}
</button>
</div>
<div>
<CartPageModal open={isModalOpen} handleClose={handleCloseModal} />
</div>
</>
  );
}
