import {  FaGamepad, } from "react-icons/fa";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useDisclosure } from '@chakra-ui/hooks';

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
   
  } from '@chakra-ui/react'
  

function Mana() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    

return (
 
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Decentraland"
    iconStyle={{ background: '#091843', color: '#fff' }}
    icon={< FaGamepad/>}
  >
<Center>
<h2 className="vertical-timeline-element-subtitle"> Decentraland</h2>
</Center>
<br/>
<h1 className="vertical-timeline-element-title">Metaverse, ok mais c'est quoi?</h1>
     
   <p>Un métavers est un monde virtuel. Le terme est régulièrement utilisé pour décrire une future version d'Internet où des espaces virtuels, 
     persistants et partagés sont accessibles via interaction 3D. Décentraland est un des tout premier projet metavers. </p>
  

    <div className="buttonTuto">
            <Button  variant='ghost' mt={4} m onClick={onOpen}>
                    En savoir Plus
            </Button>
      </div>


      <Modal onClose={onClose} size="lg" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> " Metaverse, je coffre des Décentraland" <span>Freeze Corleone</span></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
        
   
          <p>
    Decentraland est une application décentralisée, de réalité virtuel, déployé sur le réseau ethereum. Ce type d'application sont connut sous le nom de metaverse.
    Decentraland est composée d'un nombre limité de parcelles, ou terrain, sur lequel il est possible de tout crée (ex un casino, un musée, un magasin...). Ces parcelles sont des NFT (jetons non fongibles ou aussi ERC-721) qui peuvent être achetés avec le token MANA (token natif de l'application).
Il est possible d'acceder, à cette metaverse, sois de facon classique, ou par le biais de casque virtuelle pour PC. Elle est, à ce jour, un des projets metaverses les plus solides du secteur. 
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