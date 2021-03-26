import React from "react";
import "./List.css";
import Iframe from "react-iframe";

export const List = () => {
  return (
    <div className="grid">
      <h1 className="list-heading">List</h1>
      <div class="ul-flex">
        <div class="list-item">Point 1</div>
        <div class="list-item">Point 2</div>
        <div class="list-item">Point 3</div>
        <div class="list-item">Point 4</div>
      </div>

      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522ul-flex%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522list-item%2522%253EPoint%25201%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522list-item%2522%253EPoint%25202%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522list-item%2522%253EPoint%25203%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522list-item%2522%253EPoint%25204%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        width="100%"
        height="396px"
        border="0"
        transform="scale(1)"
        overflow="hidden"
        frameBorder="0"
      />

      <h1 className="list-heading">Notifications </h1>
      <div class="notification-box" id="box">
        <h2>Notifications</h2>
        <div class="notification-item">
          <div class="text">
            <h4>Notification</h4>
            <p>Have a nice day!!</p>
          </div>
        </div>
      </div>
      <div className="notification-box notification-margin" id="box">
        <h2 className="list-heading">Notifications</h2>
        <div class="notification-item">
          <div class="text">
            <h4>Notification</h4>
            <p>Have a nice day!!</p>
          </div>
        </div>
      </div>
      <Iframe
        url="https://carbon.now.sh/embed?bg=rgba%28191%2C219%2C254%2C1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522notification-box%2520notification-margin%2522%2520id%253D%2522box%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253ENotifications%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522notification-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253ENotification%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EHave%2520a%2520nice%2520day%21%21%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
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
