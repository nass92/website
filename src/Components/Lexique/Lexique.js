import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline } from "react-vertical-timeline-component/dist-modules";
import { DesktopRoot } from "../../Css/style";
import Navbar from "../navbar/navbar";
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
  <Accordion allowToggle>

    <SimpleGrid column={2}>
      <Box maxW='md'color='white' mt="18px">
        <Center>
        <img className="titre" src={SVG} alt='Mugiwara'/>
        </Center>
      </Box>
      <Box maxW='sm' mt='20px' ml= {['50px','80px','100px','100px','100px','0px']} mb= {['20px','25px','35px','35px','0px','0px']} > 
        <Center>
        <h2 className="titre"> Le Lexique de la Blockchain, afin de vous familiarizer avec les mots technique</h2>
        </Center>
      </Box>
    </SimpleGrid>
<LexMap/>
   
  </Accordion>
  </VerticalTimeline> 
</DesktopRoot>

    

)}
export default Lexiqu

export const LexMap = ()=> {
 return(<>
 {titre.map(( titre) =>(
<Box mb='50px'>
    <AccordionItem  borderColor='#000000' >
      <Def key={titre.id} titre = {titre}/>
    </AccordionItem  >
    </Box>
    ))}
    </> 
 )
}