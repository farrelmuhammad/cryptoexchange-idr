import React, { useEffect, useState } from 'react';
import useAsync from "../../helpers/hooks/useAsync";
import { useNavigate } from "react-router-dom";
import useForm from "../../helpers/hooks/useForm";
import { useGlobalContext } from "../../helpers/hooks/useGlobalContext";
import fetchData from '../../helpers/fetch';


const Input = () => {
    const { data, run, isLoading } = useAsync();
    const { amount, setAmount } = useState();
    const { currency, setCurrency } = useState();

    useEffect(() => {
        run(
            fetchData({
                url: `/exchange/tickers`,
            })
        );
    }, [run]);

    async function fnSubmit(e) {
        e.preventDefault();

        // Lakukan penghitungan kurs di sini
        // Gunakan nilai amount dan currency dari state
        const selectedCurrency = currency; // Menggunakan nilai currency dari state
        const selectedAmount = parseFloat(amount); // Menggunakan nilai amount dari state yang dikonversi menjadi tipe angka

        // Lakukan perhitungan kurs sesuai kebutuhan, misalnya:
        const exchangeRate = parseFloat(currency); // Anggaplah ada kurs tetap

        const convertedAmount = selectedAmount * exchangeRate;
        console.log(convertedAmount)

        // Lakukan sesuatu dengan nilai convertedAmount, misalnya menyimpannya ke state atau melakukan navigasi ke halaman lain

        // Contoh penyimpanan nilai convertedAmount ke state menggunakan setCurrency (asumsi setCurrency digunakan untuk menyimpan hasil konversi)
        setCurrency(convertedAmount);
    }


    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center py-8">
            <div className="w-full mt-5 px-5 py-5 md:px-10 md:py-10 rounded-lg">
                <div className="w-full mb-10">
                    <h1 className="text-2xl font-bold text-center text-gray-700">Rupiah</h1>
                    <form className="mt-4 flex items-center justify-center gap-3" onSubmit={fnSubmit}>
                        <input
                            type="number"
                            id="amount"
                            onChange={(e) => setAmount(e.target.value)}
                            // value={amount}
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <select
                            id="currency"
                            className="p-2 border border-gray-300 rounded-md"
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            {isLoading ? (
                                <option>Loading...</option>
                            ) : (
                                data
                                    ?.filter((item) => item.symbol === "BTC-USD" || item.symbol === "ETH-USD" || item.symbol === "DOT-USD")
                                    .map((item, index) => {
                                        const symbol = item.symbol.split("-")[0]; // Extract the first part of the symbol
                                        return (
                                            <option key={index} value={item.last_trade_price}>
                                                {symbol}
                                            </option>
                                        );
                                    })
                            )}
                        </select>
                        <button
                            type="submit"
                            className="p-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Input;
