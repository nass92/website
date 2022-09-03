import {DesktopRoot} from "../../Css/style"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Box, Center, Container, Flex, Image, SimpleGrid, Spacer } from "@chakra-ui/react";
import { GrValidate} from "react-icons/gr";
import Weth from "../5cryptos/wEth";
import Mana from "../5cryptos/Mana";
import Sandbox from "../5cryptos/Sandbox";
import Aave from "../5cryptos/Aave";
import Wbtc from "../5cryptos/wBtc";
import { LexDrawer } from "../navbar/NavBurger";
import Navbar from '../navbar/navbar'
import Fusée from '../navbar/fusée';
import SVG from '../../asset/lg.svg'
function Projet() {
  return (<>
  <Container maxW='xs' ml="-15px"  className="fixed-top ">
      <Navbar/>

  </Container>

  <DesktopRoot>
  <VerticalTimeline lineColor="black"> 
  <Flex>

  <SimpleGrid column={2}>
    <Image maxH="300px"  ml= {['18px','20px','80px','40px','0px','0px']}  src={SVG} alt='Mugiwara'/>
      <Box maxW='md' mt='20px' ml= {['50px','80px','100px','100px','100px','0px']} mb= {['20px','25px','35px','35px','0px','0px']} > 
        <Center>
        <h2 className="titre">  Il existe plusieur secteur dans le monde de la crypto.Voici quelques exemples de crypto-monnaie appartenant à ces différents secteur.</h2>
        </Center>
      </Box>
    </SimpleGrid>

  <Spacer />
  <Box mt= {["0px", "0px", "45px", "130px", "130px", "130px"]} mr= {["0px", "0px", "0px", "0px", "0px", "0px"]} className='lexbutton'>
 <LexDrawer className='fixed-top'/> 
  </Box>
</Flex>
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

