import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";
import Social_login from "./Social_login";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";


const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data?.email;
        const password = data?.password;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential?.user;
                if (user) {
                    navigate("/");
                    toast.success(`${user?.displayName} Welcome to ElectroShop`);
                }
            })
            .catch((error) => {
                toast.error(error?.message);
            });
    };

    if (errors) {
        toast.error(errors?.message);
    }

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="my-7">
            <HelmetTitle>Register</HelmetTitle>
            <div className="max-w-screen-lg	mx-auto bg-white">
                <div className="grid md:grid-cols-2 gap-2 bg-primary border drop-shadow rounded-xl">
                    <div className="flex items-center p-7">
                        <div className=" text-white">
                            <h2 className="text-4xl font-bold">Welcome to ElectroShop!</h2>
                            <p className="font-bold text-xs my-2">Please create a account</p>
                            <Link to="/login" className="btn btn-outline btn-wide text-white text-xs my-5">Login</Link>
                        </div>
                    </div>
                    <div className="bg-slate-50 py-24 rounded-r-lg p-7">
                        <h2 className="text-3xl text-accent font-bold mb-5">Please Register!</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("name")} type="text" placeholder="your Name" className="input input-bordered input-primary w-full rounded my-4" />

                            <input {...register("email")} type="email" placeholder="Email address" className="input input-bordered input-primary w-full rounded" />

                            <input {...register("password")} type="password" placeholder="Password" className="input input-bordered input-primary w-full rounded my-4" />

                            <button className="btn btn-circle btn-outline btn-primary"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg></button>
                        </form>
                        <div className="divider font-bold text-primary">OR</div>
                        <Social_login />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;