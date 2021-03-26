import React, { useState } from "react";
import "./Alert.css";
import Iframe from "react-iframe";

export const Alert = () => {
  return (
    <div className="alert-container">
      <h1> Alerts </h1>

      <div className="alert-flex-container">
        <div className="alert-flex-item">
          <div className="desc">This is an error alert - check it out!</div>
        </div>
        <div className="alert-flex-item color-yellow">
          <div className="desc"> This is an warning alert - check it out!</div>
        </div>
        <div className="alert-flex-item color-blue">
          <div className="desc"> This is an info alert - check it out!</div>
        </div>
        <div className="alert-flex-item color-green">
          <div className="desc">This is a success alert - check it out!</div>
        </div>
      </div>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522alert-flex-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522desc%2522%253EThis%2520is%2520an%2520error%2520alert%2520-%2520check%2520it%2520out%21%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert-flex-item%2520color-yellow%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522desc%2522%253E%2520This%2520is%2520an%2520warning%2520alert%2520-%2520check%2520it%2520out%21%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert-flex-item%2520color-blue%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522desc%2522%253E%2520This%2520is%2520an%2520info%2520alert%2520-%2520check%2520it%2520out%21%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert-flex-item%2520color-green%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522desc%2522%253EThis%2520is%2520a%2520success%2520alert%2520-%2520check%2520it%2520out%21%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        width="100%"
        height="438px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
    </div>
  );
};
