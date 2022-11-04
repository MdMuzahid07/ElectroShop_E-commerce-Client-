import React from "react";
import OurTeam from "../components/About_Page/OurTeam";
import PageThumbnail from "../components/About_Page/PageThumbnail";
import WhoWeAre from "../components/About_Page/WhoWeAre";
import HelmetTitle from "../components/HelmetTitle/HelmetTitle";
import Brand_we_work_with from "../components/Home_Page/Brand_we_work_with";

const About = () => {
    return (
        <div className="my-7">
            <HelmetTitle>About</HelmetTitle>
            <PageThumbnail />
            <WhoWeAre />
            <OurTeam />
            <Brand_we_work_with />
        </div>
    );
};

export default About;