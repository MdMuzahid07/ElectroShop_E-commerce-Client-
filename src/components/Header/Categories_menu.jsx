import React from 'react';
import { Link } from 'react-router-dom';

const Categories_menu = () => {
    return (
        <div>
            <div class="dropdown md:dropdown-start">
                <label tabindex="0">Categories</label>
                <ul tabindex="0" class="dropdown-content menu p-2 drop-shadow bg-white z-20 rounded  w-64 mt-7">
                    <li className='bg-slate-100 border-none'>
                        <Link to="/">PC/Laptop</Link>
                    </li>
                    <li className='bg-slate-100 border-none my-2'>
                        <Link to="/">Mobiles</Link>
                    </li>
                    <li className='bg-slate-100 border-none'>
                        <Link to="/">Computer console</Link>
                    </li>
                    <li className='bg-slate-100 border-none my-2'>
                        <Link to="/">Mobile Accessories</Link>
                    </li>
                    <li className='bg-slate-100 border-none'>
                        <Link to="/">Headphones</Link>
                    </li>
                    <li className='bg-slate-100 border-none my-2'>
                        <Link to="/">Gaming console</Link>
                    </li>
                    <li className='bg-slate-100 border-none'>
                        <Link to="/">Sports console</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Categories_menu;