import React from "react";
import Header from "../Header/Header";

export default function Blogs() {
  return (
    <div className="px-12 lg:px-48 py-12">
      <Header>Latest Blogs</Header>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 items-center py-24">
        <div className="card relative group">
          <div className="imgwrapper">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg.webp"
              alt=""
              className="w-full"
            />
          </div>
          <div className="content p-5 bg-white flex flex-col gap-3 items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-0 group-hover:scale-100 transition">
            <p className="text-center">
              Here are the trends I see coming this fall
            </p>
            <p className="text-center"> by admin | dec 01, 2017</p>
            <button className="text-rose-600 underline font-bold">
              Read more
            </button>
          </div>
        </div>
        <div className="card relative group ">
          <div className="imgwrapper">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg.webp"
              alt=""
              className="w-full"
            />
          </div>
          <div className="content p-5 bg-white flex flex-col gap-3 items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-0 group-hover:scale-100 transition">
            <p className="text-center">
              Here are the trends I see coming this fall
            </p>
            <p className="text-center"> by admin | dec 01, 2017</p>
            <button className="text-rose-600 underline font-bold">
              Read more
            </button>
          </div>
        </div>
        <div className="card relative group">
          <div className="imgwrapper">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg.webp"
              alt=""
              className="w-full"
            />
          </div>
          <div className="content p-5 bg-white flex flex-col gap-3 items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-0 group-hover:scale-100 transition">
            <p className="text-center">
              Here are the trends I see coming this fall
            </p>
            <p className="text-center"> by admin | dec 01, 2017</p>
            <button className="text-rose-600 underline font-bold">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
