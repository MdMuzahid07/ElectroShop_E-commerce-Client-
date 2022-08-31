
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product_card from './Product_card';

const BestSeller = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
        <section className='my-20'>
            <div className='my-7 text-center'>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider text-4xl font-bold text-primary">Best Seller</div>
                </div>
                <p className='text-xs font-bold'>Made with care for your little ones, our products are perfect for every occasion. Check it out.</p>
            </div>

            <Slider {...settings}>
                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>

                <div className='p-2 bg-white'>
                    <Product_card />
                </div>
            </Slider>



        </section>
    );
};

export default BestSeller;
