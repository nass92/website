import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Container,
    Heading,
    Text,
    Center,
  } from '@chakra-ui/react'
import { DesktopRoot } from '../../Css/style'
import Navbar from '../navbar/navbar'

import question from"./faqq.json"
  function Faq() {
      return( <DesktopRoot>
          <Container  ml="-15px"  className="fixed-top ">
        <Navbar/>
        </Container>
       
          <Heading mt="10%" ><Center> Frequently Asked Questions</Center>  </Heading>
          <Container maxW="8xl"  position="center" mt="8%">
        <Accordion defaultIndex={[0]} allowMultiple>
        {question.map((question) =>(
  <AccordionItem color="white" key={question.id}>
  <h2>
    <AccordionButton>
      <Box flex='1' textAlign='left'>
       <Text fontSize="30px"> {question.question} </Text>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4} color="white">
   {question.answer}
  </AccordionPanel>
</AccordionItem>
      ))}

      </Accordion>
      </Container>
      </DesktopRoot>
      
      )
  }
  export default Faq