import 'react-vertical-timeline-component/style.min.css';
import {DesktopRoot} from "../../Css/style"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { BsGoogle} from "react-icons/bs";
import { GrValidate} from "react-icons/gr"
import { Box, Center,  Container,  Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Logo from "../../asset/Logo.png"
import Moonpay from '../Steptu/Matic';
import Settoken from '../Steptu/Settoken';
import Metamask from '../Steptu/Metamask';
import Fusée from '../navbar/fusée';
import Navbar from '../navbar/navbar';
function StepTu() {
  return (<>
    <Container maxW='3xs' ml="-15px" mr='50px'  className="fixed-top ">
    <Navbar/>
    </Container>
    <DesktopRoot>
    
  
<VerticalTimeline>
<Grid templateColumns='repeat(3)'  gap={4}>
  <GridItem colSpan={2} >
  <Box maxW='md' p='4' color='white' ml='30px' mt="15px">
  <Center>
  <img src={Logo}  alt="logo chapeau de paille" />
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
    contentStyle={{ background: 'rgb(240 239 206)' , color: '#556655' }}
    contentArrowStyle={{ borderRight: '10px solid rgb(240 239 206) '}}
    
    iconStyle={{ background: '#556655', color: '#fff' }}
    icon={<BsGoogle/>}
  >
  <Text>
  Assurez-vous d'utiliser Google Chrome, Firefox ou Brave comme navigateur, afin de pouvoir utliser pleinement les fonctionnabilités web3.
  </Text>

  </VerticalTimelineElement>

    <Metamask />
    
    <Moonpay/>
    <Settoken/>
  
  
      
   
      <Box color="white" className="go">
  <a href="projet" class="nav-link">
        <Fusée/>
        
        </a>
    </Box>
    
  
    <VerticalTimelineElement
   
   iconStyle={{ background: '#556655', color: '#fff' }}
    icon={<GrValidate/>}
  />
</VerticalTimeline>
</DesktopRoot>
</>
  );
}


export default StepTu;
