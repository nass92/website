import {DesktopRoot} from "../../Css/style"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Box, Container } from "@chakra-ui/react";
import { GrValidate} from "react-icons/gr";
import Weth from "../5cryptos/wEth";
import Mana from "../5cryptos/Mana";
import Sandbox from "../5cryptos/Sandbox";
import Aave from "../5cryptos/Aave";
import Wbtc from "../5cryptos/wBtc";
import Navbar from "../navbar/navbar";
import Fusée from '../navbar/fusée';

function Projet() {
  return (<>
    <Container maxW='xs' ml="-15px"  className="fixed-top ">
        <Navbar/>
        </Container>
    <DesktopRoot>

    
<VerticalTimeline lineColor="black"> 

<Box maxW='md'ml="29px" > 
  <h2 className="phrase"> 5 crypto qui apportent  solutions et innovation</h2>
  
 

  </Box>
  <Weth/>


  <Mana/>


<Sandbox/>

  <Aave/>



  <Wbtc/>

  <Box color="white" className="go">
    <a href="Lexique" class="nav-link">
        <Fusée/>
        
        </a>
    </Box>

  <VerticalTimelineElement
  
  iconStyle={{ background: '#ffffff', color: '#fff' }}
    icon={<GrValidate/>}
  />
  
</VerticalTimeline>

</DesktopRoot>
</>
  );
  
}


export default Projet;

