import { BsCurrencyEuro, BsGoogle, BsWallet, BsInfoCircleFill} from "react-icons/bs";
import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiReceiveMoney  } from "react-icons/gi";
import { GrValidate} from "react-icons/gr"
import NavMenu from "./NavBar";
import { BsInstagram, BsSnapchat,  BsTelegram, BsDiscord} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
import { FcNext } from "react-icons/fc";
function StepTu() {
  return (
    <DesktopRoot>
    
  
<VerticalTimeline>

<Container ml="-166px" p="auto"color='white' backgroundColor="#091843" >  
   <Heading as="h6" mt="50px" >few tuto for beginner ... </Heading>
   </Container>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<Heading>Buy $Matic</Heading>}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsGoogle/>}
  >
    <h3 className="vertical-timeline-element-title">Buy Some Matic Fastly</h3>
    <h4 className="vertical-timeline-element-subtitle">MoonPay</h4>
    <video controls boxSize='20%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s' type ="video/mp4" alt='Dan Abramov' />
  
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<Heading>Mugiwara_index</Heading>}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< BsWallet/>}
  >
    <h3 className="vertical-timeline-element-title">Invest With Mugiwara_index</h3>
    <h4 className="vertical-timeline-element-subtitle"> setToken</h4>
    <video controls boxSize='10%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s' type ="video/mp4" alt='Dan Abramov' />
  
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<Heading>Set-up Metamask</Heading>}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsCurrencyEuro />}
  >
    <h3 className="vertical-timeline-element-title">Set-up Your Wallet</h3>
    <h4 className="vertical-timeline-element-subtitle"> Metamask</h4>
    <video controls boxSize='10%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s' type ="video/mp4" alt='Dan Abramov' />
  
    <Heading>
    <a href="https://www.moonpay.com/buy"> <BsDiscord/> </a> 
     <a href="https://www.moonpay.com/buy"><BsInstagram/> </a>
     <a href="https://www.moonpay.com/buy">< BsSnapchat/> </a> 
    <a href="https://www.moonpay.com/buy"> <BsTelegram/> </a>  
    </Heading>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Fourth Step"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsInfoCircleFill/>}
  >
      <NavLink to="/projet">
          <Center>
    <h3 className="vertical-timeline-element-title">Lets Go</h3>
    </Center>
    <Center >
    <Heading mb="25px" mt="30px"  as="h4"><FcNext/> </Heading>
    </Center>
    </NavLink>
  </VerticalTimelineElement>

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

const EarningsIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default StepTu;
