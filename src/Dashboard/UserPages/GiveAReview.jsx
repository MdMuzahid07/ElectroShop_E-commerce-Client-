import React from 'react';

const GiveAReview = () => {
    return (
        <div className='my-7'>
            <h2 className='text-3xl font-bold text-primary'>Give a review</h2>
            <hr className='mt-5 mb-7' />
            <div className="bg-white border drop-shadow rounded my-20">
                <div className="grid md:grid-cols-2">
                    <div className='bg-primary rounded-l p-7 text-white'>
                        <div className="avatar -mt-16">
                            <div className="w-44 border-4 border-white drop-shadow rounded-xl">
                                <img src="https://placeimg.com/192/192/people" alt="profile_img " />
                            </div>
                        </div>
                        <h2 className='text-2xl font-bold'>Review US</h2>
                        <p className='text-xs font-bold'>your a review is so much valuable for us</p>
                    </div>
                    <div className='p-7'>
                        <form action="">
                            <textarea className="textarea textarea-primary w-full" placeholder="What do you think about our service"></textarea>
                            <div className="rating mt-3 block">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
                            </div>
                            <button className='btn btn-circle btn-outline btn-primary mt-7'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiveAReview;