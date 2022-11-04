import React from "react";
import Contact_Form from "../components/Contact_Page/Contact_Form";
import Google_Map from "../components/Contact_Page/Google_Map";
import Page_Thumbnail from "../components/Contact_Page/Page_Thumbnail";
import HelmetTitle from "../components/HelmetTitle/HelmetTitle";

const Contact = () => {
    return (
        <div className="my-7">
            <HelmetTitle>Contact</HelmetTitle>
            <Page_Thumbnail />
            <Google_Map />
            <Contact_Form />
        </div>
    );
};

export default Contact;