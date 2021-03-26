import React from "react";
import "./Cards.css";
import Iframe from "react-iframe";

export const Cards = () => {
  return (
    <div className="container-flex">
      <div className="cards-container">
        <h3 className="heading">Text only card</h3>
        <div>
          <div className="card-flex-container">
            <div className="card-item">Word of the Day</div>
            <div className="card-item card-item-font">be•nev•o•lent</div>
            <div className="card-item">
              <p className="para">well meaning and kindly.</p>
              <p className="para">"a benevolent smile"</p>
            </div>
            <button className="button">Learn More</button>
          </div>
        </div>
      </div>

      <div className="card-horizontal">
        <div className="cards-container flex">
          <h3 className="heading">horizontal card</h3>
          <div>
            <div className="card-flex-container">
              <div className="card-item">Word of the Day</div>
              <div className="card-item card-item-font">be•nev•o•lent</div>
              <div className="card-item">
                <p className="para">well meaning and kindly.</p>
                <p className="para">"a benevolent smile"</p>
              </div>
              <button className="button">Learn More</button>
            </div>
          </div>
        </div>
        <div className="div-image"></div>
      </div>

      <div className="cards-container">
        <h3 className="heading dismiss">dismiss text card</h3>
        <div>
          <div className="card-flex-container">
            <div className="card-item">Word of the Day</div>
            <div className="card-item card-item-font">be•nev•o•lent</div>
            <div className="card-item">
              <p className="para">well meaning and kindly.</p>
              <p className="para">"a benevolent smile"</p>
            </div>
            <button className="button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
