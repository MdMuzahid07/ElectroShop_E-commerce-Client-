import React from "react";
import { toast } from "react-toastify";


const Product_card = () => {

    const error = () => {
        toast("its not functional, Developer working on this site!");
    };

    return (
        <div className="card bg-white rounded border-2 hover:border-primary my-7">
            <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Product_card" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="rating rating-xs">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
                <h2 className="text-xl font-bold">name</h2>
                <p>$: Price</p>
                <div>
                    <button onClick={error} className="btn btn-circle btn-primary hover:bg-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <button onClick={error} className="btn btn-circle mx-2 btn-primary hover:bg-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
                    <label htmlFor="my-modal-4" className="modal-button btn btn-circle btn-primary hover:bg-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </label>
                </div >
            </div >
        </div >
    );
};

export default Product_card;