import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button} from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { BsBank } from 'react-icons/bs';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { RiExchangeDollarFill, RiQuestionnaireLine } from 'react-icons/ri';



function Navbar() {
    return(
  
        <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="/" class="nav-link">
          <span class="link-text logo-text">Mugiwara</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"


              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li class="nav-item">
        <a href="projet" class="nav-link mL">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="alien-monster"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M160,320h64V224H160Zm192-96v96h64V224Z"
                
              ></path>
            </g>
          </svg>
          <span class="link-text">5 Crypto</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="steptuto" class="nav-link">
        <MdOutlineOndemandVideo class="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x fa-secondary" />
          <span class="link-text">Tuto</span>
        </a>
      </li>

      
      <li class="nav-item">
        <a href="FAQ" class="nav-link">
        <RiQuestionnaireLine class="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x fa-secondary"/>
          <span class="link-text"> FAQ</span>
        </a>
      </li> 
      
      
      <li class="nav-item">
        <a href="https://www.moonpay.com/buy" class="nav-link mL">
        <RiExchangeDollarFill class="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x fa-secondary"/>
          <span class="link-text">$Matic</span>
        </a>
      </li> 
      
      
      <li class="nav-item">
      <div class="nav-link" >
      <Menu  >
       
  <MenuButton className="mB" aria-label='Options'   as={Button} size="xs" icon={<HamburgerIcon class="svg-inline--fa fa-space-station-moon-alt  "  variant='outline'  />} />


  <span class="link-text">Investissement</span>
  <MenuList>
  <a href="https://www.moonpay.com/buy" ><MenuItem icon={ <RiExchangeDollarFill />} >Buy $Matic</MenuItem></a>
    <a href="https://www.moonpay.com/buy" ><MenuItem icon={<BsBank/>}> Invest In M_Index</MenuItem></a>
   <a href="FAQ"> <MenuItem icon={<RiQuestionnaireLine />}>FAQ</MenuItem></a>
  </MenuList>
</Menu>
</div>
      </li>
     
      <Box></Box>
    </ul>
  </nav>

    )
}
export default Navbar;

