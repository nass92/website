import { SiNintendogamecube } from "react-icons/si";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useDisclosure } from '@chakra-ui/hooks';
import { extendTheme } from '@chakra-ui/react'
import {Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react'
  

function Sandbox() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const theme = extendTheme({
        textStyle: {
          h1: {
            // you can also use responsive styles
            textDecoration: 'underline',
          },},})

return (
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=" The Sandbox"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    
    iconStyle={{ background: '#091843', color: '#fff' }}
    icon={< SiNintendogamecube/>}
  >

<h1 className="vertical-timeline-element-title">The SandBox</h1>
    <h2 className="vertical-timeline-element-subtitle"> Metaverse</h2>
    <p>
    The Sandbox est un jeu de type « Play-to-Earn » (jouer pour gagner), mais c’est aussi bien plus que ça. C’est avant tout un monde virtuel, l'un des metaverse les plus développés à ce jour, dans lequel les joueurs peuvent posséder,
     construire et monétiser des actifs virtuels et des expériences de jeu par l’intermédiaire de tokens non fongibles (NFT). Le projet s'est associé à de nombreux influenceurs, marques et artistes, parmi lesquels Snoop Dogg, Atari, Ubisoft, Warner Music Group, Binance...</p>
     <p> pour plus d'info, vous pouvez lire cette article  </p>


    <div className="buttonTuto">
            <Button  variant='ghost' mt={4} m onClick={onOpen}>
                    En savoir Plus
            </Button>
      </div>


      <Modal onClose={onClose} size="lg" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> The Sandbox</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
          <h1 className="vertical-timeline-element-title">The SandBox</h1>
    <h2 className="vertical-timeline-element-subtitle"> Metaverse</h2>
    <p>
    The Sandbox est un jeu de type « Play-to-Earn » (jouer pour gagner), mais c’est aussi bien plus que ça. C’est avant tout un monde virtuel, l'un des metaverse les plus développés à ce jour, dans lequel les joueurs peuvent posséder,
     construire et monétiser des actifs virtuels et des expériences de jeu par l’intermédiaire de tokens non fongibles (NFT). Le projet s'est associé à de nombreux influenceurs, marques et artistes, parmi lesquels Snoop Dogg, Atari, Ubisoft, Warner Music Group, Binance...</p>
     <p> pour plus d'info, vous pouvez lire cette article  </p>
     <Button href="https://cryptoast.fr/the-sandbox-sand-metaverse-play-to-earn-tokenise/"colorScheme='teal' size='xs'>button</Button>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

             </VerticalTimelineElement>
)}
export default Sandbox