import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function Footer() {
  return (
    <footer className="px-12 lg:px-48 py-10 bg-slate-300 ">
      <div className="newsLetter flex flex-col lg:flex-row justify-center lg:justify-between items-center  py-12 gap-10">
        <div className="content text-center lg:text-start">
          <h1 className="text-2xl font-bold">Newsletter</h1>
          <p className="my-10 lg:my-0">
            Subscribe to our newsletter and get 20% off your first purchase
          </p>
        </div>
        <form className="flex justify-center lg:justify-normal">
          <input type="email" placeholder="Your email" className="p-2" />
          <button
            type="submit"
            className="bg-rose-600 text-white font-bold uppercase p-2"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center gap-10 justify-between">
        <div className="text-slate-500 flex flex-col gap-10">
          <div className="flex items-center justify-center gap-5">
            <p>Blog</p>
            <p>FAQs</p>
            <p>Contact Us</p>
          </div>
          <p>
            ©2018 All Rights Reserverd. This template is made with by Colorlib
          </p>
        </div>
        <div className="flex gap-10">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <PinterestIcon />
        </div>
      </div>
    </footer>
  );
}
