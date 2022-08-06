import React from 'react';

const Company_fun_facts = () => {
    return (
        <section className='my-20 bg-accent rounded-xl p-4 text-white'>
            <div className='grid md:grid-cols-4 gap-7'>
                <div>
                    <img src="https://i.ibb.co/rsM0VPM/Untitled-design-removebg-preview.png" alt="Rocket_logo" />
                    <div className='font-bold'>
                        <h2 className='text-primary my-2'>WORLDWIDE DELIVERY</h2>
                        <p className='text-xs'>With sites in 5 languages, we ship to over 200 countries & regions.</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/0Q9CkBB/Untitled-design-1-removebg-preview.png" alt="Delivery_pickup_logo" />
                    <div className='font-bold'>
                        <h2 className='text-primary my-2'>SAFE SHIPPING</h2>
                        <p className='text-xs'>Pay with the world’s most popular and secure payment methods.</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/svtXnV7/Untitled-design-2-removebg-preview.png" alt="Return_logo" />
                    <div className='font-bold'>
                        <h2 className='text-primary my-2'>365 DAYS RETURN</h2>
                        <p className='text-xs'>Round-the-clock assistance for a smooth shopping experience.</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/0Z7T12f/Untitled-design-3-removebg-preview.png" alt="Return_logo" />
                    <div className='font-bold'>
                        <h2 className='text-primary my-2'>SHOP CONFIDENCE</h2>
                        <p className='text-xs'>Our Buyer Protection covers your purchase from click to delivery.</p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Company_fun_facts;