import React, { useEffect, useState } from 'react';
import useAsync from "../../helpers/hooks/useAsync";
import { useNavigate } from "react-router-dom";
import useForm from "../../helpers/hooks/useForm";
import { useGlobalContext } from "../../helpers/hooks/useGlobalContext";
import fetchData from '../../helpers/fetch';

const Input = () => {
    const { data, run, isLoading } = useAsync();
    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [exchangeRate, setExchangeRate] = useState(0);

    useEffect(() => {
        run(
            fetchData({
                url: `/exchange/tickers`,
            })
        );
    }, [run]);

    useEffect(() => {
        if (data) {
            const filteredData = data.filter(
                (item) =>
                    item.symbol === "BTC-USD" ||
                    item.symbol === "ETH-USD" ||
                    item.symbol === "DOT-USD"
            );
            if (filteredData.length > 0) {
                const symbol = filteredData[0].symbol.split("-")[0];
                setExchangeRate(filteredData[0].last_trade_price);
                setSelectedCurrency(symbol);
            }
        }
    }, [data]);

    useEffect(() => {
        if (selectedCurrency && exchangeRate) {
            const usdAmount = amount / 14964.35; // Ganti USD_TO_IDR_EXCHANGE_RATE dengan kurs USD ke IDR terkini

            let currency = 0;

            if (selectedCurrency === "BTC") {
                currency = usdAmount / exchangeRate;
            } else if (selectedCurrency === "ETH") {
                currency = usdAmount / exchangeRate; // Ganti dengan kurs ETH ke IDR terkini
            } else if (selectedCurrency === "DOT") {
                currency = usdAmount / exchangeRate; // Ganti dengan kurs DOT ke IDR terkini
            }

            setResult(Number(currency.toFixed(8)));
        }
    }, [amount, selectedCurrency, exchangeRate]);

    async function fnSubmit(e) {
        e.preventDefault();
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
                            className="p-2 border border-gray-300 rounded-md"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                        />
                        <select
                            id="currency"
                            className="p-2 border border-gray-300 rounded-md"
                            value={selectedCurrency}
                            onChange={(e) => setSelectedCurrency(e.target.value)}
                        >
                            {isLoading ? (
                                <option>Loading...</option>
                            ) : (
                                data
                                    ?.filter(
                                        (item) =>
                                            item.symbol === "BTC-USD" ||
                                            item.symbol === "ETH-USD" ||
                                            item.symbol === "DOT-USD"
                                    )
                                    .map((item, index) => {
                                        const symbol = item.symbol.split("-")[0];
                                        return (
                                            <option key={index} value={symbol}>
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
                    <div className="mt-4">
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            <p>
                                {amount} IDR is equal to {result} {selectedCurrency}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Input;
