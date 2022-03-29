import React from "react";
import "./ProfilePic.css";
import profilePic from "../images/profilePic.jpg";

function AboutPage() {
  return (
    <div className="body-profile">
      <img src={profilePic} alt="" />
      <p className="bio-text">My name is Michael Rivas, I am born and raised in New York City. I attended NYU and graduated with a Bachelor's of Science in Media, Culture, Communication in 2018. Shortly after college, I started working for a media company--Digiday Media-- doing digital marketing, and specializing in lead generation/performance marketing. One aspect of my job was landing page creation using HTML and CSS and CMS maintenance. I fell in love with this and have decided to pursue a career in front end development. I am a self-taught React developer, this site was built with react. Please view the projects section of my page to view my other projects. </p>
    </div>
  );
}

export default AboutPage;
