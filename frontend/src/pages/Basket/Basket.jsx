import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Basket.module.css";
import {
  decBasket,
  incBasket,
  removeFromBasket,
} from "../../redux/slices/BasketSlice";

export default function Basket() {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <div className="flex items-center justify-center py-80">
      {basket.length > 0 ? (
        <div className=" px-48  w-[80rem]">
          <table className={styles.table}>
            <tr>
              <th className={styles.th}>Title</th>
              <th className={styles.th}>Image</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Total Price</th>
              <th className={styles.th}>Count</th>
              <th className={styles.th}>Actions</th>
            </tr>
            {basket.map((item) => (
              <tr key={item._id}>
                <td className={styles.td}>{item.title}</td>
                <td className={styles.td}>
                  <img src={`${item.image}`} alt="" />
                </td>
                <td className={styles.td}>{item.price}</td>
                <td className={styles.td}>{item.price * item.count}</td>
                <td className={styles.td}>
                  <button onClick={() => dispatch(decBasket(item))}>-</button>
                  <span className="px-4">{item.count}</span>
                  <button onClick={() => dispatch(incBasket(item))}>+</button>
                </td>
                <td className={styles.td}>
                  <button
                    onClick={() => dispatch(removeFromBasket(item))}
                    className="border border-rose-600 rounded-sm p-2 hover:bg-rose-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      ) : (
        <p className="text-4xl font-bold ">Your basket is empty</p>
      )}
    </div>
  );
}
