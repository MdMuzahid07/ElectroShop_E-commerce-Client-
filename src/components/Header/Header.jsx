import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Categories_menu from './Categories_menu';
import Header_top from './Header_top';
import { signOut } from "firebase/auth";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Header = ({ children }) => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
            toast.success("SignOut successfully")
        }).catch((error) => {
            toast.error(error.message);
        });
    }
    return (
        <header>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Header_top />
                    {/* <!-- Navbar --> */}
                    <hr />
                    <div className="w-full navbar bg-white border drop-shadow sticky top-0 z-20">
                        <div className="navbar-start">
                            <div className="lg:hidden">
                                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <Link to='/' className="btn btn-ghost rounded-none normal-case text-2xl  md:text-4xl text-primary font-bold">ElectroShop</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0 capitalize font-bold">
                                <li>
                                    <Link className="hover:text-red-500" to="/">home</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-red-500" to="/shop">shop</Link>
                                </li>
                                <li>
                                    <Categories_menu />
                                </li>
                                <li>
                                    <Link className="hover:text-red-500" to="/about">about</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-red-500" to="/contact">contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-end ">

                            <div className="dropdown dropdown-end md:dropdown-left">
                                <label tabIndex="0" className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </label>
                                <ul tabIndex="0" className="dropdown-content menu rounded-box w-72">
                                    <div className="form-control">
                                        <div className="input-group">
                                            <input type="text" placeholder="Search…" className="input input-bordered ml-10 md:ml-0" />
                                            <button className="btn btn-square">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </ul>
                            </div>

                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </label>
                                <div tabIndex="0" className="mt-3 rounded dropdown-content border drop-shadow w-52 bg-base-100">
                                    <div className="card-body">
                                        <span className="font-bold text-lg">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <NavLink to="/cart" className="btn btn-primary btn-xs rounded-none">View cart</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dropdown dropdown-end ml-5">
                                <label tabIndex="0">
                                    <div className="avatar">
                                        <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="https://placeimg.com/192/192/people" alt="" />
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex="0" className="dropdown-content menu p-2 border drop-shadow bg-base-100 rounded w-52">
                                    <li>
                                        <Link to="dashboard/profile"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>Profile</Link>
                                        <Link to="/login"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>Register/Login</Link>
                                        <Link to="/dashboard/my_orders" className='font-bold'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                        </svg>Dashboard</Link>
                                        <button onClick={handleSignOut} className="button-white">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg> LogOut
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 capitalize font-bold">
                        <li>
                            <Link className="hover:text-red-500" to="/">home</Link>
                        </li>
                        <li>
                            <Link className="hover:text-red-500" to="/shop">shop</Link>
                        </li>
                        <li>
                            <Categories_menu />
                        </li>
                        <li>
                            <Link className="hover:text-red-500" to="/about">about</Link>
                        </li>
                        <li>
                            <Link className="hover:text-red-500" to="/contact">contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;