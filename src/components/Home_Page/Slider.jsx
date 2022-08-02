import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <section className='bg-slate-50 rounded-xl p-4 my-5'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='pb-7'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, obcaecati?Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero fugit id, deserunt commodi officia eligendi ab veritatis illo aliquam quaerat nihil architecto, at in nemo reiciendis quidem modi! Illum, quas molestiae, distinctio cum maiores beatae nesciunt dicta dolorem necessitatibus accusantium possimus optio! Quia nihil minima libero! Natus recusandae tenetur at vel totam. Facere distinctio natus et incidunt totam nihil doloremque quis quas rem iure labore esse maxime aut delectus, sint assumenda culpa quasi eum. Commodi esse quod dolores, ea temporibus pariatur vel beatae. Non tempore ducimus voluptatibus aperiam odit ex temporibus hic minus nemo. Voluptates atque dolor sunt itaque?</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, obcaecati?Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero fugit id, deserunt commodi officia eligendi ab veritatis illo aliquam quaerat nihil architecto, at in nemo reiciendis quidem modi! Illum, quas molestiae, distinctio cum maiores beatae nesciunt dicta dolorem necessitatibus accusantium possimus optio! Quia nihil minima libero! Natus recusandae tenetur at vel totam. Facere distinctio natus et incidunt totam nihil doloremque quis quas rem iure labore esse maxime aut delectus, sint assumenda culpa quasi eum. Commodi esse quod dolores, ea temporibus pariatur vel beatae. Non tempore ducimus voluptatibus aperiam odit ex temporibus hic minus nemo. Voluptates atque dolor sunt itaque?</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, obcaecati?Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero fugit id, deserunt commodi officia eligendi ab veritatis illo aliquam quaerat nihil architecto, at in nemo reiciendis quidem modi! Illum, quas molestiae, distinctio cum maiores beatae nesciunt dicta dolorem necessitatibus accusantium possimus optio! Quia nihil minima libero! Natus recusandae tenetur at vel totam. Facere distinctio natus et incidunt totam nihil doloremque quis quas rem iure labore esse maxime aut delectus, sint assumenda culpa quasi eum. Commodi esse quod dolores, ea temporibus pariatur vel beatae. Non tempore ducimus voluptatibus aperiam odit ex temporibus hic minus nemo. Voluptates atque dolor sunt itaque?</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Slider;
