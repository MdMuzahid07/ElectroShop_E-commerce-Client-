import React from 'react';

const GiveAReview = () => {
    return (
        <div className='my-7'>
            <h2 className='text-3xl font-bold text-primary'>Give a review</h2>
            <hr className='mt-5 mb-7' />
            <div class="bg-white border drop-shadow rounded mt-10">
                <div class="grid md:grid-cols-2">
                    <div className='bg-primary rounded-l p-7 text-white'>
                        <div>
                            <div class="avatar absolute -top-7">
                                <div class="w-44 border-4 border-accent rounded-xl">
                                    <img src="https://placeimg.com/192/192/people" alt="profile_img " />
                                </div>
                            </div>
                            <div className='absolute bottom-7'>
                                <h2 className='text-2xl font-bold'>Review US</h2>
                                <p className='text-xs font-bold'>your a review is so much valuable for us</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-7'>
                        <form action="">
                            <textarea class="textarea textarea-primary w-full" placeholder="What do you think about our service"></textarea>
                            <div class="rating mt-3 block">
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-primary" />
                            </div>
                            <button className='btn btn-circle btn-outline btn-primary mt-7'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiveAReview;