const ExchangeRate = ({exchangeData}) =>{
    return(
        <div className="exchange-rate">
            <h3>Exchange Rate</h3>
            <h2>{exchangeData.exchangeRate}</h2>
            <p>{exchangeData.primaryCurrency} to {exchangeData.secondaryCurrency}</p> 
        </div>
    )
}
export default ExchangeRate;