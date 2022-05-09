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
    
       
        <VerticalTimeline>
        <Box maxW='md' ml="35px" mt="-20px" mb="20px"> 
  <h2 className="phrase"> Le Lexique de la Blockchain</h2>
  
 

  </Box>

    
<Accordion defaultIndex={[0]} allowMultiple>

{titre.map(( titre) =>(
 <VerticalTimelineElement
 className="vertical-timeline-element--work"
 date=""
 contentStyle={{ background: 'rgb(240 239 206)' , color: '#556655' }}
 iconStyle={{ background: '#091843', color: '#fff' }}
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