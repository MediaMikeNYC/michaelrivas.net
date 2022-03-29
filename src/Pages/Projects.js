import React from "react";
// Importing project components
import Project1React from "../Components/ProjectComponents/Project1React";
import Project2JS from "../Components/ProjectComponents/Project2JS";
import BushwickSite from "../Components/ProjectComponents/Project3bushwicksite";
import BerkanaVideo from "../Components/ProjectComponents/Project4Video";
import SummerCampVideo from "../Components/ProjectComponents/Project5SSC";
import Collage from "../Components/ProjectComponents/Project6Collage";
import LogoS from "../Components/ProjectComponents/Project7Logo";
import Writing from "../Components/ProjectComponents/Project8Writing";
import Writing2 from "../Components/ProjectComponents/Project9Writing2";

function ProjectsPage() {
  return (
    <div>
      <Project1React />
      <Project2JS />
      <BushwickSite />
      <BerkanaVideo />
      <SummerCampVideo />
      <Collage />
      <LogoS />
      <Writing2 />
      <Writing />
    </div>
  );
}

export default ProjectsPage;
