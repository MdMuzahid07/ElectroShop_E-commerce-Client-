import React from "react";

const BackToTopButton = () => {
    return (
        <div className="absolute bottom-24 right-7">
            <button className="btn btn-circle bg-white btn-outline btn-primary z-20">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        </div >
    );
};

export default BackToTopButton;