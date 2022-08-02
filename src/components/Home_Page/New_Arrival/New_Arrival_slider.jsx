
import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import New_Product_Card from './New_Product_Card';

const New_Arrival_slider = () => {
    return (
        <section className='my-20'>
            <div className='my-7 text-center'>
                <div class="flex flex-col w-full border-opacity-50">
                    <div class="divider text-4xl font-bold text-primary">New Arrival</div>
                </div>
                <p className='text-xs font-bold'>Made with care for your little ones, our products are perfect for every occasion. Check it out.</p>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={4}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="pb-3">
                        <New_Product_Card />
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <New_Product_Card />
                </SwiperSlide>

                <SwiperSlide>
                    <New_Product_Card />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default New_Arrival_slider;