import React from 'react';
import BestSeller from '../components/Home_Page/Best_Seller/BestSeller';
import BestSeller_Thumbnail from '../components/Home_Page/Best_Seller/BestSeller_Thumbnail';
import NewCollection_BestSeller from '../components/Home_Page/NewCollection_BestSeller';
import New_Arrival_slider from '../components/Home_Page/New_Arrival/New_Arrival_slider';
import New_Arrival_thumbnail from '../components/Home_Page/New_Arrival/New_Arrival_thumbnail';
import Slider from '../components/Home_Page/Slider';

const Home = () => {
    return (
        <section className='my-7'>
            <Slider />
            <NewCollection_BestSeller />
            <BestSeller />
            <BestSeller_Thumbnail />
            <New_Arrival_slider />
            <New_Arrival_thumbnail />
        </section>
    );
};

export default Home;