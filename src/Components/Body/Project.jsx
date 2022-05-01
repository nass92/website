import {DesktopRoot} from "../../Css/style"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GrValidate} from "react-icons/gr";
import Weth from "../5cryptos/wEth";
import Mana from "../5cryptos/Mana";
import Sandbox from "../5cryptos/Sandbox";
import Aave from "../5cryptos/Aave";
import Wbtc from "../5cryptos/wBtc";
import Navbar from "../navbar/navbar";
import { Container } from "@chakra-ui/react";


function Projet() {
  return (<>
    <Container maxW='xs' ml="-15px"  className="fixed-top ">
        <Navbar/>
        </Container>
    <DesktopRoot>

    
<VerticalTimeline> 


  <Weth/>


  <Mana/>


<Sandbox/>

  <Aave/>



  <Wbtc/>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<GrValidate/>}
  />
  
</VerticalTimeline>

</DesktopRoot>
</>
  );
  
}


export default Projet;
