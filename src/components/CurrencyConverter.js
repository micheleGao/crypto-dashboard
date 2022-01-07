import ExchangeRate from "./ExchangeRate";
import { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);
//   const [ChosenPrimaryExchanged, setChosenPrimaryCurrencyExchanged] =
//     useState("BTC");
//   const [ChosenSecondaryExchanged, setChosenSecondaryCurrencyExchanged] =
//     useState("BTC");

//   console.log(chosenPrimaryCurrency);
//   console.log(chosenSecondaryCurrency);
//   console.log(amount);

  const [exchangeData, setExchangeData] = useState({
    primaryCurrency: "BTC",
    secondaryCurrency: "BTC",
    exchangedRate: 0,
  });

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
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        // setExchangeRate(
        //   response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        // );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount
        );
        // setChosenPrimaryCurrencyExchanged(chosenPrimaryCurrency)
        // setChosenSecondaryCurrencyExchanged(chosenSecondaryCurrency)
        setExchangeData({
          primaryCurrency: chosenPrimaryCurrency,
          secondaryCurrency: chosenSecondaryCurrency,
          exchangeRate: response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // console.log(exchangeRate)
  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>

      <div className="input-box">
        <table>
          <tbody>
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
                <input
                  type="number"
                  name="currency-amount-2"
                  value={result}
                  disabled={true}
                />
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
          </tbody>
        </table>
        <button id="convert-button" onClick={convert}>
          Convert
        </button>
      </div>
      <ExchangeRate
        exchangeRate={exchangeRate}
        exchangeData={exchangeData}
        // chosenPrimaryCurrency={ChosenPrimaryExchanged}
        // chosenSecondaryCurrency={ChosenSecondaryExchanged}
      />
    </div>
  );
};
export default CurrencyConverter;
