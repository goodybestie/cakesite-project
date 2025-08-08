'use client';

import React, { useContext, useState } from "react";
import BackButton from "@/app/backbutton/page";
import { menuImages } from "@/const/menueimage";
import { FiSearch, FiHeart } from "react-icons/fi";
import { div } from "framer-motion/client";
import { useCart } from "@/context/page";

// Define the CartContext type (adjust as needed to match your actual context)


export default function MenuPage() {
  const categories = ["All", "Chocolate", "Wedding", "Birthday", "CupCakes", "speciality"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewmode, setViewMode] = useState('grid');
  const [searchItem, setSearchItem] = useState('');
  // const [isLiked, setIsLiked] = useState(false)

  
  const filteredMenu = menuImages.filter((item) => {
    const matchCategory = 
    selectedCategory === "All" || item.category === selectedCategory;
  
    const searchText = searchItem.toLowerCase()
    const matchSearch = item.name.toLowerCase().includes(searchText)
    || item.description.toLowerCase().includes(searchText);
  
    return matchCategory && matchSearch
  })
    const {addToCart, isInCart, toggleLiked, isLiked }  = useCart()

    
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     // You can add any additional logic here if needed
//   }
// }



  // const filteredMenu =
  //   selectedCategory === "All"
  //     ? menuImages
  //     : menuImages.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {/* Back Button */}
      <BackButton />

      <div className="px-6 py- ">
        {/* Header */}
        <div className="mb-8 ">
        <h1 className="text-4xl md:text-5xl font-bold font-sans text-center">Our Delicious Cakes</h1>
        <p className="text-center mt-4 text-[20px] md:text-[16px]  text-[#7e7167]">
          Discover our collection of handcrafted cakes, made with love and the finest ingredients
        </p>

        </div>
        {/* search icon */}
      <div className="bg-white p-4 flex flex-wrap items-center gap-3 shadow-sm">

  {/* Search Input */}
  <div className="relative flex-grow max-w-sm">
    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
      <FiSearch className="w-5 h-5" />
    </span>
    <input
  type="text"
  value={searchItem}
  // onKeyDown={handleKeyDown}
  onChange={
    (e) => setSearchItem(e.target.value)
  }
  placeholder="Search cakes..."
  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-amber-500 text-sm"
/>

  </div>

  {/* Category Buttons */}
  <div className="flex items-center gap-2 flex-wrap">
    {categories.map((category, index) => (
     <button
  key={index}
  className={`px-4 py-1 rounded-lg text-sm font-medium border transition 
    ${
      selectedCategory === category
        ? "bg-amber-500 text-white border-amber-500"
        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
    }`}
  onClick={() => setSelectedCategory(category)}
>
  {category}
</button>

    ))}
  </div>

  {/* Sort Dropdown */}
 <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-amber-500">
  <option>Sort by Name</option>
  <option>Sort by Price</option>
  <option>Sort by Rating</option>
</select>


  {/* View Icons */}
<div className="flex items-center rounded-lg shadow-md overflow-hidden">
  {/* Grid View Button */}
  <button
    className={`p-2 w-10 flex items-center cursor-pointer justify-center
      ${viewmode === 'grid'
        ? 'bg-amber-500 text-white'
        : 'bg-white text-gray-700'} 
      transition`}
    onClick={() => setViewMode('grid')}
  >
    {/* Grid Icon */}
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24"
      strokeWidth="1.5" stroke="currentColor"
      className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M3 3h7v7H3V3zM14 3h7v7h-7V3zM14 14h7v7h-7v-7zM3 14h7v7H3v-7z" />
    </svg>
  </button>

  {/* List View Button */}
  <button
    className={`p-2 w-10 flex cursor-pointer items-center justify-center
      ${viewmode === 'list'
        ? 'bg-amber-500 text-white'
        : 'bg-white text-gray-700'} 
      transition`}
    onClick={() => setViewMode('list')}
  >
    {/* List Icon */}
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24"
      strokeWidth="1.5" stroke="currentColor"
      className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>

</div>




        {/* Menu Items */}

    {filteredMenu.length > 0 ? (
      viewmode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8  mt-10">
          {filteredMenu.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />

                {/* Badge */}
                <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>

                {/* Favorite Icon */}
                <button className="absolute top-3 right-3
                 bg-white rounded-full p-2 cursor-pointer shadow hover:scale-105 transition
                 " onClick={() => toggleLiked(item.id)}>
                
                    

                    

                  
                       <FiHeart className={ isLiked(item.id) ? "text-red-500" : "text-gray-400" } />
                    
                    

                   
                </button>
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-500 text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  <span className="text-gray-500 ml-1 text-xs">(5/5)</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                <p className="text-gray-500 mt-1 text-sm">{item.description}</p>

                {/* Price & Buttons */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-amber-600 font-bold text-lg">
                    ${item.price}
                  </span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded hover:bg-gray-100 text-sm">
                      Details
                    </button>
                    <button
                     className="px-3
                      py-1 bg-amber-600
                       text-white rounded
                        hover:bg-amber-700 text-sm"
                        onClick={() => addToCart({
                          id: item.id, 
                          image:item.image,
                          name: item.name,
                          price: item.price,
                          quantity: 1,
                          isLiked:false
                        })}
                        >
                          {isInCart(item.id) ? 'In Cart' : ' Add to Cart'}
                     
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 gap-8 mt-10 w-full max-w-4xl">
            {filteredMenu.map((item, index) => (
              <div
                key={index}
                className="bg-white w-full rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />

                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>

                  {/* Favorite Icon */}
                  <button className="absolute top-3 cursor-pointer right-3 bg-white rounded-full
                   p-2 shadow hover:scale-105 transition" onClick={() => toggleLiked(item.id)}>
                    <FiHeart className={isLiked(item.id) ? "text-red-500" : "text-gray-400"} />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <div className="flex items-center gap-1 text-amber-500 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    <span className="text-gray-500 ml-1 text-xs">(5/5)</span>
                  </div>
                  <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                  <p className="text-gray-500 mt-1 text-sm">{item.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-amber-600 font-bold text-lg">
                      ${item.price}
                    </span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded hover:bg-gray-100 text-sm">
                        Details
                      </button>
                      <button className="px-3 py-1
                       bg-amber-600 text-white
                        rounded hover:bg-amber-700 text-sm"
                        onClick={() => addToCart({
                          id: item.id, 
                          name: item.name,
                          price: item.price,
                          quantity: 1,
                          isLiked: false,
                        })}
                        >
                          {isInCart(item.id) ? 'In Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    ) : (
      <div className="text-center text-gray-600 mt-20">
        <h2 className="text-2xl font-semibold">No cakes found</h2>
        <p className="text-gray-500 mt-2">
          Try adjusting your search or category filter.
        </p>
      </div>
    )
  }

      </div>
    </div>
  );
}
