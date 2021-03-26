import React, { useState } from "react";
import "./Badge.css";
import Iframe from "react-iframe";

export const Badge = () => {
  return (
    <div className="badge-container">
      <h1> Badge </h1>
      <div className="badge-flex-container">
        <div className="icon">
          <img alt="img" src="./images/icons8-envelope-50.png" />
          <div className="badge badge-1">1</div>
        </div>
        <div className="icon">
          <img alt="img" src="./images/icons8-envelope-50.png" />
          <div className="badge">1</div>
        </div>
        <div className="icon">
          <img alt="img" src="./images/icons8-envelope-50.png" />
          <div className="badge badge-three">12</div>
        </div>
        <div className="icon">
          <img alt="img" src="./images/icons8-envelope-50.png" />
          <div className="badge badge-four">99+</div>
        </div>
        <div className="icon">
          <img alt="img" src="./images/icons8-envelope-50.png" />
          <div className="badge badge-five">999+</div>
        </div>
      </div>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522badge-flex-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-envelope-50.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2520badge-1%2522%253E1%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-envelope-50.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2522%253E1%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-envelope-50.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2520badge-three%2522%253E12%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-envelope-50.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2520badge-four%2522%253E99%252B%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-envelope-50.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2520badge-five%2522%253E999%252B%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        width="100%"
        height="648px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
    </div>
  );
};
