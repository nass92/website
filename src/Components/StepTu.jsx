import 'react-vertical-timeline-component/style.min.css';
import styled from "styled-components";
import { BsCurrencyEuro, BsGoogle, BsWallet} from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { GrValidate} from "react-icons/gr"
import { NavLink } from "react-router-dom";
import { Box, Center, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { FcNext } from "react-icons/fc";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks';
import Logo from "../asset/Logo.png"
import Moonpay from './Steptu/Matic';
import Settoken from './Steptu/Settoken';
import Metamask from './Steptu/Metamask';
function StepTu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <DesktopRoot>
    
  
<VerticalTimeline>
<Grid templateColumns='repeat(3)'  gap={4}>
  <GridItem colSpan={2} >
  <Box maxW='md' p='4' color='white' ml='30px' mt="15px">
  <Center>
  <img src={Logo}   />
  </Center>
  <h2 className="phrase">3 Tuto pour être pret à prendre le large</h2>
  </Box>
  </GridItem>
  <GridItem colStart={[1,3,4]} colEnd={[1,3,4]}   >
  <Box p='4'ml='30px' mt="15px"> 
  <Center>
  <Box maxW='md' p='4'  > 

  <h1 className="titre">Mugiwara_Index</h1>
  <h3 className="sous-titre">"Plutôt que d'essayer de chercher une aiguille dans une botte de foin, achetez la botte de foin!"</h3><span className="sp" >John C.Boglet</span>

  </Box>
  </Center>
   </Box>
  </GridItem>
</Grid>


<VerticalTimelineElement
    
    date={<Heading>Navigateur</Heading>}
    contentStyle={{ background: '#091843', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #091843' }}
    iconStyle={{ background: '#091843', color: '#fff' }}
    icon={<BsGoogle/>}
  >
      <Container color="white" >
  <Text>
  Assurez-vous d'utiliser Google Chrome, Firefox ou Brave comme navigateur, afin de pouvoir utliser pleinement les fonctionnabilités web3.
  </Text>
</Container >
  </VerticalTimelineElement>

    <Metamask />
    
    <Moonpay/>
    <Settoken/>
  
  <Box color="white" className="go">
      <a href="projet">
   
    <Heading mb="25px" mt="30px"  size="4xl" ><FcNext  /> </Heading>
    
    </a>
    </Box>
    <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<GrValidate/>}
  />
</VerticalTimeline>
</DesktopRoot>
  );
}
const DesktopRoot = styled.div`
  background-color: #091843;
  margin: 0;
  padding: 0;
`;

const EarningsIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default StepTu;
