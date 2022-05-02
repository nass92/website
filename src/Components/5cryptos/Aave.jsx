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
    Center,

  } from '@chakra-ui/react'
  

function Aave() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  

return (
 
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Aave Protocol"
    contentStyle={{ background: 'rgb(240 239 206)' , color: '#556655' }}
    iconStyle={{ background: '#556655', color: '#fff' }}
    icon={< GiBank/>}
  >

<Center>
<h2 className="vertical-timeline-element-subtitle"> AAVE</h2>
</Center>
<br/>
<h1 className="vertical-timeline-element-title">La Finance Décentralisée, vrai revolution?</h1>
    <p> 
      La Defi (finance décentralisée), à boulverser ce secteur. 
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
            L’objectif de la finance décentralisée est de permettre la transmission de valeur et la création d’une finance pour tous et sans intermédiaire comme peuvent l’être les banques ou les plateformes d’échange.
La DeFi permet à n’importe qui d’obtenir des prêts. C’est un système totalement décentralisés pour les emprunteurs et il n’est pas possible qu’un prêt vous soit refusé. Il vous suffit d’avoir un accès à internet.
Cela permet également aux prêteurs de faire travailler leur argent avec des taux d’intérêts décents ! </p>
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