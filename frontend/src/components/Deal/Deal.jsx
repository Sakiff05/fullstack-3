import React from "react";
import Header from "../Header/Header";

export default function Deal() {
  return (
    <div className="bg-slate-200 px-12 lg:px-48 flex flex-col xl:flex-row items-center lg:items-start mt-20 ">
      <img
        src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png"
        alt=""
        className="self-center"
      />

      <div className="content py-20 xl:px-30 flex flex-col gap-y-20">
        <Header>Deal of the Week</Header>
        <div className="grid grid-cols-4 gap-5 text-xl ">
          <div className="bg-white rounded-[50%] py-10 px-12 flex items-center flex-col">
            <p>2</p>
            <p>day</p>
          </div>
          <div className="bg-white rounded-[50%] py-10 px-12 p-2 flex text-center items-center flex-col">
            <p>22</p>
            <p>hours</p>
          </div>
          <div className="bg-white rounded-[50%] py-10 px-12 p-2 flex text-center items-center flex-col">
            <p>3</p>
            <p>mins</p>
          </div>
          <div className="bg-white rounded-[50%] py-10 px-12 p-2 flex text-center items-center flex-col">
            <p>18</p>
            <p>seconds</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-black text-white p-2 rounded-sm hover:bg-slate-950">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
