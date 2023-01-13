//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { AiOutlineClockCircle } from "react-icons/ai";

function SimpleCounter(props) {
  return (
    <div className="mainCounter">
      <div className="clock">
        <AiOutlineClockCircle />
      </div>
      <div className="millenials">{props.millenials % 10}</div>
      <div className="hundreds">{props.hundreds % 10}</div>
      <div className="tens">{props.tens % 10}</div>
      <div className="units">{props.units % 10}</div>
    </div>
  );
}
let counter = 0;
setInterval(function () {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  console.log(four, three, two, one);
  counter++;

  //render your react application
  ReactDOM.render(
    <SimpleCounter units={one} tens={two} hundreds={three} millenials={four} />,
    document.querySelector("#app")
  );
}, 1000);
