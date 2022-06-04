import {  FaGamepad, } from "react-icons/fa";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useDisclosure } from '@chakra-ui/hooks';
import Meta from '../../asset/IllustrationModal/meta.png'
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
   
  } from '@chakra-ui/react'
  

function Mana() {

  const { isOpen, onOpen, onClose } = useDisclosure();
    
  return (
 
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Decentraland"
    contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter' }}
    contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
    iconStyle={{ background: '#000000', color: '#ffffff' }}
    icon={< FaGamepad/>}
  >
  <Center>
  <Text id="subtitle"> Decentraland</Text>
  </Center>
  <br/>
  <h1 className="sous_phrase">Metaverse, ok mais c'est quoi?</h1>
     
   <p>Une métaverse est un monde virtuel.
     Le terme est régulièrement utilisé pour décrire une future version d'Internet où des espaces virtuels, 
     persistants et partagés sont accessibles via interaction 3D. Décentraland est un des tout premier projet metaverse. 
   </p>
  <div className="buttonTuto">
    <Button  variant='ghost' mt={4} m onClick={onOpen}>En savoir Plus</Button>
  </div>


  <Modal onClose={onClose} size="lg" isOpen={isOpen}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader> " Metaverse, je coffre des Décentraland" <span>Freeze Corleone</span></ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>
          <p>
          Decentraland est une application décentralisée, de réalité virtuelle, déployée sur le réseau ethereum. Ce type d'application sont connues sous le nom de metaverse. 
          Decentraland est composée d'un nombre limité de parcelles, ou terrain, sur lequel il est possible de tout créer (ex: un casino, un musée, un magasin...).
          <Center> <Image src={Meta} mt='20px' mb='20px'/></Center>
          Ces parcelles sont des NFT (jetons non fongibles ou aussi ERC-721) qui peuvent être achetés avec le token MANA (token natif de l'application). 
          Il est possible d'accéder, à cette metaverse, soit de façon classique, ou par le biais de casque virtuelle pour PC. Elle est, à ce jour, un des projets metaverses les plus solides du secteur. 
        </p> 
        </Text>
        
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>

</VerticalTimelineElement>
)}
export default Mana