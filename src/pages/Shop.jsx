import React from 'react';
import Page_Thumbnail from '../components/Shop_Page/Page_Thumbnail';
import Pagination from '../components/Shop_Page/Pagination';
import ProductFilteringSystem from '../components/Shop_Page/ProductFilteringSystem';
import Product_Card from '../components/Shop_Page/Product_Card';

const Shop = () => {
    return (
        <div className='my-32'>
            <Page_Thumbnail />


            <div className='mt-32'>
                <ProductFilteringSystem />
            </div>

            <div class="divider" />

            <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-3'>
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

            <div className='sticky bottom-5 left-0 mt-10'>
                <Pagination />
            </div>

        </div>
    );
};

export default Shop;