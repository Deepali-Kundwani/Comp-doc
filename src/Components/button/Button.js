import React, { useState } from "react";
import "./Button.css";
import Iframe from "react-iframe";

export const Button = () => {
  return (
    <div className="button-container">
      <h1>Button</h1>
      <div className="button-flex-container">
        <div className="primary-button">DEFAULT</div>
        <div className="primary-button color-blue">PRIMARY</div>
        <div className="primary-button color-pink">SECONDARY</div>
      </div>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522button-flex-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522primary-button%2522%253EDEFAULT%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522primary-button%2520color-blue%2522%253EPRIMARY%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522primary-button%2520color-pink%2522%253ESECONDARY%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        width="100%"
        height="333px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
      <h3>Icon-button</h3>
      <div className="button-flex-container">
        <div className="icon-button">
          <img alt="img" src="./images/icons8-delete-bin-24.png" />
        </div>
        <div className="icon-button">
          <img alt="img" src="./images/icons8-alarm-24.png" />
        </div>
        <div className="icon-button">
          <img alt="img" src="./images/icons8-alarm-add-24.png" />
        </div>
      </div>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522button-flex-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522primary-button%2522%253EDEFAULT%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522primary-button%2520color-blue%2522%253EPRIMARY%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522primary-button%2520color-pink%2522%253ESECONDARY%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        width="100%"
        height="417px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
      <h3>Floating-action-button</h3>
      <div className="button-flex-container">
        <div className="float-button float-blue">
          <img alt="img" src="./images/icons8-plus-24.png" />
        </div>
        <div className="float-button float-pink">
          <img alt="img" src="./images/icons8-edit-24.png" />
        </div>
        <div className="float-button">
          <img alt="img" src="./images/icons8-heart-24.png" />
        </div>
      </div>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522icon-button%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-delete-bin-24.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon-button%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-alarm-24.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon-button%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520alt%253D%2522img%2522%2520src%253D%2522.%252Fimages%252Ficons8-alarm-add-24.png%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        width="100%"
        height="417px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />
    </div>
  );
};
