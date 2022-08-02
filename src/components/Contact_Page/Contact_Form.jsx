import React from 'react';
import { useForm } from "react-hook-form";

const Contact_Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <section className='grid md:grid-cols-2 gap-7 bg-slate-50 rounded-xl p-4'>
            <div>
                <div class="flex flex-col w-full border-opacity-50">
                    <div class="divider text-3xl font-bold">Contact us</div>
                </div>
                <div>
                    <h2 className='text-xl font-bold'><span className='text-5xl text-primary font-bold'>|</span> 24/7 At your service</h2>
                    <h2 className='text-xl mt-7'>SHOP LOCATION</h2>
                    <p className='text-xs font-bold tracking-wider'>1000 Dhaka, Savar New-Market Street, Bangladesh 23221
                        Latitude: 804.355.4383 Longitude: 804.367.7901</p>
                    <h2 className='text-xl mt-4'>STORE HOURS</h2>
                    <p className='text-xs font-bold tracking-wider'>Monday-Saturday 11am-7pm ET
                        Sunday 11am-6pm ET</p>
                    <h2 className='text-xl mt-4'>SPECIALIST HOURS</h2>
                    <p className='text-xs font-bold tracking-wider'>Monday-Friday 9am-5pm ET</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" class="input w-full" />
                <input type="text" placeholder="Email address" class="input w-full my-2" />
                <textarea class="textarea w-full h-96 mb-2" placeholder="Message"></textarea>
                <button type="submit" className='btn btn-primary w-full'>Submit <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg></button>
            </form>
        </section >
    );
};

export default Contact_Form;