"use client";

import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function BackButton() {
  return (
    <Link href='/herosection'>
    <button
      className="flex items-center  gap-2  text-black p-7 
                 hover:bg-amber-50 text-sm transition cursor-pointer"
    >
      <AiOutlineArrowLeft className="text-sm" />
      Back to Home
    </button>
    </Link>
  );
}
