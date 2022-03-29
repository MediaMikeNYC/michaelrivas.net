import React from "react";
import VideoPlayer from "react-video-js-player";
import "./project.css";
import video from "../videos/SSCV4Web.mp4";
import Vposter from "../images/SSCPoster.png";

function SummerCampVideo() {
  const videoSrc = video;
  const Poster = Vposter;

  return (
    <div>
      <h1>Video: Promotional Video for Brazilian Jiu-jitsu Retreat-- Saquarema Summer Camp</h1>

      <VideoPlayer src={videoSrc} poster={Poster} width="375" height="350" />
    </div>
  );
}

export default SummerCampVideo;
