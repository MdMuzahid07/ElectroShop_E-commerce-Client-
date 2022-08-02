import React from 'react';
import Google_Map from '../components/Contact_Page/Google_Map';
import Page_Thumbnail from '../components/Contact_Page/Page_Thumbnail';

const Contact = () => {
    return (
        <div className='my-7'>
            <Page_Thumbnail />
            <Google_Map />
        </div>
    );
};

export default Contact;