import React from 'react';
import Our_Team from '../components/About_Page/Our_Team';
import Page_Thumbnail from '../components/About_Page/Page_Thumbnail';
import Who_We_Are from '../components/About_Page/Who_We_Are';
import Brand_we_work_with from '../components/Home_Page/Brand_we_work_with';

const About = () => {
    return (
        <div className='my-7'>
            <Page_Thumbnail />
            <Who_We_Are />
            <Our_Team />
            <Brand_we_work_with />
        </div>
    );
};

export default About;