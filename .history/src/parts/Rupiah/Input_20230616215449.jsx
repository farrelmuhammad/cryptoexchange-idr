import React from 'react';

const Input = () => {
    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center py-8">
            <div className="w-full mt-5 px-5 py-5 md:px-10 md:py-10 rounded-lg">
                <div className="w-full mb-10">
                    <h1 className="text-2xl font-bold text-center text-gray-700">Rupiah</h1>
                    <div className="mt-4 flex items-center justify-center">
                        <label htmlFor="currency" className="mr-2">
                            Pilih cryptocurrency:
                        </label>
                        <select
                            id="currency"
                            className="p-2 border border-gray-300 rounded-md"
                        >
                            <option value="btc">BTC</option>
                            <option value="eth">ETH</option>
                            <option value="dot">DOT</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Input;
