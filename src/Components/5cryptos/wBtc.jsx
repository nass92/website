import { FaBitcoin } from "react-icons/fa";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useDisclosure } from '@chakra-ui/hooks';
import {Center, Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Container,
    Box,
  
  } from '@chakra-ui/react'
  

function Wbtc() {
    const { isOpen, onOpen, onClose } = useDisclosure();
 

return (

    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=" Wrapped Bitcoin"
    contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter',  }}
        contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
        iconStyle={{ background: '#000000', color: '#ffffff' }}
    icon={< FaBitcoin/>}
  >
   <Center >
<Text id="subtitle"> Wrapped Bitcoin</Text>
</Center>
<br/>
<h1 className="vertical-timeline-element-title">Bitcoin, reine des crypto-monnaies</h1>
    <p>
    Le bitcoin est une monnaie virtuelle dont l’unique fonction est de réaliser des paiements en ligne, sans intermédiaire. Ni plus, ni moins.
    Le bitcoin n’a aucune existence physique et ne dépend d’aucune banque centrale. On ne peut pas l’éteindre : son système est basé sur un réseau, la “blockchain”, 
    alimenté par une dizaine de milliers d’ordinateurs à travers la planète. Son créateur, Satoshi nakamoto, reste un mystere.</p>
    <div className="buttonTuto">
            <Button  variant='ghost' mt={4} m onClick={onOpen}>
                    En savoir Plus
            </Button>
      </div>


      <Modal onClose={onClose} size="lg" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Wrapped Bitcoin </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
         
    <p>Le bitcoin ne peut etre échanger qu'a traver sonn réseau. Il ne dispose pas des caractéristique suffisante pour pouvoir l'utilisé, léchanger sur des Dapps.
      Plusieur acteurs, de la communauté Bitcoin,  ont conjointement lancé le Wrapped Bitcoin, pour répondre à ce problème. 
      Le WBTC a pour principales missions d'apporter la grande liquidité caractéristique du Bitcoin (BTC) à l'écosystème décentralisé et d'améliorer toutes les applications décentralisées (dApps).
    </p>
    <p class="mt-3"> Pour plus d'info, vous pouvez lire cette article  
    <a href="https://cryptoast.fr/btc-emballe-wrapped-btc-wbtc/"><Button colorScheme='teal' size='xs'>button</Button></a></p>
</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

             </VerticalTimelineElement>

)}
export default Wbtc;