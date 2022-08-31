import React from 'react';

const ProductFilteringSystem = () => {
    return (
        <div className='grid md:grid-cols-4 gap-3'>

            <div className='bg-slate-50 rounded p-2'>
                <h2 className='text-xs font-bold text-primary mb-2'>Filter by price</h2>
                <div class="grid grid-cols-4 gap-2">
                    <button class="btn btn-md btn-primary rounded">$7</button>
                    <button class="btn btn-md btn-primary rounded">$7</button>
                    <button class="btn btn-md btn-primary rounded">$7</button>
                    <button class="btn btn-md btn-primary rounded">$7</button>
                    <button class="btn btn-md btn-primary rounded">$7</button>
                    <button class="btn btn-md btn-primary rounded">$7</button>
                    <button class="btn btn-md btn-primary rounded">$7</button>
                    <button class="btn btn-md btn-primary rounded">$7</button>
                </div>
            </div>

            <div className='bg-slate-50 rounded p-2'>
                <h2 className='text-xs font-bold text-primary mb-2'>Filter by color</h2>
                <div class="form-control">
                    <label class="label cursor-pointer grid grid-cols-4 gap-2">
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                        <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
                    </label>
                </div>
            </div>

            <div className='bg-slate-50 rounded p-2'>
                <h2 className='text-xs font-bold text-primary mb-2'>Short by ___</h2>
                <select class="select w-full max-w-xs rounded">
                    <option disabled selected>Filter By</option>
                    <option>Short by popularity</option>
                    <option>Short by latest</option>
                    <option>Short by top rating</option>
                    <option>Short by top average rating</option>
                    <option>Short by log price</option>
                    <option>Short by top price</option>
                    <option>Short by premium brands</option>
                </select>
            </div>

            <div className='bg-slate-50 rounded p-2'>
                <h2 className='text-xs font-bold text-primary mb-2'>Short by ___</h2>
                <select class="select w-full max-w-xs rounded">
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>30</option>
                    <option>50</option>
                </select>
            </div>

        </div>
    );
};

export default ProductFilteringSystem;