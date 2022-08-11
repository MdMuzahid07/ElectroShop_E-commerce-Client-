
import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Product_card from './Product_card';

const BestSeller = () => {
    return (
        <section className='my-20'>
            <div className='my-7 text-center'>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider text-4xl font-bold text-primary">Best Seller</div>
                </div>
                <p className='text-xs font-bold'>Made with care for your little ones, our products are perfect for every occasion. Check it out.</p>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >


                <SwiperSlide>
                    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-7 pb-3'>
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-7'>
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-7'>
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                        <Product_card />
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default BestSeller;
