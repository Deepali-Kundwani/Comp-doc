import React from "react";
import "./Avatar.css";
import Iframe from "react-iframe";

export var Avatar = () => {
  return (
    <div className="container">
      <h1> Avatar </h1>
      <div className="avatar-container">
        <img
          className="avatar-container-item"
          alt="img"
          src="./images/image-victor.jpg"
        />
        <img
          className="avatar-container-item"
          alt="img"
          src="./images/image-victor.jpg"
        />
        <img
          className="avatar-container-item"
          alt="img"
          src="./images/image-victor.jpg"
        />
      </div>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522avatar-container-item%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522.%252Fimages%252Fimage-victor.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E"
        width="100%"
        height="520px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
    </div>
  );
};
