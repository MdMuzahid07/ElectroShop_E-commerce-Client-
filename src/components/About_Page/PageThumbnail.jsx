import React from "react";
import { Link } from "react-router-dom";


const Page_Thumbnail = () => {
    return (
        <section className="grid md:grid-cols-2 items-center bg-slate-50 rounded-xl p-4 text-white">
            <div className="md:ml-20">
                <p className="text-5xl text-primary font-bold mb-3">About</p>
                <div className="flex items-center">
                    <Link to="/" className="text-black font-bold">Back To Home</Link>
                    <span className="mx-2 bg-primary px-2 rounded-full">{`>`}</span>
                    <h2 className="font-bold text-primary">About</h2>
                </div>
            </div>
            <img src="https://i.ibb.co/f9fpPVm/Untitled-design-removebg-preview.png" alt="Laptop_image" />
        </section>
    );
};

export default Page_Thumbnail;