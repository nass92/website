import {DesktopRoot} from "../../Css/style"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Box, Center, Container, SimpleGrid } from "@chakra-ui/react";
import { GrValidate} from "react-icons/gr";
import Weth from "../5cryptos/wEth";
import Mana from "../5cryptos/Mana";
import Sandbox from "../5cryptos/Sandbox";
import Aave from "../5cryptos/Aave";
import Wbtc from "../5cryptos/wBtc";
import Navbar from "../navbar/navbar";
import Fusée from '../navbar/fusée';
import SVG from '../../asset/lg.svg'
function Projet() {
  return (<>
  <Container maxW='xs' ml="-15px"  className="fixed-top ">
      <Navbar/>
  </Container>
  <DesktopRoot>
  <VerticalTimeline lineColor="black"> 

    <SimpleGrid column={2}>
      <Box maxW='md'color='white' mt="18px">
        <Center>
        <img className="titre" src={SVG} alt='Mugiwara'/>
        </Center>
      </Box>
      <Box maxW='sm' mt='20px' ml= {['50px','80px','100px','100px','100px','0px']} mb= {['20px','25px','35px','35px','0px','0px']} > 
        <Center>
        <h2 className="titre">  5 crypto qui apportent  solutions et innovation</h2>
        </Center>
      </Box>
    </SimpleGrid>

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

