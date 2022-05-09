import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import { DesktopRoot } from '../../Css/style'
import Navbar from '../navbar/navbar'
import question from"./faqq.json"
import FFaq from './Ffaq'
import { FaQuestion } from 'react-icons/fa'
import {
    Accordion,
    AccordionItem,
    Container,
  Box
  } 
  from '@chakra-ui/react'

  function Faq() {

    
      return(  <>
      
     
      <DesktopRoot>
    <Container maxW='3xs' ml="-15px" mr='50px'  className="fixed-top ">
        <Navbar/>
        </Container>
       

        <VerticalTimeline>
         
         
        <Box maxW='md'ml="35px" mt="-20px" mb="20px" > 
  <h2 className="phrase"> Frequently Asked Questions</h2>
  
 

  </Box>
         
            
        <Accordion >

        {question.map(( question) =>(
         <VerticalTimelineElement
         className="vertical-timeline-element--work"
         date="Aave Protocol"
         contentStyle={{ background: 'rgb(240 239 206)' , color: '#556655' }}
         iconStyle={{ background: '#556655', color: '#fff' }}
         icon={<FaQuestion/>}
       >
     
         <AccordionItem  >
                <FFaq key={question.id} question = {question}/>
                </AccordionItem  >
                </VerticalTimelineElement>
        ))}

      </Accordion>
      </VerticalTimeline>
      </DesktopRoot>


     </>
      
      )
  }
  export default Faq