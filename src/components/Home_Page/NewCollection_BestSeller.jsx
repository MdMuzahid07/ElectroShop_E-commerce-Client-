import React from 'react';

const NewCollection_BestSeller = () => {
    return (
        <section className='grid md:grid-cols-2 gap-7'>
            <div className='bg-slate-50 rounded-xl p-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p>Modern mobiles</p>
                        <h2 className='my-2 text-2xl font-bold text-primary'>New collection</h2>
                        <button className='btn btn-primary rounded'>Shop Now</button>
                    </div>
                    <div>
                        <img className='w-52 md:w-72' src="https://i.ibb.co/PYrKYdr/Untitled-design-1-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p>Headphones</p>
                        <h2 className='my-2 text-2xl font-bold text-primary'>Best seller</h2>
                        <button className='btn btn-primary rounded'>Shop Now</button>
                    </div>
                    <div>
                        <img className='w-52 md:w-72' src="https://i.ibb.co/ZTQwhcZ/Untitled-design-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default NewCollection_BestSeller;