import ExchangeRate from "./ExchangeRate";
import { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
    const currencies = ["BTC", "ETH", "USD", "LTC", "ADA"];
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(0)
    const [result, setResult]=useState(0)

    console.log(chosenPrimaryCurrency);
    console.log(chosenSecondaryCurrency);
    console.log(amount);

    const convert = () => {
        const options = {
            method: "GET",
            url: "https://alpha-vantage.p.rapidapi.com/query",
            params: {
                from_currency: chosenPrimaryCurrency,
                function: "CURRENCY_EXCHANGE_RATE",
                to_currency: chosenSecondaryCurrency,
            },
            headers: {
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
                "x-rapidapi-key": "595af1f6d7mshf66a8305552d06cp1d7db8jsn1d1ea069a6dc",
            },
        };

        axios.request(options).then((response) => {
                console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
                setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
                setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']*amount)
            }).catch((error) => {
                console.error(error);
            })
    }
    // console.log(exchangeRate)
    return (
        <div className="currency-converter">
            <h2>CurrencyConverter</h2>

            <div className="input-box">
                <table>
                    <body>
                        <tr>
                            <td>Primary Currency: </td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount-1"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </td>
                            <td>
                                <select
                                    value={chosenPrimaryCurrency}
                                    name="currency-option-1"
                                    className="currency-options"
                                    onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                                >
                                    {currencies.map((currency, _indx) => (
                                        <option key={_indx}>{currency}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Secondary Currency: </td>
                            <td>
                                <input type="number" name="currency-amount-2" value={result} disabled={true} />
                            </td>
                            <td>
                                <select
                                    value={chosenSecondaryCurrency}
                                    name="currency-option-2"
                                    className="currency-options"
                                    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                                >
                                    {currencies.map((currency, _indx) => (
                                        <option key={_indx}>{currency}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <button id="convert-button" onClick={convert}>
                            Convert
                        </button>
                    </body>
                </table>
            </div>
            <ExchangeRate
                exchangeRate={exchangeRate} 
                chosenPrimaryCurrency={chosenPrimaryCurrency} 
                chosenSecondaryCurrency={chosenSecondaryCurrency}
            />
        </div>
    );
};
export default CurrencyConverter;
