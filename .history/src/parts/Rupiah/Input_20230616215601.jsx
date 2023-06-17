import React, { useState } from 'react';

const Input = () => {
    const [amount, setAmount] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleCurrencyChange = (e) => {
        // Logika penanganan perubahan dropdown
    };

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center py-8">
            <div className="w-full mt-5 px-5 py-5 md:px-10 md:py-10 rounded-lg shadow-md">
                <div className="w-full mb-10">
                    <h1 className="text-2xl font-bold text-center text-gray-700">Rupiah</h1>
                    <div className="mt-4 flex items-center justify-center">
                        <label htmlFor="amount" className="mr-2">
                            Jumlah:
                        </label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={handleAmountChange}
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <label htmlFor="currency" className="ml-4 mr-2">
                            Pilih cryptocurrency:
                        </label>
                        <select
                            id="currency"
                            onChange={handleCurrencyChange}
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
