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

} from '@chakra-ui/react'
import { BiBookReader } from 'react-icons/bi';

function Lexiqu() {
return (
    <DesktopRoot>
  <Container maxW='3xs' ml="-15px" mr='50px'  className="fixed-top ">
        <Navbar/>
        </Container>
    
        <Center> 
        <Heading  >Le Lexique de la Blockchain</Heading></Center> 
        <VerticalTimeline>
         

    
<Accordion defaultIndex={[0]} allowMultiple>

{titre.map(( titre) =>(
 <VerticalTimelineElement
 className="vertical-timeline-element--work"
 date="Aave Protocol"
 contentStyle={{ background: 'rgb(240 239 206)' , color: '#556655' }}
 iconStyle={{ background: '#556655', color: '#fff' }}
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