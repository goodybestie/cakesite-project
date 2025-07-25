"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import OrderFormModal from "@/app/ordersection/page";
import Link from "next/link";


export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);


  useEffect(() => {
    document.title = "MK'S EXQUISITE CAKES";
  }, []);

  return (
    <main className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-hero text-white px-4 py-20">
        <img
          src="headerbackground.jpg"
          alt="Beautiful custom cakes"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl  font-bold text-foreground   mb-6"
          >
            MK'S EXQUISITE <span className="text-amber-600"> CAKES </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-amber-950  mb-8 max-w-2xl mx-auto"
          >
           Artisan cakes crafted with love, passion, and the finest ingredients. 
            Every bite tells a story of perfection..
          </motion.p>
          <div  className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className=" bg-amber-600 hover:bg-amber-600 text-white font-semibold
             min-w-[200px] py-3 px-6 rounded-[5px] text-lg cursor-pointer shadow-lg"
            // onClick={() => window.location.href = "/ordersection"}
            onClick={handleOpenModal}
          >
            
            Place Order
          </motion.button>
          <Link href="/menu">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className=" bg-white hover:text-amber-600
             outline-amber-600 outline-2 text-amber-600 font-semibold
             min-w-[200px] py-3 px-6 rounded-[5px] text-lg shadow-lg cursor-pointer"
          >

            Get Started
          </motion.button>
          </Link>
          </div>
       

        <div className=" mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">500+</div>
              <div className="text-sm text-amber-950">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">50+</div>
              <div className="text-sm text-amber-950">Cake Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">5</div>
              <div className="text-sm text-amber-950">Star Rating</div>
            </div>
          </div>
           </div>
      </section>

    <OrderFormModal open={isModalOpen} handleClose={handleCloseModal} />
      
    </main>
  );
}
