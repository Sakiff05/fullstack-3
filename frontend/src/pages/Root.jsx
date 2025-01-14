import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
