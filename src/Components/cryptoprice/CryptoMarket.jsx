import { Stat, StatGroup,Logo, StatLabel, StatNumber, StatHelpText, StatArrow, Icon, Image, SimpleGrid, Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import '../../Css/CoinApi.css'

const Coin = ({  image, symbol, price,  priceChange, marketcap }) => {

  return (<>


      
  <Stat>
  <SimpleGrid columns={3} spacing={1} mt='15px'>
  <Box  height='auto'mt= {['10px','10px','5px','5px','0px','0px']} >
    <StatLabel><Image maxW={['30px','30px','45px','45px','50px','50px']} src={image}/> </StatLabel>
    </Box>
    <Box  height='auto' mt= {['13px','15px','16px','16px','13px','13px']}  >
    <StatNumber fontSize={['13px','13px','15px','18px','20px','20px']}  >{price} $</StatNumber>
    </Box>
    <Box >
    <StatHelpText>
    {priceChange < 0 ? (
           <p> <StatArrow type='decrease' /> {priceChange.toFixed(2)}%</p>

          ) : ( <p> <StatArrow type='increase' />{priceChange.toFixed(2)}%</p>)}
   
    </StatHelpText>
    </Box>
    </SimpleGrid>
  </Stat>


</>)
}

export default Coin

/*    <div className='coin-container'>
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

      </div>*/