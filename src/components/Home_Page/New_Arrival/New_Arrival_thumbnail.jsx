import React from "react";

const New_Arrival_thumbnail = () => {
    return (
        <div className="my-20 grid md:grid-cols-2 items-center bg-white border drop-shadow rounded-xl p-4">
            <div className="md:ml-20">
                <p className="mb-3 font-bold">30 OCT - 03 DEC</p>
                <h2 className="text-2xl md:text-4xl font-bold text-primary">New Collection</h2>
                <p className="font-bold">20% Off / Selected items</p>
                <button className="btn btn-primary rounded mt-4">Shop Now</button>
            </div>
            <img src="https://i.ibb.co/tsNsQh9/Untitled-design-1-removebg-preview.png" alt="Apple_products" />
        </div>
    );
};

export default New_Arrival_thumbnail;