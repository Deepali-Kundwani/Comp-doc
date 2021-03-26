import "./Navigation.css";
import React, { useState } from "react";
import { Avatar } from "../avatar/Avatar";
import { Header } from "../header/Header";
import { Alert } from "../alert/Alert";
import { Badge } from "../badges/Badge";
import { Button } from "../button/Button";
import { Cards } from "../cards/Cards";
import { Modals } from "../modal/Modal";
import { Card } from "../card/Card";
import { List } from "../list/List";
import { Image } from "../image/Image";
import { Rating } from "../rating/Rating";
import { Grid } from "../grid/Grid";

export const Navigation = ({ parentCallback }) => {
  const navItems = [
    "UI components👇",
    "Alert",
    "Button",
    "Badge",
    "Grid",
    "Avatar",
    "Cards",
    "Rating",
    "Modal",
    "List",
    "Image",
    "Card"
  ];
  const components = {
    Alert: <Alert />,
    Avatar: <Avatar />,
    "UI components👇": <Button />,
    Badge: <Badge />,
    Button: <Button />,
    Cards: <Cards />,
    Card: <Card />,
    List: <List />,
    Image: <Image />,
    Rating: <Rating />,
    Modal: <Modals />,
    Grid: <Grid />
  };
  return (
    <div className="navigation-flex">
      {navItems.map((item1) => (
        <div
          onClick={() => {
            console.log("nav");
            parentCallback(components[item1]);
          }}
          className="navigation-flex-item"
        >
          {item1}
        </div>
      ))}
    </div>
  );
};
