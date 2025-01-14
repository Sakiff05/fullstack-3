import React from "react";
import styles from "./Header.module.css";

export default function Header({ children }) {
  return (
    <div className="text-center">
      <h1 className={`${styles.header} text-2xl md:text-4xl font-bold`}>{children}</h1>
    </div>
  );
}
