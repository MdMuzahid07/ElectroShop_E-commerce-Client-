import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeMain = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    return (
        <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal">
                <label className="modal-box relative rounded border-2 border-primary" htmlFor="">
                    <Slider arrows={false} {...settings}>
                        <div>
                            <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg" alt="" />
                        </div>
                    </Slider>

                    <div className='my-10 text-primary font-bold'>
                        <h2 className='text-2xl'>Product name</h2>
                        <div className='flex justify-around bg-accent rounded my-2'>
                            <p className='text-xs'>Price per product: $700</p>
                            <p className='text-xs'>Available Quantity: 700</p>
                            <p className='text-xs'>Minimum Order: 7</p>
                        </div>
                        <p className='my-2 text-xs'>Product description</p>
                    </div>


                    <div>
                        <div className="tooltip" data-tip="Add To Cart">
                            <button className='btn btn-circle btn-outline btn-primary'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            </button>
                        </div>
                        <div className="tooltip" data-tip="Like This Product">
                            <button className='btn btn-circle btn-outline btn-primary mx-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            </button>
                        </div>
                        <div className="tooltip" data-tip="Report This Product">
                            <button className='btn btn-circle btn-outline btn-primary'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                            </svg>
                            </button>
                        </div>
                    </div>
                </label>
            </label>
        </ >
    );
};

export default HomeMain;