import React from "react";
import "./project.css";
import VideoPlayer from "react-video-js-player";
import DOC from "../videos/berkanavideo.mp4";
import posterImage from "../images/videoPoster.png";

function BerkanaVideo() {
  const videoSrc = DOC;
  const poster = posterImage;
  return (
    <div>
      <h1>
        Video: <i>Berkana:</i> a documentary by Michael Rivas and Emma Rudd
      </h1>

      <VideoPlayer src={videoSrc} poster={poster} width="375" height="350" />
    </div>
  );
}

export default BerkanaVideo;
