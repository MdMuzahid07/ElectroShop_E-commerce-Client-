import React from 'react';

const BackToTopButton = () => {
    return (
        <div className='absolute bottom-28 right-5'>
            <button className="btn btn-circle btn-lg btn-outline btn-accent lg:btn-primary z-20">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-7 h-7">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        </div>
    );
};

export default BackToTopButton;