import React from "react";
import Showcase from "../Component/Showcase/Showcase"
import Imagecase from "../Component/Imagecase"
import About from "../Component/About/index"
import Services from "../Component/Services/Services"
import Rightimageabout from "../Component/About/Rightimageabout"
import Brand from "../Component/Brands/index"
import Feedback from "../Component/Feedbak/index"

function index() {
  return (
    <div className="lg:px-[8rem] px-[2rem] flex flex-col gap-[8rem]">
        <Showcase/>
        <Imagecase />
        <About />
        <Services />
        <Rightimageabout />
        <Brand />
        {/* <Feedback /> */}

    </div>
  );
}

export default index;
