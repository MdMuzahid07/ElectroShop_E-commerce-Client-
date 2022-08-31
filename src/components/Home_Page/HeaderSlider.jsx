import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeaderSlider = () => {
    var settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='bg-slate-50 rounded-xl p-5 mb-7'>
            <Slider arrows={false} {...settings}>
                <div>
                    <div className='flex justify-around items-center'>
                        <div>
                            <p className='mb-3'>Black friday</p>
                            <h2 className="text-2xl md:text-5xl font-bold text-primary">Electronic</h2>
                            <h3 className="text-2xl md:text-5xl font-bold">New Arrivals</h3>
                            <button className="btn btn-primary rounded mt-4">Shop Now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/7jYn66f/Untitled-design-1-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex justify-around items-center'>
                        <div>
                            <p className='mb-3'>Best selling</p>
                            <h2 className="text-2xl md:text-5xl font-bold text-primary">Apple</h2>
                            <h3 className="text-2xl md:text-5xl font-bold">Iphone</h3>
                            <button className="btn btn-primary rounded mt-4">Shop Now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/S7cMM3f/Untitled-design-2-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex justify-around items-center'>
                        <div>
                            <p className='mb-3'>This week only</p>
                            <h2 className="text-2xl md:text-5xl font-bold text-primary">Up sale to</h2>
                            <h3 className="text-2xl md:text-5xl font-bold">20% off</h3>
                            <button className="btn btn-primary rounded mt-4">Shop Now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/QH3Rr7d/Untitled-design-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>

            </Slider>
        </section >
    );
};

export default HeaderSlider;
