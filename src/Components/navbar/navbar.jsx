import React from 'react'
import { BsBank } from 'react-icons/bs';
import { RiExchangeDollarFill, RiQuestionnaireLine } from 'react-icons/ri';
import { TiThMenuOutline } from "react-icons/ti";
import { Box, 
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
  useDisclosure,
  SimpleGrid,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';



function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
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
        <MenuButton className="link-text" aria-label='Options' variant='link'   as={Button} size="2xs"ml= {['0px','00px','0px','70px','50px','70px']}  >Investissement</MenuButton>
        <MenuList>
        <a href="https://www.moonpay.com/buy" ><MenuItem icon={ <RiExchangeDollarFill />} >Buy $Matic</MenuItem></a>
        <a href="https://www.moonpay.com/buy" ><MenuItem icon={<BsBank/>}> Invest In M_Index</MenuItem></a>
        <a href="FAQ"> <MenuItem icon={<RiQuestionnaireLine />}>FAQ</MenuItem></a>
        </MenuList>
      </Menu>
      </li>
      <Box></Box>
    </ul>

 
      <Button id='burger-menu' bg='transparent' color='white' maxW='sm' ml={['170px','250px','400px','500px',null,null]}   ref={btnRef} onClick={onOpen}>
      <TiThMenuOutline/>
      </Button>

     <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={btnRef}
     >
        <DrawerOverlay />
        <DrawerContent background="#030003"  color="#FFFFFF">
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
          <Center>
          <SimpleGrid column={1} >
            <Link to='/' id='logo1'>Home</Link>
            <Link to='/exposition' id='logo1'>Exposition</Link>
            <Link to='/marketplace' id='logo1'>MarketPlace</Link>
            <Link to='/dashboard' id='logo1'>Dashboard</Link>
          </SimpleGrid>
          </Center>
          </DrawerBody>

          <DrawerFooter id='footer-nav'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


    
  </nav>



</>
    )
}
export default Navbar;


