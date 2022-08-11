import React from 'react';

const BestSeller_Thumbnail = () => {
    return (
        <section className='my-20 grid md:grid-cols-2 items-center bg-accent rounded-xl p-4 text-white'>
            <div className='md:ml-20'>
                <p className='mb-3'>Modern Laptop</p>
                <h2 className="text-2xl md:text-4xl font-bold text-primary">Best seller</h2>
                <p className="text-xs font-bold">Find your dream laptop</p>
                <button className="btn btn-primary rounded mt-4">Shop Now</button>
            </div>
            <img src="https://i.ibb.co/f9fpPVm/Untitled-design-removebg-preview.png" alt="Laptop_image" />
        </section>
    );
};

export default BestSeller_Thumbnail;