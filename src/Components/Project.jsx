import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GrValidate} from "react-icons/gr";
import NavMenu from "./NavBar";
import Weth from "./5cryptos/wEth";
import Mana from "./5cryptos/Mana";
import Sandbox from "./5cryptos/Sandbox";
import Aave from "./5cryptos/Aave";
import Wbtc from "./5cryptos/wBtc";
import { Container } from "@chakra-ui/layout";
import Navbar from "./navbar/navbar";


function Projet() {
  return (
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
  );
  
}

const DesktopRoot = styled.div`
  background-color: #091843;
  margin: 0;
  padding: 0;
`;

export default Projet;

