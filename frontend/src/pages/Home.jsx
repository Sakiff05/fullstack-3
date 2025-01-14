import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Shop from "../components/Shop/Shop";
import Deal from "../components/Deal/Deal";
import Blogs from "../components/Blogs/Blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Shop />
      <Deal />
      <Blogs />
    </>
  );
}
