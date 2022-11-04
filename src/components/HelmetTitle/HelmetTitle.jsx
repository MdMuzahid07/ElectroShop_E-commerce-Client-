import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetTitle = ({ children }) => {
    return (
        <div>
            <Helmet>
                <title>{children} | ElectroShop</title>
            </Helmet>
        </div>
    );
};

export default HelmetTitle;