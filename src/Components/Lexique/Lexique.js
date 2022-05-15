import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline } from "react-vertical-timeline-component/dist-modules";
import { DesktopRoot } from "../../Css/style";
import Navbar from "../navbar/navbar";

import Def from "./Def";
import titre from './Lx.json'
import {
  Center,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  Box,

} from '@chakra-ui/react'
import { BiBookReader } from 'react-icons/bi';

function Lexiqu() {
return (
    <DesktopRoot>
  <Container maxW='3xs' ml="-15px" mr='50px'  className="fixed-top ">
        <Navbar/>
        </Container>
    
       
        <VerticalTimeline lineColor="black">
         


    
<Accordion defaultIndex={[0]} allowMultiple>
<Box maxW='md' ml="35px" mt="-20px" mb="20px"> 
        <Center>
  <h2 className="phrase"> Le Lexique de la Blockchain</h2>
  </Center>
  </Box>

{titre.map(( titre) =>(
 <VerticalTimelineElement
 className="vertical-timeline-element--work"
 date=""
 contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter' }}
 contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
 iconStyle={{ background: '#000000', color: '#ffffff' }}
 icon={<BiBookReader/>}
>

 <AccordionItem  >
        <Def key={titre.id} titre = {titre}/>
        </AccordionItem  >
        </VerticalTimelineElement>
))}

</Accordion>
             </VerticalTimeline> 
             </DesktopRoot>

    

)}
export default Lexiqu