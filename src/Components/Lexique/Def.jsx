import { 
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Center,} 
    from "@chakra-ui/react";
  
  
  
  function Def({titre}) {
    return (
  <>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                     <Center> <Text fontSize="30px" > {titre.titre} </Text></Center>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} >
                  {titre.answer}
                  </AccordionPanel>  
  </>
  
  
  
  
    );
    
  }
  
  
  
  export default Def;
  