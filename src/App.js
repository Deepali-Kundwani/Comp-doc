import "./styles.css";
import React, { useState } from "react";
import { Header } from "./Components/header/Header";
import { Navigation } from "./Components/navigation/Navigation";
import { Avatar } from "./Components/avatar/Avatar";

import { Button } from "./Components/button/Button";

export default function App() {
  const [a, setA] = useState(<Button />);

  return (
    <div className="App-grid">
      <Header />
      <Navigation
        parentCallback={(b) => {
          console.log("exp");
          setA(b);
        }}
      />
      {a}
    </div>
  );
}
