import './ChatApp.css';
import { useState} from 'react';
import {  Box,  Center,  Flex, Grid, GridItem, Heading, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import logo from '../../asset/LOGO-NASS-NOIR.png'
import { Link } from 'react-router-dom';
import ChatBot from './ChatBot';
import { DesktopRoot2 } from '../../Css/style';
import { MdCheckCircle } from 'react-icons/md';

function ChatApp() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [time, setTime] = useState(`${hours}:${minutes}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(`${days[day]}, ${day} ${months[month]} ${year}`); //using the useState hook to get the data from the local date and set it to the dateTime variable
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
  
  return (
     
    <div className="App" onLoad={checkStatus}>
         <DesktopRoot2>
        <Flex>
  <Box p='4'>
  <img src={logo} alt='logo'/>
  </Box>
  <Spacer />
  <Box mt= {["45px", "45px", "45px", "60px", "60px", "60px"]}>
<Link to='/mugiwara'> <Text id="launch" >Launch App </Text></Link>
  </Box>
</Flex>

<Grid templateColumns='repeat(3)' gap={3}  >

<GridItem colSpan={[3,3, 3, 3, 2, 2]}  mt={["10px","30px","75px"]} ml={["0px","25px","0px"]}  >
<Center>
<Box p={5} s  maxW="auto" ml={["0px", "50px", "100px"]} >

<Box  borderBottomWidth='1px' >
   <Center> <Heading color='#B0A7C2' mt="10px">Pour Votre Future</Heading></Center>
   </Box>
    <Box  mt="30px" >
        <Text fontSize="18px" color="gray.500"> 
            Formez vous simplement et gratuitement au monde de la crypto-monnaie
        </Text>
    </Box>
    <Box>
        <Text mt="10px" fontSize="20px" color="gray.500"> 
            ici, vous trouverez des information ainsi que des explications, sur : 
        <List spacing={3}>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                    Les bases de la crypto-monnaie (qu'est ce qu'une crypto, une blockchain...)
            </ListItem>
            <ListItem>
                 <ListIcon as={MdCheckCircle} color='green.500' />
                    Des informations, à la fois détaillé et simplifié, des plus grosses cryptos du moment
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                    Des tutoriels, afin de pouvoir sauter le pas 
            </ListItem>
        </List>
        </Text>
    </Box>
    <Box>
    <Text mt="10px" fontSize="20px" color="gray.500">
        Dite "HI" a notre robot, afin qu'il vous guide au mieux
    </Text>
    </Box>
    
  </Box>

   

  </Center>
  
  

</GridItem>

<GridItem colStart={ [1, 1, 1, 1,3, 3]  } colEnd={[3, 3, 3, 3, 3, 3]} ml= {["25px", "50px", "100px", "150px", "0px", "0px"]}mr= {["0px", "0px", "0px", "0px", "100px", "100px"]} >



<ChatBot/>

</GridItem>

<GridItem  colSpan={[2,3]}    >
 

<Player
  autoplay
  loop
  src="https://assets5.lottiefiles.com/packages/lf20_96bovdur.json"
  style={{ maxHeight: '700px', maxWidth: '700px'}}
>
  <Controls visible={false}  />
</Player>

       </GridItem>

</Grid>
</DesktopRoot2>
    </div>
   
  );
}

export default ChatApp;
