import React from "react";
import "./Card.css";
import Iframe from "react-iframe";

export const Card = () => {
  return (
    <div className="modal-container">
      <h1 className="heading">Card</h1>
      <div className="modal-flex-container">
        <img className="image" alt="img" src="./images/green.jpg" />
        <div className="eng  ">English Navy</div>
        <div className="slim">slim fit top</div>
        <div className="price">Rs 479</div>
        <div className="line-through-price">Rs 999</div>
        <div className="discount">(52% OFF)</div>
      </div>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522modal-flex-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520className%253D%2522image%2522%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Fgreen.jpg%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522eng%2520%2520%2522%253EEnglish%2520Navy%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522slim%2522%253Eslim%2520fit%2520top%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522price%2522%253ERs%2520479%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522line-through-price%2522%253ERs%2520999%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522discount%2522%253E%2852%2525%2520OFF%29%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        width="100%"
        height="736px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
    </div>
  );
};
