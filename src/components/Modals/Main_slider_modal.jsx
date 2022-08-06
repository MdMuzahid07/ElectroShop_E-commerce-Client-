import React from 'react';

const HomeMain = () => {
    return (
        <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label for="my-modal-4" className="modal">
                <label className="modal-box relative rounded border-2 border-primary" for="">
                    <h3 className="text-lg font-bold">Welcome to ElectroShop</h3>
                    <p className="py-4">Developer working on it , please be patient</p>
                </label>
            </label>
        </ >
    );
};

export default HomeMain;