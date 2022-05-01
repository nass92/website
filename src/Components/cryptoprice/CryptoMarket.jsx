import { Container } from '@chakra-ui/react'
import React from 'react'
import '../../Css/CoinApi.css'

const Coin = ({  image, symbol, price,  priceChange, marketcap }) => {
  return (<>
    <Container ml="-55px" maxW="3xs">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />

          <p className="coin-symbol">{symbol}</p>
        
          <p className="coin-price">${price}</p>

          {priceChange < 0 ? (
            <p className=" coin-percent red">{priceChange.toFixed(2)}%</p>

          ) : (<p className=" coin-percent green">{priceChange.toFixed(2)}%</p>)}
          <p className="coin-marketcap"> MKT CAP: ${marketcap.toLocaleString()}</p>
        </div>
      </div>

      </Container>
</>)
}

export default Coin
