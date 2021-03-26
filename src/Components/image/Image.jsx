import React from "react";
import "./Image.css";
import Iframe from "react-iframe";

export const Image = () => {
  return (
    <div className="img-container">
      <h1> Image </h1>
      <img
        className="image-responsive"
        alt="img"
        src="https://images.pexels.com/photos/2576786/pexels-photo-2576786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522image-responsive%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages.pexels.com%252Fphotos%252F2576786%252Fpexels-photo-2576786.jpeg%253Fauto%253Dcompress%2526cs%253Dtinysrgb%2526dpr%253D1%2526w%253D500%2522%250A%2520%2520%2520%2520%2520%2520%252F%253E"
        width="100%"
        height="312px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
      <h1>Circular-image</h1>
      <img
        className=" image-circular"
        alt="img"
        src="https://images.pexels.com/photos/2576786/pexels-photo-2576786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522%2520image-circular%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages.pexels.com%252Fphotos%252F2576786%252Fpexels-photo-2576786.jpeg%253Fauto%253Dcompress%2526cs%253Dtinysrgb%2526dpr%253D1%2526w%253D500%2522%250A%2520%2520%2520%2520%2520%2520%252F%253E"
        width="100%"
        height="312px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
    </div>
  );
};
