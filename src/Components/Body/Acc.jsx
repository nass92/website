import {DesktopRoot} from "../../Css/style"
import Fusée from '../navbar/fusée';
import '../../Css/App.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GrValidate} from "react-icons/gr"
import { BsInstagram, BsSnapchat,  BsTelegram, BsDiscord} from "react-icons/bs";
import Mu from "../../asset/Mu.jpeg"
import {VscGraphLine} from "react-icons/vsc"
import {CgDanger,} from "react-icons/cg"
import {IoShareSocialSharp} from "react-icons/io5"
import Api from "../cryptoprice/CoinApi";
import Navbar from "../navbar/navbar";
import { Box, Center, Heading, Avatar, Grid, GridItem, Container, Text  } from "@chakra-ui/react";
function Acc() {
  return (<>
        <Container maxW='3xs' ml="-15px" mr='50px'  className="fixed-top ">
        <Navbar/>
        </Container>
    <DesktopRoot>


    <VerticalTimeline lineColor="black">
    <Grid templateColumns='repeat(2)' >
  <GridItem colSpan={2} >
  <Box maxW='md' p='4' color='white' ml='30px' mt="18px">
  <Center>
  <img className="titre" src={Mu} alt='Mugiwara'/>
  </Center>

  
  </Box>
  </GridItem>
  <GridItem colStart={[1,3,4]} colEnd={[1,3,4]}   >
  <Box p='4'ml='30px' > 
  <Center>
  <Box maxW='md' p='4'  > 

  <h2 className="phrase"> Voici comment comprendre, analyser et entrer dans le monde de la crypto-monnaie</h2>
  </Box>
  </Center>
   </Box>
  </GridItem>
</Grid>





   <VerticalTimelineElement
    
   
    contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter', margin:'10px 0px 30px 10px' }}
    contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
    iconStyle={{ background: '#000000', color: '#C1E6C4' }}
    
  >
   <Center>
<Text id="subtitle"> Qu'est ce qu'un Crypto_index ?</Text>
</Center>
    <p>
    Un Crypto Index est un portefeuille diversifier de cryptomonnaies sélectionnées que vous pouvez acheter, vendre ou swapper en un seul clic, au lieu de passer par l’opération d'achat et de vente de chaque cryptomonnaie individuellement.
     Il vous permet de diversifier facilement votre portefeuille  de cryptomonnaies. 
    </p>
  </VerticalTimelineElement>



  <VerticalTimelineElement
    
    
    contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter' }}
        contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
        iconStyle={{ background: '#000000', color: '#C1E6C4'  }}
    icon={<VscGraphLine/>}
  >
    
   <Api/>
   

  </VerticalTimelineElement>




  
  <VerticalTimelineElement
    
    contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter' }}
    contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
    iconStyle={{ background: '#000000', color: '#ffffff' }}
    icon={< CgDanger/>}
  >
      <h3 className="sous_phrase">Faites attention à votre argent, vous êtes seul décisionnaire de votre futur</h3>
    <p>Informez vous soigneusement, soyez maitre de vos choix.Cette index est un moyen simplifier d’accéder aux différents
projets solides dans le secteurs des cryptos-monnaies.</p>
    <p>
    Tenez compte que ceci n’et pas un conseil en investissement; mais une plateforme d’informations écheniller.
    </p>
  </VerticalTimelineElement>
  <Container borderBottom ='0.2rem solid blue'>
    
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter', marginBottom:'20px' }}
    iconStyle={{ background: '#000000', color: '#ffffff',}}
    icon={<IoShareSocialSharp />}
  > 
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
  <div class="col ">
    <div class="p-3 "><Heading as="h3"> <a href="https://www.moonpay.com/buy"> <BsDiscord/> </a>   </Heading></div>
  </div>
  <div class="col">
    <div class="p-3 "><Heading as="h3" > <a href="https://www.moonpay.com/buy"> <BsInstagram/></a>   </Heading></div>
  </div>
  <div class="col">
    <div class="p-3 "><Heading as="h3" > <a href="https://www.moonpay.com/buy"> < BsSnapchat/>  </a>   </Heading></div>
  </div>
  <div class="col">
    <div class="p-3 "><Heading as="h3" > <BsTelegram/>  </Heading></div>
  </div>
    </div>
  </VerticalTimelineElement>
  </Container> 
  <Box color="white" className="go">
    <a href="steptuto" class="nav-link">
        <Fusée/>
        
        </a>
        
    </Box>
     
  
  <VerticalTimelineElement
    
    iconStyle={{ background: '#ffffff', color: '#fff' }}
    icon={<GrValidate/>}
  />

</VerticalTimeline>
</DesktopRoot>
</>
  );
}



export default Acc;
