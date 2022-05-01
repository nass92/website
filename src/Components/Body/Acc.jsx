import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GrValidate} from "react-icons/gr"
import { BsInstagram, BsSnapchat,  BsTelegram, BsDiscord} from "react-icons/bs";
import { Box, Center, Heading, Avatar, Grid, GridItem, Container  } from "@chakra-ui/react";
import Logo from "../../asset/Logo.png"
import {VscGraphLine} from "react-icons/vsc"
import {CgDanger,} from "react-icons/cg"
import {IoShareSocialSharp} from "react-icons/io5"
import Api from "../cryptoprice/CoinApi";
import Navbar from "../navbar/navbar";
import {DesktopRoot} from "../../Css/style"
import Fusée from '../navbar/fusée';
function Acc() {
  return (<>
        <Container maxW='3xs' ml="-15px" mr='50px'  className="fixed-top ">
        <Navbar/>
        </Container>
    <DesktopRoot>


    <VerticalTimeline>


<Grid templateColumns='repeat(3)'  gap={4}>
  <GridItem colSpan={2} >
  <Box maxW='md' p='4' color='white' ml='30px' mt="15px">
  <Center>
  <img src={Logo}  alt="Logo Chapeau de paille" />
  </Center>
  <h2 className="phrase"> Voici comment comprendre, analyser et entrer dans le monde de la crypto-monnaie</h2>
  </Box>
  </GridItem>
  <GridItem colStart={[1,3,4]} colEnd={[1,3,4]}   >
  <Box p='4'ml='30px' mt="15px"> 
  <Center>
  <Box maxW='md' p='4'  > 

  <h1 className="titre">Mugiwara_Index</h1>
  <h3 className="sous-titre">"Le Marché Boursier est un moyen de transférer de l'argent de l'impatient au patient" </h3><span className="sp" >Warrent Buffet</span>

  </Box>
  </Center>
   </Box>
  </GridItem>
</Grid>

   <VerticalTimelineElement
    
    date={<Heading color="white">Welcome Young Crypto-Sailor</Heading>}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: '#091843', color: '#fff' }}
    icon={<Center ><Avatar size="md"  src={Logo}></Avatar></Center>}
  >
    <p>
     Nous Vous Souhaitons la bienvenue sur notre nouvelle Index. Cette dernière vous fournira toutes les informations nécessaires concernant le monde de la Crypto-monnaie. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    
    date={<Heading>Crypto Market Price</Heading>}
    contentStyle={{ background: '#091843', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #091843' }}
    iconStyle={{ background: '#091843', color: '#fff' }}
    icon={<VscGraphLine/>}
  >
    <Container maxW="xs">
   <Api/>
   </Container>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date= {<Heading>N'oubliez pas.</Heading>}
    iconStyle={{ background: '#091843', color: '#fff' }}
    icon={< CgDanger/>}
  >
      <h3 className="sous_phrase">Faites attention à votre argent, vous êtes seul décisionnaire de votre futur</h3>
    <p>Informez vous soigneusement, soyez maitre de vos choix.Cette index est un moyen simplifier d’accéder aux différents
projets solides dans le secteurs des cryptos-monnaies.</p>
    <p>
    Tenez compte que ceci n’et pas un conseil en investissement; mais une plateforme d’informations écheniller.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<Heading>Découvrez-nous : @Mugiwara_Index</Heading>}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: '#091843', color: '#fff' }}
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
        
  <Box color="white" className="go">
    <a href="steptuto" class="nav-link">
        <Fusée/>
        
        </a>
    </Box>
     
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<GrValidate/>}
  />

</VerticalTimeline>
</DesktopRoot>
</>
  );
}



export default Acc;
