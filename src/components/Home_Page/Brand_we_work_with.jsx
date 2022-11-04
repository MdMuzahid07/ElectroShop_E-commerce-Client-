import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand_we_work_with = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
        <div>
            <div className="my-7 text-center">
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider text-4xl font-bold text-primary">Brands</div>
                </div>
                <p className="text-xs font-bold">We work with 100 plus of world wide best brands</p>
            </div>
            <Slider arrows={false} {...settings}>

                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>
                <div>
                    <img src="https://www.godisageek.com/wp-content/uploads/Apple-Best-of-2020.jpg" alt="" />
                </div>

            </Slider>
        </div>
    );
};

export default Brand_we_work_with;
