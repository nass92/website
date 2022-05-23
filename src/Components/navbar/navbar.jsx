import { BsBank } from 'react-icons/bs';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { RiExchangeDollarFill, RiQuestionnaireLine } from 'react-icons/ri';
import{TiThMenuOutline} from 'react-icons/ti'
import{BiBookReader} from 'react-icons/bi'
import { Box, 
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'



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
        <a href="steptuto" class="nav-link">
      
          <span class="link-text">Tutoriel</span>
        </a>
      </li>


      <li class="nav-item">
        <a href="projet" class="nav-link ">

          <span class="link-text">Cryptos</span>
        </a>
      </li>

      
      <li class="nav-item" > 
        <a href="lexique" class="nav-link ">
       
          <span class="link-text"> Lexique</span>
        </a>
      </li> 

      
      <li class="nav-item">
      
      <Menu >
       
  <MenuButton className="mL3" aria-label='Options'   as={Button} size="xs" bg="dark" />
  <span className="link-text  ">Investissement</span>
  <MenuList>
  <a href="https://www.moonpay.com/buy" ><MenuItem icon={ <RiExchangeDollarFill />} >Buy $Matic</MenuItem></a>
    <a href="https://www.moonpay.com/buy" ><MenuItem icon={<BsBank/>}> Invest In M_Index</MenuItem></a>
   <a href="FAQ"> <MenuItem icon={<RiQuestionnaireLine />}>FAQ</MenuItem></a>
  </MenuList>
</Menu>

      </li>
     
      <Box></Box>
    </ul>
  </nav>

    )
}
export default Navbar;


