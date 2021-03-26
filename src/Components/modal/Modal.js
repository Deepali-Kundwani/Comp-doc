import React from "react";
import "./Modal.css";
import Iframe from "react-iframe";

export const Modals = () => {
  return (
    <div id="openModal-about" class="modalDialog">
      <div>
        <div class="close">X</div>
        <h2>Modal</h2>
        <p>
          A modal is a dialog box/popup window that is displayed on top of the
          current page. When the modal is open, the background of the remaining
          page is made to be translucent.{" "}
        </p>
      </div>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520id%253D%2522openModal-about%2522%2520class%253D%2522modalDialog%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522close%2522%253EX%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EModal%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520CONTENT%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E"
        width="100%"
        height="375px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
    </div>
  );
};
