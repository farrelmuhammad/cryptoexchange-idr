import React, { useEffect, useState } from 'react';
import useAsync from "../../helpers/hooks/useAsync";
// import fetch from "../../helpers/fetch";
import { useNavigate } from "react-router-dom";
import useForm from "../../helpers/hooks/useForm";
import { useGlobalContext } from "../../helpers/hooks/useGlobalContext";
// import axios from 'axios';
import fetchData from '../../helpers/fetch';


const Input = () => {
    const { data, run, isLoading } = useAsync();
    const navigate = useNavigate();

    const { state, dispatch } = useGlobalContext()

    const { state: payload, fnUpdateState } = useForm({
        completeName: "",
        emailAddress: "",
        address: "",
        phoneNumber: "",
        courier: "",
        payment: "",
    })

    useEffect(() => {
        run(
            fetchData({
                url: `/exchange/tickers`,
            })
        );
    }, [run]);
    console.log(data)
    const filteredData = data.filter(item => item.symbol.includes('USD'));
    console.log(filteredData);
    async function fnSubmit(e) {
        e.preventDefault();

        try {
            const res = await fetch({
                url: `/api/checkout`,
                method: "POST",
                body: JSON.stringify({
                    ...payload,
                    cart: Object.keys(state.cart).map(key => state.cart[key])
                }),
            })
            if (res) {
                navigate("/congratulation")
                dispatch({
                    type: "RESET_CART"
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    const [amount, setAmount] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleCurrencyChange = (e) => {
        // Logika penanganan perubahan dropdown
    };

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center py-8">
            <div className="w-full mt-5 px-5 py-5 md:px-10 md:py-10 rounded-lg">
                <div className="w-full mb-10">
                    <h1 className="text-2xl font-bold text-center text-gray-700">Rupiah</h1>
                    <form className="mt-4 flex items-center justify-center gap-3">
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={handleAmountChange}
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <select
                            id="currency"
                            onChange={handleCurrencyChange}
                            className="p-2 border border-gray-300 rounded-md"
                        >
                            console.log(data);
                            {isLoading ? () => <option>Loading...</option> : data?.map((item, index) => <option key={index} value={item.symbol}>{item.symbol}</option>)}
                            {/* <option value="btc">BTC</option>
                            <option value="eth">ETH</option>
                            <option value="dot">DOT</option> */}
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
