import React from "react";
import HelmetTitle from "../components/HelmetTitle/HelmetTitle";

const Error_page = () => {
    return (
        <div className="text-center text-white bg-primary rounded-xl my-20 p-7">
            <HelmetTitle>Error 404!</HelmetTitle>
            <h2 className="text-5xl font-bold my-7">ERROR 404!</h2>
            <hr />
            <h2 className="text-3xl font-bold my-3">Page not found</h2>
            <hr />
        </div>
    );
};

export default Error_page;