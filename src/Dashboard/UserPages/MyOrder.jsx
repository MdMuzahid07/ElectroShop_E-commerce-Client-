import React from "react";
import HelmetTitle from "../../components/HelmetTitle/HelmetTitle";

const MyOrder = () => {
    return (
        <div className="my-7">
            <HelmetTitle>My Order</HelmetTitle>
            <h2 className="text-3xl font-bold text-primary">My Orders</h2>
            <hr className="mt-5 mb-7" />

            <div className="overflow-x-auto w-full  border drop-shadow rounded-xl">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className="font-bold text-primary">quantity</th>
                            <th className="font-bold text-primary">Image</th>
                            <th className="font-bold text-primary">Name</th>
                            <th className="font-bold text-primary">Total price</th>
                            <th className="font-bold text-primary">Mange</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <h2>100</h2>
                            </th>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-primary rounded btn-xs block">Cancel</button>
                                <button className="btn btn-primary rounded btn-xs block my-2">Payment</button>
                                <button className="btn btn-primary rounded btn-xs block">Track</button>
                            </th>
                        </tr>

                        <tr>
                            <th>
                                <h2>100</h2>
                            </th>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-primary rounded btn-xs block">Cancel</button>
                                <button className="btn btn-primary rounded btn-xs block my-2">Payment</button>
                                <button className="btn btn-primary rounded btn-xs block">Track</button>
                            </th>
                        </tr>




                        <tr>
                            <th>
                                <h2>100</h2>
                            </th>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-primary rounded btn-xs block">Cancel</button>
                                <button className="btn btn-primary rounded btn-xs block my-2">Payment</button>
                                <button className="btn btn-primary rounded btn-xs block">Track</button>
                            </th>
                        </tr>
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><button className="btn btn-primary rounded"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg><span className="ml-2">Payment All</span></button></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div >
    );
};

export default MyOrder;