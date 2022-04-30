import { FaEthereum, FaGamepad,FaBitcoin } from "react-icons/fa";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useDisclosure } from '@chakra-ui/hooks';
import { extendTheme } from '@chakra-ui/react'
import {Center, Container,  Heading, Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
  } from '@chakra-ui/react'
  

function Mana() {
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
    date="Decentraland"

    iconStyle={{ background: '#091843', color: '#fff' }}
    icon={< FaGamepad/>}
  >

<h1 className="vertical-timeline-element-title">Decentraland (MANA)</h1>
    <h2 className="vertical-timeline-element-subtitle">Metaverse</h2>
    <p>
    Decentraland est une plate-forme de réalité virtuelle 3D décentralisée qui se compose de 90 601 parcelles de terrain. Les parcelles de Decentraland sont des jetons non fongibles qui peuvent être achetés en utilisant la crypto-monnaie MANA. Decentraland, est la 1er metaverse sortit, et repose sur la blockchain Ethereum.
    Il est possible d'y acceder sois de facon classique, ou par le biais de casque virtuelle pour PC. Elle est à ce jour un des projets metaverse les plus solides du secteur. 
    </p> 

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
          < h1 className="vertical-timeline-element-title">Decentraland (MANA)</h1>
    <h2 className="vertical-timeline-element-subtitle">Metaverse</h2>
    <p>
    Decentraland est une plate-forme de réalité virtuelle 3D décentralisée qui se compose de 90 601 parcelles de terrain. Les parcelles de Decentraland sont des jetons non fongibles qui peuvent être achetés en utilisant la crypto-monnaie MANA. Decentraland, est la 1er metaverse sortit, et repose sur la blockchain Ethereum.
    Il est possible d'y acceder sois de facon classique, ou par le biais de casque virtuelle pour PC. Elle est à ce jour un des projets metaverse les plus solides du secteur. 
    </p>
    <p> pour plus d'info, vous pouvez visiter leur site  </p>
   <a href="https://decentraland.org/"> <Button href="https://decentraland.org/"colorScheme='teal' size='xs'>button</Button></a>
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