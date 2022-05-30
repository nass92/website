import {DesktopRoot} from "../../Css/style"
import Fusée from '../navbar/fusée';
import '../../Css/App.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GrValidate} from "react-icons/gr"
import { BsInstagram, BsSnapchat,  BsTelegram, BsDiscord} from "react-icons/bs";
import {VscGraphLine} from "react-icons/vsc"
import {CgDanger,} from "react-icons/cg"
import Api from "../cryptoprice/CoinApi";
import Navbar from "../navbar/navbar";
import { Box, Center, Heading, Container, Text, Stat, SimpleGrid, StatLabel } from "@chakra-ui/react";
import SVG from '../../asset/lg.svg'

function Acc() {
  return (<>
    <Container maxW='3xs' ml="-15px" mr='50px'  className="fixed-top ">
      <Navbar/>
    </Container>

    <DesktopRoot>
    <VerticalTimeline lineColor="black">

      <SimpleGrid column={2}>
      <Box maxW='md'color='white' mt="18px">
        <Center>
        <img className="titre" src={SVG} alt='Mugiwara'/>
        </Center>
      </Box>
      <Box maxW='sm' mt='20px' ml= {['50px','80px','100px','100px','100px','0px']} mb= {['20px','25px','35px','35px','0px','0px']} > 
        <Center>
        <h2 className="titre"> Voici comment comprendre, analyser et entrer dans le monde de la crypto-monnaie</h2>
        </Center>
    </Box>
  </SimpleGrid>


    <VerticalTimelineElement
    position='right'
    contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter',}}
    contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
    iconStyle={{ background: '#000000', color: '#C1E6C4' }}      
    >
    <Center>
    <Text id="subtitle "color= '#ffffff'> Qu'est ce qu'un Crypto_index ?</Text>
    </Center>
      <p>Un Crypto Index est un portefeuille diversifié de cryptomonnaies sélectionnées que vous pouvez acheter, vendre ou swapper en un seul clic, au lieu de passer par l’opération d'achat et de vente de chaque cryptomonnaie individuellement. Il vous permet de diversifier facilement votre portefeuille de cryptomonnaies.</p>
    </VerticalTimelineElement>
    
    <VerticalTimelineElement
    position='left'
    contentStyle={{ background: 'transparent', color: '#000000', fontFamily:'inter' }}
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
        projets solides dans le secteurs des cryptos-monnaies</p>
      <p> Tenez compte que ceci n’est pas un conseil en investissement, mais bien une plateforme d’informations échenillées.</p>
    </VerticalTimelineElement>

    <Box ml= {['70px','80px','200px','200px','250px','200px']}  mt={['65px','px','100px','100px','150px','150px']}>
    <Stat>
      <SimpleGrid columns={4} spacing={1} >
        <Box  height='auto'mt= {['10px','10px','5px','5px','0px','0px']} >
        <StatLabel><Heading as="h3"> <a href="https://www.moonpay.com/buy"> <BsDiscord/> </a>   </Heading></StatLabel>
        </Box>
        <Box  height='auto' mt= {['10px','10px','5px','5px','0px','0px']} >
        <StatLabel><Heading as="h3" > <a href="https://www.moonpay.com/buy"> <BsInstagram/></a>   </Heading></StatLabel>
          </Box>
          <Box  height='auto'mt= {['10px','10px','5px','5px','0px','0px']} >
        <StatLabel><Heading as="h3" > <a href="https://www.moonpay.com/buy"> < BsSnapchat/>  </a>   </Heading></StatLabel>
        </Box>
        <Box  height='auto'mt= {['10px','10px','5px','5px','0px','0px']} >
        <StatLabel><Heading as="h3" > <BsTelegram/>  </Heading></StatLabel>
        </Box>
      </SimpleGrid>
    </Stat>
    </Box> 
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
