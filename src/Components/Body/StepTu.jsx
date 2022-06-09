import 'react-vertical-timeline-component/style.min.css';
import {DesktopRoot} from "../../Css/style"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { BsGoogle} from "react-icons/bs";
import { GrValidate} from "react-icons/gr"
import { Box, Center,  Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Metamask from '../Steptu/Metamask';
import Fusée from '../navbar/fusée';
import Navbar from '../navbar/navbar';
import SVG from '../../asset/lg.svg'
import EthMainnet from '../Steptu/EthMainet';
import Polygon from '../Steptu/Polygon';
function StepTu() {
  return (<>
  <Container maxW='3xs' ml="-15px" mr='50px'  className="fixed-top ">
    <Navbar/>
  </Container>
  <DesktopRoot>
  <VerticalTimeline lineColor="black">
  <SimpleGrid column={2}>
   
   <Image maxH="300px"  ml= {['14px','20px','80px','40px','0px','0px']}  src={SVG} alt='Mugiwara'/>
  

 <Box maxW='sm' mt='20px' ml= {['50px','80px','250px','150px','80px','0px']} mb= {['20px','25px','35px','35px','0px','0px']} > 
   <Center>
   <h2 className="titre"> 3 Tuto pour être pret à prendre le large</h2>
   </Center>
</Box>
</SimpleGrid>
     

      <VerticalTimelineElement
      contentStyle={{ background: '#000000' , color: '#ffffff'}}
      contentArrowStyle={{ borderRight: '10px solid rgb(240 239 206) '}}  
      iconStyle={{ background: '#000000', color: '#ffffff' }}
      icon={<BsGoogle/>}
      >
        <Center>
        <Text id="subtitle">Navigateur</Text>
        </Center>
        <Text >Assurez-vous d'utiliser Google Chrome, Firefox ou Brave comme navigateur, afin de pouvoir utiliser pleinement les fonctionnalités web3.</Text>
        </VerticalTimelineElement>

        <Metamask/>
        <EthMainnet/>
        <Polygon/>
        
        <Box color="white" className="go">
          <a href="projet" class="nav-link">
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


export default StepTu;
