import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline } from "react-vertical-timeline-component/dist-modules";
import { DesktopRoot } from "../../Css/style";
import Navbar from "../navbar/navbar";
import { BiBookReader } from 'react-icons/bi';
import SVG from '../../asset/lg.svg'
import Def from "./Def";
import titre from './Lx.json'
import {
  Center,
  Container,
  Accordion,
  AccordionItem,
  Box,
  SimpleGrid
} from '@chakra-ui/react'

function Lexiqu() {
return (
<DesktopRoot>
  <Container maxW='3xs' ml="-15px" mr='50px'  className="fixed-top ">
    <Navbar/>
  </Container>
  <VerticalTimeline lineColor="black">
  <Accordion  allowMultiple>

    <SimpleGrid column={2}>
      <Box maxW='md'color='white' mt="18px">
        <Center>
        <img className="titre" src={SVG} alt='Mugiwara'/>
        </Center>
      </Box>
      <Box maxW='sm' mt='20px' ml= {['50px','80px','100px','100px','100px','0px']} mb= {['20px','25px','35px','35px','0px','0px']} > 
        <Center>
        <h2 className="titre"> Le Lexique de la Blockchain</h2>
        </Center>
      </Box>
    </SimpleGrid>

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