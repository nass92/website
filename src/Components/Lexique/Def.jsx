import { 
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Center,
    Image,} 
    from "@chakra-ui/react";
    import { Player, Controls } from '@lottiefiles/react-lottie-player';

  
  
  function Def({titre}) {
    return (
  <>

    <AccordionButton >
      <Box flex='1' textAlign='left' >
      <Center> <Text id="subtitleLexique" > {titre.titre} </Text></Center>
      </Box>
      <AccordionIcon />
    </AccordionButton>
 
  <AccordionPanel pb={4} >
  <Center> {titre.lotties ?    
  <Player
  autoplay
  loop
  src={titre.src}
  style={{ maxHeight: 'auto', maxWidth: 'auto', }}
>
  <Controls visible={false}  />
</Player>
  : <Image id="im2" src={titre.src} mt='15px'mb="15px"/> }</Center>
                  {titre.answer}
               
                  </AccordionPanel>  
  </>
  
  
  
  
    );
    
  }
  
  
  
  export default Def;
  