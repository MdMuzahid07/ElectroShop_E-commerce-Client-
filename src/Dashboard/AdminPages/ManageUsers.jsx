import React from 'react';
import HelmetTitle from '../../components/HelmetTitle/HelmetTitle';

const ManageUsers = () => {
    const handleCancelAll = () => {
        window.confirm("are you sure?")
    }
    return (
        <div className='my-7'>
            <HelmetTitle>Mange Users</HelmetTitle>
            <h2 className='text-3xl font-bold text-primary'>Manage Users</h2>
            <hr className='mt-5 mb-7' />

            <div className="overflow-x-auto w-full  border drop-shadow rounded-xl">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className='font-bold text-primary'>UserId</th>
                            <th className='font-bold text-primary'>UserName</th>
                            <th className='font-bold text-primary'>Status</th>
                            <th className='font-bold text-primary'>Mange Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <h2>100</h2>
                            </th>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Normal user</td>
                            <th>
                                <button className="btn btn-primary rounded btn-xs block">Delete</button>
                                <button className="btn btn-primary rounded btn-xs block  my-2">MakeAdmin</button>
                                <button className="btn btn-primary rounded btn-xs block  my-2">MakeSuperAdmin</button>
                            </th>
                        </tr>


                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><button onClick={handleCancelAll} className='btn btn-primary rounded'><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg><span className='ml-2'>Update All Quantities</span></button></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
};

export default ManageUsers;