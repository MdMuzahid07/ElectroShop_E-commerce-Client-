import React from 'react';
import Page_Thumbnail from '../components/Shop_Page/Page_Thumbnail';
import Product_Card from '../components/Shop_Page/Product_Card';

const Shop = () => {
    return (
        <div className='my-7'>
            <Page_Thumbnail />

            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
                <Product_Card />
                <Product_Card />
                <Product_Card />
                <Product_Card />
                <Product_Card />
                <Product_Card />
                <Product_Card />
                <Product_Card />
                <Product_Card />
                <Product_Card />
                <Product_Card />
                <Product_Card />
            </div>

        </div>
    );
};

export default Shop;