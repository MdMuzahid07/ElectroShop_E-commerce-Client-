import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";


const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div className="mx-auto my-7">
            <HelmetTitle>Add Product</HelmetTitle>
            <h2 className="text-3xl font-bold text-primary">Add product</h2>
            <hr className="mt-5 mb-7" />

            <div className="md:flex gap-5">
                <div className="card card-compact md:w-72 h-72 bg-white text-primary border drop-shadow rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-50 w-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                </div>

                <div className="card card-compact w-full border drop-shadow rounded my-7 md:my-0">
                    <div className="card-body">

                        <h2 className="text-3xl text-accent font-bold mt-7">Upload new product</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="grid md:grid-cols-2 gap-4">
                                <input {...register("productName")} type="text" placeholder="product name" className="input input-bordered input-primary w-full rounded my-4" />
                                <input {...register("Brand")} type="text" placeholder="Brand" className="input input-bordered input-primary w-full rounded my-4" />
                            </div>

                            <textarea {...register("description")} type="text" placeholder="description" className="textarea textarea-primary w-full rounded" />

                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <input {...register("price")} type="number" placeholder="Price" className="input input-bordered input-primary w-full rounded" />
                                <input {...register("quantity")} type="number" placeholder="Product quantity" className="input input-bordered input-primary w-full rounded" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <input {...register("minimumOrder")} type="number" placeholder="Minimum order" className="input input-bordered input-primary w-full rounded" />

                                <input {...register("for")} type="text" placeholder="Where you want showcase the product" className="input input-bordered input-primary w-full rounded" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <div>
                                    <p>Product image</p>
                                    <input {...register("img")} type="file" className=" bg-accent p-2 rounded w-full text-xs text-white
                                file:rounded-full file:border-0
                                file:text-xs file:font-xs
                                file:bg-primary file:text-white
                                "/>
                                </div>
                                <div>
                                    <p>SnapShot0</p>
                                    <input {...register("snapshot0")} type="file" className=" bg-accent p-2 rounded w-full text-xs text-white
                                file:rounded-full file:border-0
                                file:text-xs file:font-xs
                                file:bg-primary file:text-white
                                "/>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <p>Snapshot1</p>
                                    <input {...register("snapshot1")} type="file" className=" bg-accent p-2 rounded w-full text-xs text-white
                                file:rounded-full file:border-0
                                file:text-xs file:font-xs
                                file:bg-primary file:text-white
                                "/>
                                </div>
                                <div>
                                    <p>SnapShot2</p>
                                    <input {...register("snapshot2")} type="file" className=" bg-accent p-2 rounded w-full text-xs text-white
                                file:rounded-full file:border-0
                                file:text-xs file:font-xs
                                file:bg-primary file:text-white
                                "/>
                                </div>
                            </div>

                            <button className="btn btn-circle btn-outline btn-primary my-7"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg></button>
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default AddProducts;
