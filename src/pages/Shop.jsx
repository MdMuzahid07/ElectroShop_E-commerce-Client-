import React from 'react';
import Page_Thumbnail from '../components/Shop_Page/Page_Thumbnail';
import Pagination from '../components/Shop_Page/Pagination';
import ProductFilteringSystem from '../components/Shop_Page/ProductFilteringSystem';
import Product_Card from '../components/Shop_Page/Product_Card';
import useGetAxios from '../hooks/useGetAxios';

const Shop = () => {
    const url = "https://dummyjson.com/products";
    const [products, error, loaded] = useGetAxios(url);
    return (
        <div className='mt-7 mb-32'>
            <Page_Thumbnail />


            <div className='mt-32'>
                <ProductFilteringSystem />
            </div>

            <div class="divider" />

            <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-3'>
                {
                    products?.products?.map((product, index) => <Product_Card key={index} product={product} />)
                }
            </div>

            <div className='sticky bottom-5 left-0 mt-10'>
                <Pagination />
            </div>

        </div>
    );
};

export default Shop;