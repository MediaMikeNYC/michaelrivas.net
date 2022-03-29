import React from "react";
import "./project.css";

function Project1React() {
  return (
    <div>
      <h1>Web Development: Letter Interval Application made with Javascript React framework. Work in progress.</h1>
      <a className="linkPhototoMysite" href="https://letterintervalapp.com" target="blank" rel="noopener noreferrer">
        <img className="letterImage" alt="" src={require("../images/letterImage4.png")}></img>
      </a>
    </div>
  );
}

export default Project1React;
