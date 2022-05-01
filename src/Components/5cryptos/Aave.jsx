import { GiBank } from "react-icons/gi";
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

  } from '@chakra-ui/react'
  

function Aave() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  

return (
 
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Aave Protocol"

    iconStyle={{ background: '#091843', color: '#fff' }}
    icon={< GiBank/>}
  >

<h1 className="vertical-timeline-element-title">AAVE</h1>
    <h2 className="vertical-timeline-element-subtitle">DeFi</h2>
    <p> <h3> la Defi c'est quoi ? </h3>
      La Defi (finance décentralisée), à révolutionner le secteur de la finance. 
      La finance décentralisée ou DeFi est un moyen d'échanger, d'acheter et de vendre avec peu d'intermédiaires et donc par théorie, 
      d'éviter les fonds bloqués ou des frais non prévus à la base ou toute autre action qui impacterait les finances des propriétaires de fonds. 
    </p>
    <div className="buttonTuto">
            <Button  variant='ghost' mt={4} m onClick={onOpen}>
                    En savoir Plus
            </Button>
      </div>


      <Modal onClose={onClose} size="lg" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Ethereum </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
            <p> <h3> la Defi c'est quoi ? </h3>
      La Defi (finance décentralisée), à révolutionner le secteur de la finance. 
      La finance décentralisée ou DeFi est un moyen d'échanger, d'acheter et de vendre avec peu d'intermédiaires et donc par théorie, 
      d'éviter les fonds bloqués ou des frais non prévus à la base ou toute autre action qui impacterait les finances des propriétaires de fonds. 
    </p>
    <p>
        <h3>Et AAVE ?</h3>
        Aave est un protocole open-source de finance décentralisée qui permet à n’importe qui de prêter et d’emprunter des cryptomonnaies. 
        En prêtant vos actifs numériques à la plateforme (et à ses utilisateurs), vous allez pouvoir gagner des intérêts. 
        Cela vous permet aussi de réaliser un prêt qui va être garanti par la valeur déposée.
    </p>
    <p> pour plus d'info, vous pouvez lire cette article  </p>
    <a href="https://www.journaldugeek.com/crypto/acheter/aave/"><Button colorScheme='teal' size='xs'>button</Button></a>
    </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

             </VerticalTimelineElement>
)}
export default Aave