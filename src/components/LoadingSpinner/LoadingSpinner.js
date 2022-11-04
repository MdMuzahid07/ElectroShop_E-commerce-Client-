import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <CirclesWithBar
                height="50"
                width="50"
                color="#FF4A11"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel="circles-with-bar-loading"
            />
        </div>
    );

};

export default LoadingSpinner;