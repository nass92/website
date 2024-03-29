import { FaBitcoin } from "react-icons/fa";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useDisclosure } from '@chakra-ui/hooks';
import Btc from '../../asset/IllustrationModal/images.png'
import {Center, Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Link,
  
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
<h1 className="sous_phrase">Bitcoin, reine des crypto-monnaies</h1>
    <p>
    Le bitcoin est une monnaie virtuelle dont l’unique fonction est de réaliser des paiements en ligne, sans intermédiaire.
     Ni plus, ni moins. Le bitcoin n’a aucune existence physique et ne dépend d’aucune banque centrale. 
     On ne peut pas l’éteindre : son système est basé sur un réseau, la “blockchain”, alimenté par une dizaine de milliers d’ordinateurs à travers la planète. Son créateur, Satoshi nakamoto, reste un mystère.
    </p>
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
      
      <p>
       Le bitcoin ne peut être échangé qu'a travers son réseau. Il ne dispose pas de caractéristiques suffisante pour pouvoir l'utiliser, l’échanger sur des Dapps. Plusieurs acteurs, de la communauté Bitcoin, ont conjointement lancé le Wrapped Bitcoin, pour répondre à ce problème.
       Le WBTC a pour principales missions d'apporter la grande liquidité caractéristique du Bitcoin (BTC) à l'écosystème décentralisé et d'améliorer toutes les applications décentralisées (dApps).
      </p>
    <p class="mt-3"> Pour plus d'inforation, vous pouvez vous redirigez vers <space/>  
    <Link href="https://cryptoast.fr/btc-emballe-wrapped-btc-wbtc/" isExternal><Button variant='link' size='xs'> cette article</Button></Link></p>
</Text>
<Center> <Image src={Btc}/> </Center>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

             </VerticalTimelineElement>

)}
export default Wbtc;