import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import ShopCard from "../ShopCard/ShopCard";

export default function Shop() {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      let res = await axios.get("http://localhost:5000/products");
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleDelete(id) {
    try {
      axios.delete(`http://localhost:5000/${id}`);
      setData(data.filter((data) => data._id != id));
    } catch (error) {}
  }

  return (
    <div className="px-12 py-10 sm:px-48">
      <Header>New Arrivals</Header>
      <div className="buttons flex my-20 items-center justify-center ">
        <button className="border bg-white rounded-sm py-2 px-5 hover:bg-rose-600 hover:text-white transition">
          All
        </button>
        <button className="border bg-white rounded-sm py-2 px-5 hover:bg-rose-600 hover:text-white transition">
          Women's
        </button>
        <button className="border bg-white rounded-sm py-2 px-5 hover:bg-rose-600 hover:text-white transition">
          Accessories
        </button>
        <button className="border bg-white rounded-sm py-2 px-5 hover:bg-rose-600 hover:text-white transition">
          Men's
        </button>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
        {data.map((item) => (
          <ShopCard item={item} key={item._id} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
