import React from 'react';

const Header_top = () => {
    return (
        <section className='bg-slate-100'>
            <div className="flex justify-between items-center max-h-7 px-5">
                <div>
                    <button className='text-xs font-bold flex items-center'><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>Order Tracking</button>
                </div>
                <div className="flex">
                    <select className="select select-xs bg-slate-100 rounded-none max-w-xs">
                        <option disabled selected>Language</option>
                        <option>Bengali</option>
                        <option>Japanize</option>
                        <option>Chinese</option>
                    </select>

                    <select className="select  select-xs bg-slate-100 rounded-none max-w-xs">
                        <option disabled selected>Currency</option>
                        <option>USD</option>
                        <option>BDT</option>
                        <option>Japanese yen</option>
                        <option>Renminbi</option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default Header_top;