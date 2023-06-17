import React, { useEffect, useState } from 'react';
import useAsync from "../../helpers/hooks/useAsync";
import { useNavigate } from "react-router-dom";
import useForm from "../../helpers/hooks/useForm";
import { useGlobalContext } from "../../helpers/hooks/useGlobalContext";
import fetchData from '../../helpers/fetch';


const Input = () => {
    const { data, run, isLoading } = useAsync();
    const navigate = useNavigate();

    const { state, dispatch } = useGlobalContext()

    const { state: payload, fnUpdateState } = useForm({
        amount: "",
        crypto: "",
    })

    useEffect(() => {
        run(
            fetchData({
                url: `/exchange/tickers`,
            })
        );
    }, [run]);

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center py-8">
            <div className="w-full mt-5 px-5 py-5 md:px-10 md:py-10 rounded-lg">
                <div className="w-full mb-10">
                    <h1 className="text-2xl font-bold text-center text-gray-700">Rupiah</h1>
                    <form className="mt-4 flex items-center justify-center gap-3">
                        <input
                            type="number"
                            onChange={fnUpdateState}
                            value={payload.amount}
                            id="amount"
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <select
                            id="currency"
                            className="p-2 border border-gray-300 rounded-md"
                            onChange={fnUpdateState}
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
