import React from 'react';

const CartProducts = () => {
    return (
        <div className='w-full p-7'>
            <h2 className='text-xl font-bold'>Shopping Cart</h2>
            <hr className='my-2' />
            <div>
                <div className="card card-compact w-full bg-white border drop-shadow rounded">
                    <div className="card-body text-xs">
                        <div className='grid md:grid-cols-5 gap-2 text-xs'>

                            <div>
                                <div className="avatar">
                                    <div className="w-22 rounded">
                                        <img src="https://placeimg.com/192/192/people" alt="product_image" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2>Name</h2>
                                <hr className='my-2' />
                                <h2>product</h2>
                            </div>

                            <div>
                                <h2>Quantity</h2>
                                <hr className='my-2' />
                                <h2>-</h2>
                                3
                                <h2>+</h2>
                            </div>

                            <div>
                                <h2>Price</h2>
                                <hr className='my-2' />
                                $70
                            </div>

                            <div>
                                <h1>Total Price</h1>
                                <hr className='my-2' />
                                <h2>$210</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProducts;