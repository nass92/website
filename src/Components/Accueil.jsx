import { Badge, Box, Center, Container, Heading, Stack, } from "@chakra-ui/react";
import { BsInstagram, BsSnapchat,  BsTelegram, BsDiscord} from "react-icons/bs";
import {FcNext} from "react-icons/fc"
import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Acceuil = ()=> {
    return(
<DesktopRoot>
<Stack direction='row' >

<Box  p="auto"color='white'>  
   <Heading ml="76px"mt="55px" >Welcome To Muguiwara_Index</Heading>
   </Box>
</Stack>
<Container mt="275px" backgroundColor="#E2E8F0" borderRadius="1rem" height="20.4rem" width="600px" boxShadow='dark-lg'  rounded='md' >
   <Center backgroundColor="#E2E8F0" >
    <Heading mt="80px" bg="#E2E8F0" as="h4">" Le marché boursier est un moyen de transférer de l’argent de l’impatient au patient " </Heading>
    </Center>
    <Badge mt="30px" ml="400px">Warren Buffet</Badge>
</Container>
<Container mt="440px" >
    <div class=" row justify-content-evenly">
    <div class="col-4">
    <Box ml="25px" mt="-35px" backgroundColor="#091843" borderRadius="1rem"  boxShadow='dark-lg'  class="col align-self-end"  >
   <Center backgroundColor="#091843" >
    <Heading color="#ffffff" as="h4">  
    <div class="col-4">
    <div class="row"><a href="https://www.moonpay.com/buy"> <BsDiscord/> </a> </div>
    <div class="row"> <a href="https://www.moonpay.com/buy"><BsInstagram/> </a></div>
    <div class="row"> <a href="https://www.moonpay.com/buy">< BsSnapchat/> </a> </div>
    <div class="row"><a href="https://www.moonpay.com/buy"> <BsTelegram/> </a>  </div>
  </div>
 </Heading>
    </Center>
    
    </Box>
    </div>
    <div class="col-4">
        <NavLink to="/steptuto">
    <Box  backgroundColor="#091843" borderRadius="1rem"  boxShadow='dark-lg'  class="col align-self-end"  >
   <Center backgroundColor="#091843" >
    <Heading mb="25px" mt="30px" bg="#091843" as="h4"><FcNext/> </Heading>
    </Center>
    
</Box>
</NavLink>
    </div>
    </div>
  </Container>




 

</DesktopRoot>
    )
}
const DesktopRoot = styled.div`
  background-color: #091843;
  margin: 0;
  padding: 0;
`;
export default Acceuil;