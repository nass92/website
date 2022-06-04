import { SiNintendogamecube } from "react-icons/si";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useDisclosure } from '@chakra-ui/hooks';
import Pte from '../../asset/IllustrationModal/playtoearn.jpg'
import {Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Center,
    Image,
    Link,
  } from '@chakra-ui/react'
  

function Sandbox() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  

return (
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=" The Sandbox"
    contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter' }}
        contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
        iconStyle={{ background: '#000000', color: '#ffffff' }}
    icon={< SiNintendogamecube/>}
  >
  <Center><Text id="subtitle"> The Sandbox</Text></Center>
  <br/>
  <h1 className="sous_phrase">Le Play To Earn, nouvelle generation de jeu video</h1>
  <p>
    C'est un nouveau genre de jeux video, qui  sont en mesure de vous procurer à la fois du plaisir et des revenus.
      Les récompenses obtenues sont généralement des actifs numériques qui peuvent être des cryptomonnaies, des tokens ou des NFT. 
      Un des projet les plus prometteur, The Sandbox, est francais. Il regroupe, play-to-earn et metaverse. 
  </p>
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
        <p>
        The Sandbox est un jeu de type « Play-to-Earn » (jouer pour gagner), mais c’est aussi bien plus que ça. C’est avant tout un monde virtuel, l'un des metaverse les plus développés à ce jour, dans lequel les joueurs peuvent posséder,
        construire et monétiser des actifs virtuels et des expériences de jeu par l’intermédiaire de tokens non fongibles (NFT). Le projet s'est associé à de nombreux influenceurs, marques et artistes, parmi lesquels Snoop Dogg, Atari, Ubisoft, Warner Music Group, Binance...</p>
        <p class="mt-3"> Pour plus d'inforation, vous pouvez vous redirigez vers <space/>  
        <Link href="https://cryptoast.fr/the-sandbox-sand-metaverse-play-to-earn-tokenise/" isExternal>
          <Button variant='link' size='xs'> cette article</Button>
        </Link>
        </p>
        </Text>
        <Center> <Image src={Pte}/> </Center>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
</VerticalTimelineElement>
)}
export default Sandbox