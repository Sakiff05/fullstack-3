import React from "react";
import { Link, NavLink } from "react-router";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import IconButton from "@mui/material/IconButton";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow z-10">
      <div className="px-48 py-5 flex justify-between items-center">
        <div className="logo hidden lg:flex">
          <Link to="/" className="font-bold text-2xl">
            <p>
              COLO<span className="text-red-600">SHOP</span>
            </p>
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          <ul className="flex gap-4 font-semibold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="add">Add</NavLink>
            </li>
            <li>Shop</li>
            <li>Promotion</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className="basket">
            <Link to="basket">
              <IconButton>
                <ShoppingBasketIcon fontSize="large" sx={{ color: "black" }} />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
