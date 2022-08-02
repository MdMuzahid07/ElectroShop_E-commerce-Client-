import React from 'react';
import BestSeller from '../components/Home_Page/BestSeller';
import NewCollection_BestSeller from '../components/Home_Page/NewCollection_BestSeller';
import Slider from '../components/Home_Page/Slider';

const Home = () => {
    return (
        <section className='my-7'>
            <Slider />
            <NewCollection_BestSeller />
            <BestSeller />
        </section>
    );
};

export default Home;