import { Avatar,  Box, Button, Center, Container, Heading, Stack, } from "@chakra-ui/react";
import {FcNext} from "react-icons/fc"
import React from "react"
import NavMenu from "./NavBar";
import One from '../asset/One.png'
import Two from "../asset/Two.png"
import Three from "../asset/Three.png"
import styled from "styled-components";
const StepTuto = ()=> {
    return(
<DesktopRoot>
    
<Stack direction='row' >

<Box  p="auto"color='white'>  
   <Heading ml="76px"mt="55px" >Follow These  3 Steps :  </Heading>
   </Box>
</Stack>

   <Center mt="155px" backgroundColor="#091843" >
   <div class="row align-items-center">
    <div class="col ">
    <Center><Box mb="30px"><Avatar name="" src={One}></Avatar></Box></Center>

      <Box  backgroundColor="#E2E8F0" borderRadius="1rem"  boxShadow='dark-lg'> <Center backgroundColor="#E2E8F0" >
      <video controls boxSize='10%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s' type ="video/mp4" alt='Dan Abramov' />
    </Center></Box>
    <Center><Box mt="60px"><Button>Button</Button></Box></Center>

    </div>
    <div  class="col ">
    <Center><Box mb="30px"><Avatar name="" src={Two}></Avatar></Box></Center>
    <Box  backgroundColor="#E2E8F0" borderRadius="1rem"  boxShadow='dark-lg'> <Center backgroundColor="#E2E8F0" >
    <video controls boxSize='10%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s' type ="video/mp4" alt='Dan Abramov' />
    </Center></Box>
    <Center><Box mt="60px"><Button>Button</Button></Box></Center>
    </div>
    <div class="col ">
    <Center><Box mb="30px"><Avatar name="" src={Three}></Avatar></Box></Center>
    <Box  backgroundColor="#E2E8F0" borderRadius="1rem"  boxShadow='dark-lg'> <Center backgroundColor="#E2E8F0" >
  <video controls boxSize='250%'  src='https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s' type ="video/mp4" alt='Dan Abramov' />
</Center> </Box>
<Center><Box mt="60px"><Button>Button</Button></Box></Center>
    </div>
  </div>

</Center>

<Container mt="350px" >
    <div class=" row justify-content-evenly">
    <div class="col-4">
    </div>
    <div class="col-4">
   <Center backgroundColor="#091843" >
    <Heading mb="25px" mt="30px" bg="#091843" as="h4"></Heading>
    </Center>
    </div>
    </div>
  </Container>



  <div className="fixed-bottom">
        <NavMenu />
        </div>

 

</DesktopRoot>
    )
}
const DesktopRoot = styled.div`
  background-color: #091843;
  margin: 0;
  padding: 0;
`;
export default StepTuto;