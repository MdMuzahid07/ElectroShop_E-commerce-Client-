import React from 'react';
import { useForm } from "react-hook-form";

const Contact_Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <section className='grid md:grid-cols-2 gap-7'>
            <div>

            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="test" {...register("example")} />
                    <input {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </section >
    );
};

export default Contact_Form;