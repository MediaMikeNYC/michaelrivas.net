import React from "react";
import "./project.css";

function Collage() {
  return (
    <div>
      <h1>Design: 1980s Collage: Current Events</h1>
      <img className="collageArt" alt="" src={require("../images/80.jpg")}></img>
    </div>
  );
}

export default Collage;
