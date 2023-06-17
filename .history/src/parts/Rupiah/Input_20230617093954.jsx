import React, { useEffect, useState } from 'react';
import useAsync from "../../helpers/hooks/useAsync";
import { useNavigate } from "react-router-dom";
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
        if (selectedCurrency && exchangeRate) {

            const usdAmount = amount / 14964.35; // Ganti USD_TO_IDR_EXCHANGE_RATE dengan kurs USD ke IDR terkini

            let currency = 0;

            currency = usdAmount / exchangeRate;

            setResult(Number(currency.toFixed(8)));
        }
        // const currencySelect = selectedCurrency.split(":")[0];
        // setSelectedCurrency(currencySelect);
    }, [amount, selectedCurrency, exchangeRate]);

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center py-8">
            <div className="w-full mt-5 px-5 py-5 md:px-10 md:py-10 rounded-lg">
                <div className="w-full mb-10">
                    <h1 className="text-2xl font-bold text-center text-gray-700">Rupiah</h1>
                    <form className="mt-4 flex items-center justify-center gap-3">
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
                            onChange={(e) => {
                                const selectedOption = e.target.value.split(':');
                                const lastPrice = selectedOption[1];
                                setSelectedCurrency(e.target.value);
                                setExchangeRate(lastPrice);
                            }}
                        >
                            {isLoading ? (
                                <option>Loading...</option>
                            ) : (
                                <>
                                    <option value="">Select currency</option>
                                    {data
                                        ?.filter(
                                            (item) =>
                                                item.symbol === "BTC-USD" ||
                                                item.symbol === "ETH-USD" ||
                                                item.symbol === "DOT-USD"
                                        )
                                        .map((item, index) => {
                                            const symbol = item.symbol.split("-")[0];
                                            const lastPrice = item.last_trade_price;
                                            return (
                                                <option key={index} value={`${symbol}:${lastPrice}`}>
                                                    {symbol}
                                                </option>
                                            );
                                        })}
                                </>
                            )}
                        </select>

                    </form>
                    <div className="mt-4 flex items-center justify-center gap-3">
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            <p>
                                {amount} IDR is equal to {result} {selectedCurrency.split(":")[0]}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Input;
