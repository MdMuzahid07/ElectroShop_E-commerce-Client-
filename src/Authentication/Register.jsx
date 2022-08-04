import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className='my-7'>
            <div className='max-w-screen-lg	mx-auto bg-white'>
                <div className="grid md:grid-cols-2 gap-2 bg-primary border drop-shadow rounded-xl">
                    <div className='flex justify-center items-center p-7'>
                        <div className=' text-white'>
                            <h2 className='text-4xl font-bold'>welcome back!</h2>
                            <p className='font-bold text-xs'>Happy to see you again!</p>
                            <button className='btn btn-outline text-white text-xs my-5'>Create Account</button>
                        </div>
                    </div>
                    <div className='bg-slate-50 py-44 rounded-r-lg p-7'>
                        <h2 className='text-3xl font-bold mb-5'>Please Login!</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email")} type="email" placeholder='Email address' class="input input-bordered input-primary w-full rounded" />

                            <input {...register("password")} type="password" placeholder='Password' class="input input-bordered input-primary w-full rounded my-4" />

                            <button className='btn btn-circle btn-outline btn-primary'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;