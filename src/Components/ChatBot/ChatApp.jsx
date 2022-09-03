import './ChatApp.css';
import { useState} from 'react';
import {  Box,  Button,  Center,  Flex, Grid, GridItem, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, OrderedList, Spacer, Text, useDisclosure } from '@chakra-ui/react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import logo from '../../asset/LOGO-NASS-NOIR.png'
import { Link } from 'react-router-dom';
import ChatBot from './ChatBot';
import { DesktopRoot2 } from '../../Css/style';
import { MdCheckCircle } from 'react-icons/md';

function ChatApp() {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 ; //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, ] = useState(`${days[day]}, ${day} ${months[month]} ${year}`); //using the useState hook to get the data from the local date and set it to the dateTime variable
  // console.log(dateTime);

  const checkStatus = (e) => {
    let isActive = true;
    if(dateTime === 'Thursday, 20 April 2022'){ //if the dateTime is Thursday, 20 April 2022, the bot will be inactive
      isActive = false;
    }
    const status = document.querySelector('.status'); // selecting the status class
    if(isActive === true){ //if the bot is active
      status.innerHTML = 'Active';
      status.style.color = 'green';
    }else{
      status.innerHTML = 'Inactive';
      status.style.color = 'red';
    }
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
     
    <div className="App" onLoad={checkStatus}>
         <DesktopRoot2>
        <Flex>
  <Box p='4'ml= {["0px", "0px", "0px", "0px", "160px", "160px"]}  mt= {["0px", "0px", "0px", "0px", "40px", "40px"]}>
  <img src={logo} alt='logo'/>
  </Box>
  <Spacer />
  <Box mt= {["45px", "45px", "45px", "60px", "110px", "110px"]} mr= {["0px", "0px", "0px", "0px", "130px", "130px"]}>
<Link to='/projet'> <Text id="launch" >Launch App </Text></Link>
  </Box>
</Flex>

<Grid templateColumns='repeat(3)' gap={3}  >

<GridItem colSpan={[3,3, 3, 3, 2, 2]}  mt={["10px", "15px", "25px", "25px", "30px", "30px"]} ml={["0px","25px","0px"]}  >
<Center>
<Box p={5} s  maxW="auto" ml={["0px", "50px", "100px"]} >

<Box  borderBottomWidth='1px' >
   <Center> <Text fontSize={["45px","45px","55px","55px","55px","70px"]} color='#B0A7C2' mt="10px">Pour Votre Future</Text></Center>
   </Box>
    <Box  mt="30px" >
        <Text fontSize={["22px","22px","25px","25px","27px","30px"]} color="gray.500"> 
            Formez vous simplement et gratuitement au monde de la crypto-monnaie
        </Text>
    </Box>
    <br/>
    <Box>
        <Text mt="10px" fontSize={["22px","22px","25px","25px","27px","30px"]}  color="gray.500"> 
            Ici, vous trouverez des informations ainsi que des explications, sur : 
        <List spacing={3}>
            <ListItem>
                <ListIcon as={MdCheckCircle} fontSize={["22px","22px","25px","25px","27px","28px"]}  color='green.500' />
                    Les bases de la crypto-monnaie (qu'est ce qu'une crypto, une blockchain...)
            </ListItem>
            <ListItem>
                 <ListIcon as={MdCheckCircle}fontSize={["22px","22px","25px","25px","27px","30px"]}  color='green.500' />
                    Des informations, à la fois détaillé et simplifié, des plus grosses cryptos du moment
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} fontSize={["22px","22px","25px","25px","25px","30px"]}  color='green.500' />
                    Des tutoriels, afin de pouvoir sauter le pas 
            </ListItem>
        </List>
        </Text>
    </Box>
    <br/>
    <Box>
    <Text mt="10px" fontSize={["22px","22px","25px","25px","25px","30px"]}   color="gray.500">
    🤖 Commencer par dire "Hi" à notre robot. 
    </Text>
    </Box>
    
  </Box>

   

  </Center>
  
  

</GridItem>

<GridItem colStart={ [1, 1, 1, 1,3, 3]  } colEnd={[3, 3, 3, 3, 3, 3]} ml= {["25px", "50px", "100px", "150px", "0px", "0px"]}mr= {["0px", "0px", "0px", "0px", "100px", "100px"]} >



<ChatBot/>

</GridItem>

<GridItem  colSpan={[3]}    >
 
<button onClick={onOpen}>
  <Player
  
  autoplay
  loop
  src="https://assets5.lottiefiles.com/packages/lf20_96bovdur.json"
  style={{ maxHeight: '700px', maxWidth: '700px'}}
>
  <Controls visible={false}  />
 </Player>
 </button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>  Fonctionnement du bot: </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <OrderedList spacing={3} fontSize="18px">
            <ListItem>Envoyer 'hi' ou 'slt' pour le lancer. </ListItem>
            <ListItem> Attendre la fin des reponses du bot avant de repondre.</ListItem>
            <ListItem> Repondre uniquement par les propositions du bot. </ListItem>
           </OrderedList>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
       </GridItem>
</Grid>
</DesktopRoot2>
    </div>
   
  );
}

export default ChatApp;
