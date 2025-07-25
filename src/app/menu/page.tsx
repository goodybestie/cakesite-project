import { menuImages } from "@/const/menueimage";
import BackButton from "@/app/backbutton/page";
import React from "react";

export default function MenuPage() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
    <BackButton  />
    <div className="px-6 py-10">
          <h1 className="text-4xl font-bold text-center">
              Our Delicious Cakes
          </h1>
          <p className="text-center mt-4 text-gray-600">
              Discover our collection of handcrafted cakes, made with love and the finest ingredients
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
              {menuImages.map((item, index) => (
                  <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                  >
                      {/* --- Image --- */}
                      <div className="relative">
                          <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-56 object-cover" />
                          {/* Badge */}
                          <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                              Popular
                          </span>
                          {/* Heart Icon */}
                          <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-105 transition">
                              ❤️
                          </button>
                      </div>

                      {/* --- Card Content --- */}
                      <div className="p-4">
                          {/* Rating */}
                          <div className="flex items-center gap-1 text-amber-500 text-sm">
                              {Array.from({ length: 5 }).map((_, i) => (
                                  <span key={i}>★</span>
                              ))}
                              <span className="text-gray-500 ml-1 text-xs">(5/5)</span>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                          <p className="text-gray-500 mt-1 text-sm">{item.description}</p>

                          {/* Price & Buttons */}
                          <div className="flex items-center justify-between mt-4">
                              <span className="text-amber-600 font-bold text-lg">
                                  {item.price}
                              </span>
                              <div className="flex gap-2">
                                  <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded hover:bg-gray-100 text-sm">
                                      Details
                                  </button>
                                  <button className="px-3 py-1 bg-amber-600 text-white rounded hover:bg-amber-700 text-sm">
                                      Add to Cart
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div></div>
  );
}
