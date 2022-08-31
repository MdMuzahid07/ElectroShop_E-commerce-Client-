import React from 'react';

const ProductFilteringSystem = () => {
    return (
        <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-3'>

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
                <h2 className='text-xs font-bold text-primary mb-2'>Filter by ___</h2>
                <select class="select w-full max-w-xs rounded">
                    <option disabled selected>Filter By</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
            </div>

            <div className='bg-slate-50 rounded p-2'>
                <h2>Lorem ipsum dolor</h2>
            </div>

            <div className='bg-slate-50 rounded p-2'>
                <h2>Lorem ipsum dolor</h2>
            </div>

        </div>
    );
};

export default ProductFilteringSystem;