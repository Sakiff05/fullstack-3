import React from "react";
import { Link, NavLink } from "react-router";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";

export default function Navbar() {
  const basket = useSelector((state) => state.basket.basket);
  return (
    <nav className="fixed w-full bg-white shadow z-10">
      <div className="px-48 py-5 flex flex-col lg:flex-row justify-between items-center">
        <div className="logo lg:flex">
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
          </ul>
          <div className="basket">
            <Link to="basket">
              <IconButton>
                <ShoppingBasketIcon fontSize="large" sx={{ color: "black" }} />(
                {basket.reduce((acc, sum) => acc + sum.count, 0)})
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
