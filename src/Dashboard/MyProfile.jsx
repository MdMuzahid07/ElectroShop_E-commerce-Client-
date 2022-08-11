import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Google_Map from '../components/Contact_Page/Google_Map';

const MyProfile = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div className='mx-auto my-7'>
            <h2 className='text-3xl font-bold text-primary'>My Profile</h2>
            <hr className='mt-5 mb-7' />

            <div className='md:flex gap-5'>
                <div class="card card-compact md:w-72 h-72 bg-white text-primary border drop-shadow rounded">
                    <div class="avatar">
                        <div class="w-44 mx-auto rounded -mt-7">
                            <img src="https://placeimg.com/192/192/people" alt="profile_img" />
                        </div>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">name</h2>
                        <p>title</p>
                        <div class="card-actions bg-black rounded p-2">
                            <input type="file" class=" w-full text-xs text-white
     
                                file:rounded-full file:border-0
                                file:text-xs file:font-xs
                                file:bg-primary file:text-white
                                "/>
                        </div>
                    </div>
                </div>

                <div class="card card-compact w-full border drop-shadow rounded my-7 md:my-0">
                    <div class="card-body">

                        <h2 className='text-3xl text-accent font-bold mt-7'>Update your profile</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='grid md:grid-cols-2 gap-4'>
                                <input {...register("name")} type="text" placeholder='first name' class="input input-bordered input-primary w-full rounded my-4" />
                                <input {...register("name")} type="text" placeholder='last name' class="input input-bordered input-primary w-full rounded my-4" />
                            </div>

                            <input {...register("email")} type="email" placeholder='email address' class="input input-bordered input-primary w-full rounded" />

                            <input {...register("contact")} type="number" placeholder='phone' class="input input-bordered input-primary w-full rounded my-4" />

                            <input {...register("address")} type="text" placeholder='address' class="input input-bordered input-primary w-full rounded" />

                            <div className='grid md:grid-cols-2 gap-4 my-4'>
                                <input {...register("city")} type="text" placeholder='city' class="input input-bordered input-primary w-full rounded" />
                                <input {...register("state")} type="text" placeholder='state' class="input input-bordered input-primary w-full rounded" />
                            </div>

                            <div className='grid md:grid-cols-2 gap-4'>
                                <input {...register("country")} type="text" placeholder='country' class="input input-bordered input-primary w-full rounded" />
                                <input {...register("zip")} type="number" placeholder='zip code' class="input input-bordered input-primary w-full rounded" />
                            </div>

                            <input {...register("password")} type="password" placeholder='password' class="input input-bordered input-primary w-full rounded mt-4" />

                            <button className='btn btn-circle btn-outline btn-primary my-7'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg></button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='bg-black rounded mt-7 text-white font-bold p-7'>

                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam modi reiciendis quas fugiat eaque, laborum corrupti voluptate exercitationem ex?</h1>
            </div>
        </div>
    );
};

export default MyProfile;