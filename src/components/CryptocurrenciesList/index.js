import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = () => {
  const [cryptoData, setCryptoData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://apis.ccbp.in/crypto-currency-converter')
      .then(response => response.json())
      .then(data => {
        const updatedData = data.map(eachItem => ({
          currencyName: eachItem.currency_name,
          id: eachItem.id,
          usdValue: eachItem.usd_value,
          euroValue: eachItem.euro_value,
          currencyLogo: eachItem.currency_logo,
        }))
        setCryptoData(updatedData)
        setIsLoading(false)
      })
  })

  return (
    <div className="currency-tracker">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="image"
      />

      {isLoading ? (
        <div testid="loader">
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        </div>
      ) : (
        <div className="table-container">
          <table>
            <tr className="table-heading">
              <th>Coin Type</th>
              <th>USD</th>
              <th>EURO</th>
            </tr>
            {cryptoData.map(eachCrypto => (
              <CryptocurrencyItem key={eachCrypto.id} cryptoData={eachCrypto} />
            ))}
          </table>
        </div>
      )}
    </div>
  )
}

export default CryptocurrenciesList
