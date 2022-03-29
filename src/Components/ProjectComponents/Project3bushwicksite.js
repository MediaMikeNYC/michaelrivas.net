import React from "react";
import "./project.css";
function BushwickSite() {
  return (
    <div>
      <h1>
        Web Development: <i>Bushwick, Brooklyn</i> Website made with HTML, CSS, and jQuery
      </h1>

      <a className="linkPhototoMysite" href="http://composingdigitalmedia.org/s17_dmtp/webs/mir/index.html" target="_blank" rel="noopener noreferrer">
        <img className="bushwickPhoto" alt="" src={require("../images/bushwicksite.png")}></img>
      </a>
    </div>
  );
}

export default BushwickSite;
