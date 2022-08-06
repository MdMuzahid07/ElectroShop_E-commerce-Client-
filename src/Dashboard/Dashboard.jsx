import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ children }) => {
    return (
        <div className='max-w-full my-7 bg-slate-100 rounded-xl'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label for="my-drawer-2" className="btn btn-circle btn-outline btn-primary drawer-button lg:hidden m-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    {/* <!-- Page content here -->
                     */}
                    {children}
                </div>
                <div className="drawer-side rounded-l-lg">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-52 bg-primary text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="dashboard">My Profile</Link></li>
                        <li><Link to="dashboard">Give a review</Link></li>
                        <li><Link to="dashboard">My Orders</Link></li>
                        <li><Link to="dashboard">Manage Orders</Link></li>
                        <li><Link to="dashboard">Manage Users</Link></li>
                        <li><Link to="dashboard">Add Product</Link></li>
                        <li><Link to="dashboard">Manage Product</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;