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


const Slider = () => {
    return (
        <section className='bg-slate-50 rounded-xl p-4 mb-7'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={1}
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
                    <div className='flex justify-around items-center pb-7'>
                        <div>
                            <p className='mb-3'>Black friday</p>
                            <h2 className="text-2xl md:text-5xl font-bold text-primary">Electronic</h2>
                            <h3 className="text-2xl md:text-5xl font-bold">New Arrivals</h3>
                            <button className="btn btn-primary mt-4">Shop Now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/7jYn66f/Untitled-design-1-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex justify-around items-center pb-7'>
                        <div>
                            <p className='mb-3'>Best selling</p>
                            <h2 className="text-2xl md:text-5xl font-bold text-primary">Apple</h2>
                            <h3 className="text-2xl md:text-5xl font-bold">Iphone</h3>
                            <button className="btn btn-primary mt-4">Shop Now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/S7cMM3f/Untitled-design-2-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='flex justify-around items-center pb-7'>
                        <div>
                            <p className='mb-3'>This week only</p>
                            <h2 className="text-2xl md:text-5xl font-bold text-primary">Up sale to</h2>
                            <h3 className="text-2xl md:text-5xl font-bold">20% off</h3>
                            <button className="btn btn-primary mt-4">Shop Now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/QH3Rr7d/Untitled-design-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Slider;
