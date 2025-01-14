import React from "react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../redux/slices/BasketSlice";
import axios from "axios";

export default function ShopCard({ item, onDelete }) {
  const dispatch = useDispatch();

  function handleAddBasket() {
    dispatch(addBasket(item));
  }

  return (
    <div className="card relative group hover:shadow cursor-pointer">
      <div className="favoriteBtn absolute top-0 left-0 hidden group-hover:flex transition">
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </div>

      <div className="absolute top-0 right-0">
        <button
          onClick={() => onDelete(item._id)}
          className="bg-rose-600 text-white p-2 rounded"
        >
          Delete
        </button>
      </div>
      
      <div className="imgWrapper">
        <img src={`${item.image}`} alt="" className="w-full bg-cover" />
      </div>
      <div className="content text-center">
        <p>{item.title}</p>
        <p className="text-rose-600 font-bold mt-2">${item.price}</p>
      </div>
      <button
        onClick={handleAddBasket}
        className="w-full bg-rose-600 text-white uppercase font-bold py-2 hidden group-hover:flex items-center justify-center"
      >
        Add to cart
      </button>
    </div>
  );
}
