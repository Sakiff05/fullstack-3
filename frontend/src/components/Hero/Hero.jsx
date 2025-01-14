import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={`${styles.bgImg} py-72`}>
      <div className="content flex flex-col gap-5 px-12 sm:px-48">
        <p className="font-bold">Spring / Summer Collection 2017</p>
        <p className="font-bold text-4xl sm:text-6xl">Get up to 30% Off New Arrivals</p>
        <button className="uppercase p-2 bg-rose-600 text-white self-start rounded hover:bg-rose-500">Shop now</button>
      </div>
    </div>
  );    
}
