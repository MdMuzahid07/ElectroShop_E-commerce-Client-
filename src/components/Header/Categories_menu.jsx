import React from 'react';
import { Link } from 'react-router-dom';

const Categories_menu = () => {
    return (
        <div>
            <div className="dropdown md:dropdown-start">
                <label tabIndex="0">Categories</label>
                <ul tabIndex="0" className="dropdown-content menu p-2 drop-shadow bg-white rounded  w-68 mt-7">
                    <li className='bg-slate-100 border-none'>
                        <button as={Link} to="/" className="btn btn-outline btn-primary btn-wide rounded">PC/Laptop</button>
                    </li>
                    <li className='bg-slate-100 border-none my-2'>
                        <button as={Link} to="/" className="btn btn-outline btn-primary btn-wide rounded">Mobiles</button>
                    </li>
                    <li className='bg-slate-100 border-none'>
                        <button as={Link} to="/" className="btn btn-outline btn-primary btn-wide rounded">Computer console</button>
                    </li>
                    <li className='bg-slate-100 border-none my-2'>
                        <button as={Link} to="/" className="btn btn-outline btn-primary btn-wide rounded">Mobile Accessories</button>
                    </li>
                    <li className='bg-slate-100 border-none'>
                        <button as={Link} to="/" className="btn btn-outline btn-primary btn-wide rounded">Headphones</button>
                    </li>
                    <li className='bg-slate-100 border-none my-2'>
                        <button as={Link} to="/" className="btn btn-outline btn-primary btn-wide rounded">Gaming console</button>
                    </li>
                    <li className='bg-slate-100 border-none'>
                        <button as={Link} to="/" className="btn btn-outline btn-primary btn-wide rounded">Sports console</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Categories_menu;