import React from 'react';
import { Link } from 'react-router-dom';
import Categories_menu from './Categories_menu';
import Header_top from './Header_top';

const Header = ({ children }) => {
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
                                            <button className="btn btn-primary btn-xs rounded-none">View cart</button>
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
                                        <Link to="dashboard/profile">Profile</Link>
                                        <Link to="/login">Register/Login</Link>
                                        <Link to="/dashboard" className='font-bold'>Dashboard</Link>
                                        <h2><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg> LogOut</h2>
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