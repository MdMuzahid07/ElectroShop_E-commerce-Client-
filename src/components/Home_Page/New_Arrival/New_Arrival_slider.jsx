
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import New_Product_Card from "./New_Product_Card";

const New_Arrival_slider = () => {

    var settings = {
        classNameName: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 7000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    slidesPerRow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                }
            }
        ]
    };
    return (
        <section className="my-20">
            <div className="my-7 text-center">
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider text-4xl font-bold text-primary">New Arrival</div>
                </div>
                <p className="text-xs font-bold">Made with care for your little ones, our products are perfect for every occasion. Check it out.</p>
            </div>

            <Slider arrows={false}    {...settings}>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>
                <div>
                    <div className="p-2 bg-white">
                        <New_Product_Card />
                    </div>
                </div>


            </Slider>
        </section>
    );
};

export default New_Arrival_slider;
