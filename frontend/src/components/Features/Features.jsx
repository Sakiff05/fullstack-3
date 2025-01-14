import React from "react";

export default function Features() {
  return (
    <div className="px-12 sm:px-48 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="card relative">
          <img
            src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg.webp"
            alt=""
            className="w-full"
          />
          <p className="bg-white p-4 font-bold text-center absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]" >WOMEN'S</p>
        </div>
        <div className="card relative">
          <img
            src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg.webp"
            alt=""
            className="w-full"
          />
          <p className="bg-white p-4 font-bold text-center absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]" >ACCESSORIES'S</p>
        </div>
        <div className="card relative">
          <img
            src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg.webp"
            alt=""
            className="w-full"
          />
          <p className="bg-white p-4 font-bold text-center absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]" >MEN'S</p>
        </div>
      </div>
    </div>
  );
}
