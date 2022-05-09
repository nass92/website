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

  <Box maxW='md'ml="29px" > 
  <h2 className="phrase">3 Tuto pour être pret à prendre le large</h2>
  
 

  </Box>

 


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
