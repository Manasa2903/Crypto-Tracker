import './index.css'

const CryptocurrencyItem = ({cryptoData}) => {
  const {currencyName, currencyLogo, usdValue, euroValue} = cryptoData

  return (
    <tr>
      <td className="logo-container">
        <img src={currencyLogo} alt="logo" className="logo" />
        <p>{currencyName}</p>
      </td>
      <td className="currency-value">{usdValue}</td>
      <td className="currency-value">{euroValue}</td>
    </tr>
  )
}

export default CryptocurrencyItem
