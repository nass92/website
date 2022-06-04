import React from 'react'
import { BsBank } from 'react-icons/bs';
import { RiExchangeDollarFill, RiQuestionnaireLine } from 'react-icons/ri';
import { Box, 
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link
} from '@chakra-ui/react'
import NavBurger, { LexDrawer } from './NavBurger';


function Navbar() {


    return(
      <>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="/mugiwara" class="nav-link">
         <span class="link-text logo-text">Mugiwara</span>
        <svg id='logo' version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="530.000000pt" height="474.000000pt" viewBox="0 0 530.000000 474.000000"
          preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,474.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M200 2350 l0 -2280 555 0 555 0 0 1697 c0 933 2 1694 4 1692 3 -3
          174 -756 381 -1674 207 -919 378 -1680 382 -1692 l5 -23 592 0 591 0 392 1693
          392 1692 0 -1692 1 -1693 570 0 570 0 0 2280 0 2280 -912 -2 -912 -3 -342
          -1594 c-189 -876 -344 -1595 -346 -1596 -2 -2 -142 716 -313 1596 l-309 1599
          -928 0 -928 0 0 -2280z"/>
        </g>
        </svg>
        </a>
      </li>
      <li class="nav-item">
        <a href="/" class="nav-link">
        <span class="link-text">ChatBot</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="projet" class="nav-link ">
        <span class="link-text">Cryptos</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="steptuto" class="nav-link">
        <span class="link-text">Tutoriel</span>
        </a>
      </li>
    
   
      <li class="nav-item">
      <Menu >
        <MenuButton className="link-text" aria-label='Options' variant='link'   as={Button} size="2xs"ml= {['0px','00px','0px','70px','50px','70px']}  >Investissement</MenuButton>
        <MenuList>
        <a href="/mugiwara" ><MenuItem icon={ <RiExchangeDollarFill />} >Mugiwara</MenuItem></a>
        <a href="/tutoinvest" ><MenuItem icon={ <RiExchangeDollarFill />} >Tutoriel Pour Investir</MenuItem></a>
        <Link  href="https://www.moonpay.com/buy" isExternal ><MenuItem icon={ <RiExchangeDollarFill />} >Buy $Matic</MenuItem></Link>
        <Link href="https://www.moonpay.com/buy" isExternal><MenuItem icon={<BsBank/>}> Invest In M_Index</MenuItem></Link>
        <a href="FAQ"> <MenuItem icon={<RiQuestionnaireLine />}>FAQ</MenuItem></a>
        </MenuList>
      </Menu>
      </li>
  
      <Box></Box>
    </ul>

 <Box id='burger-menu'>
   <NavBurger/>
      </Box>

    
  </nav>



</>
    )
}
export default Navbar;


