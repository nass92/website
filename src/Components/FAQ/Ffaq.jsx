import { 
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Center,} 
  from "@chakra-ui/react";



function FFaq({question}) {
  return (
<>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                   <Center><Text fontSize="30px"> {question.question} </Text></Center> 
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="white">
                {question.answer}
                </AccordionPanel>  
</>




  );
  
}



export default FFaq;
