import React, { useState, useContext } from "react";
import "./Header.css";

export const Header = () => {
  const items = ["Design", "Components", "Code", "Blog"];

  return (
    <div className="header-flex">
      <div class="header-flex-item"></div>
      {items.map((item) => (
        <div class="header-flex-item">{item}</div>
      ))}
    </div>
  );
};
