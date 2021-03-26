import React from "react";
import "./Rating.css";
import Iframe from "react-iframe";

export const Rating = () => {
  return (
    <div class="rating-container">
      <h1>Rating</h1>
      <div class="rating">
        <img alt="img" src="./images/icons8-star-50.png" />
        <img alt="img" src="./images/icons8-star-50.png" />
        <img alt="img" src="./images/icons8-star-50.png" />
        <img alt="img" src="./images/icons8-star-50.png" />
        <img alt="img" src="./images/icons8-star-50.png" />
      </div>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522rating%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-star-50.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-star-50.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-star-50.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-star-50.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-star-50.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        width="100%"
        height="333px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
    </div>
  );
};
