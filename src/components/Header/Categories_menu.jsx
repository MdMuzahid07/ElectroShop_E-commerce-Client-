import React from 'react';

const Categories_menu = () => {
    return (
        <div class="dropdown dropdown-hover">
            <label tabindex="0">Categories</label>
            <ul tabindex="0" class="dropdown-content menu w-52 bg-white border drop-shadow rounded mt-20">
                <li>
                    <div class="form-control rounded w-52 bg-white">
                        <select class="select">
                            <option>Star Wars</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </div>
                </li>
            </ul>
        </div>

    );
};

export default Categories_menu;