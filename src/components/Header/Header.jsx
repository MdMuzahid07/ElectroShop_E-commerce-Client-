import React from 'react';
import { Link } from 'react-router-dom';
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
                                <label for="my-drawer-3" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
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
                                    <div class="dropdown dropdown-hover">
                                        <label tabindex="0">categories</label>
                                        <ul tabindex="0" class="dropdown-content menu p-2 border drop-shadow shadow rounded bg-base-100 w-96 mt-28 z-30">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </ul>
                                    </div>
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

                            <div class="dropdown dropdown-end md:dropdown-left">
                                <label tabindex="0" class="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </label>
                                <ul tabindex="0" class="dropdown-content menu rounded-box w-72">
                                    <input type="text" placeholder="Search" class="input w-full border drop-shadow max-w-xs ml-10 md:ml-0" />
                                    <button className="btn btn-ghost btn-circle absolute right-0">Ok</button>
                                </ul>
                            </div>

                            <div class="dropdown dropdown-end">
                                <label tabindex="0" class="btn btn-ghost btn-circle">
                                    <div class="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span class="badge badge-sm indicator-item">8</span>
                                    </div>
                                </label>
                                <div tabindex="0" class="mt-3 rounded dropdown-content border drop-shadow w-52 bg-base-100">
                                    <div class="card-body">
                                        <span class="font-bold text-lg">8 Items</span>
                                        <span class="text-info">Subtotal: $999</span>
                                        <div class="card-actions">
                                            <button class="btn btn-primary btn-xs rounded-none">View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="dropdown dropdown-end ml-5">
                                <label tabindex="0">
                                    <div class="avatar">
                                        <div class="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                </label>
                                <ul tabindex="0" class="dropdown-content menu p-2 border drop-shadow bg-base-100 rounded w-52">
                                    <li>
                                        <h2>Profile</h2>
                                        <h2>Register/Logout</h2>
                                        <h2 className='font-bold'>Dashboard</h2>
                                        <h2><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg> LogOut</h2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 capitalize font-bold">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link className="hover:text-red-500" to="/">home</Link>
                        </li>
                        <li>
                            <Link className="hover:text-red-500" to="/shop">shop</Link>
                        </li>
                        <li>
                            <div class="dropdown dropdown-hover">
                                <label tabindex="0" className="button">categories</label>
                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
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