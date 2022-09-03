import React from 'react'
import {
  Button,
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
  Accordion,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
  } from '@chakra-ui/react'

import { LexMap } from '../Lexique/Lexique';
import { RiExchangeDollarFill, RiQuestionnaireLine } from 'react-icons/ri';
import { BsBank } from 'react-icons/bs';


const NavBurger = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
return (
    <>
     <Button id="launch" bg='transparent' color='white' maxW='md' ml={['90px','150px','300px','350px',null,null]}   ref={btnRef} onClick={onOpen}>
      Menu
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
          <DrawerHeader>Mug◊wara</DrawerHeader>
          <DrawerBody>
          <Center>
          <SimpleGrid column={1} >
            <Link href='/' id='logo1'>ChatBot</Link>
            <Link href='/projet' id='logo1'>Cryptos</Link>
            <Link href='/steptuto' id='logo1'>Tutoriel</Link>
            <Menu >
        <MenuButton color='#ffffff' className='lo' aria-label='Options' variant='link'   as={Button} size="2xs"ml= {['0px','00px','0px','70px','50px','70px']}  >Investissement</MenuButton>
        <MenuList color='#000000'>
        <a href="/mugiwara" ><MenuItem icon={ <RiExchangeDollarFill />} >Mugiwara</MenuItem></a>
        <a href="/tutoinvest" ><MenuItem icon={ <RiExchangeDollarFill />} >Tutoriel Pour Investir</MenuItem></a>
        <Link  href="https://www.moonpay.com/buy" isExternal ><MenuItem icon={ <RiExchangeDollarFill />} >Buy $Matic</MenuItem></Link>
        <Link href="https://www.moonpay.com/buy" isExternal><MenuItem icon={<BsBank/>}> Invest In M_Index</MenuItem></Link>
        <a href="FAQ"> <MenuItem icon={<RiQuestionnaireLine />}>FAQ</MenuItem></a>
        </MenuList>
      </Menu>
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
   


      <LexDrawer/>
    </>
)
} 
export default NavBurger;

export const LexDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
  <>
  <Button id="launch"  bg='transparent'  maxW='md' ml={['80px','0px','100px','100px',null,null]}  mb={['80px','0px','100px','100px',null,null]}  ref={btnRef} onClick={onOpen}>
       Lexique
        </Button>
  
       <Drawer
        isOpen={isOpen}
        placement='rigth'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={['xs', 'sm', 'md', 'lg', 'xl', 'xxl']}
       >
          <DrawerOverlay />
          <DrawerContent background="#030003"  color="#FFFFFF">
            <DrawerCloseButton />
            <DrawerBody>
          
            <Accordion allowToggle>  
     <LexMap/>
    
      </Accordion >
        
            </DrawerBody>
  
            <DrawerFooter id='footer-nav'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
  </>
  )
  }