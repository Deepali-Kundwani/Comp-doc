import React from "react";
import Iframe from "react-iframe";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Get Started</h1>

      <h3 className="home-heading">
        Add this library by including following CSS file
      </h3>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%250Ahref%253D%2522https%253A%252F%252Fstyle-site.netlify.app%252Fstyle.css%2522%253E"
        width="100%"
        height="228px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
    </div>
  );
};
