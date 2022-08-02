import React from 'react';
import NewCollection_BestSeller from '../components/Home_Page/NewCollection_BestSeller';
import Slider from '../components/Home_Page/Slider';

const Home = () => {
    return (
        <div className='my-7'>
            <Slider />
            <NewCollection_BestSeller />
        </div>
    );
};

export default Home;