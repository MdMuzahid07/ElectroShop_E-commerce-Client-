import React from "react";
import BestSeller from "../components/Home_Page/Best_Seller/BestSeller";
import BestSeller_Thumbnail from "../components/Home_Page/Best_Seller/BestSeller_Thumbnail";
import Brand_we_work_with from "../components/Home_Page/Brand_we_work_with";
import Company_fun_facts from "../components/Home_Page/Company_fun_facts";
import NewCollection_BestSeller from "../components/Home_Page/NewCollection_BestSeller";
import New_Arrival_slider from "../components/Home_Page/New_Arrival/New_Arrival_slider";
import New_Arrival_thumbnail from "../components/Home_Page/New_Arrival/New_Arrival_thumbnail";
import HeaderSlider from "../components/Home_Page/HeaderSlider";
import HelmetTitle from "../components/HelmetTitle/HelmetTitle";

const Home = () => {
    return (
        <section className="my-7">
            <HelmetTitle>Home</HelmetTitle>
            <HeaderSlider />
            <NewCollection_BestSeller />
            <BestSeller />
            <BestSeller_Thumbnail />
            <New_Arrival_slider />
            <New_Arrival_thumbnail />
            <Company_fun_facts />
            <Brand_we_work_with />
        </section>
    );
};

export default Home;