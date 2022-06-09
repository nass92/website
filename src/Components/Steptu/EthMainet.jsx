import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { useDisclosure } from '@chakra-ui/hooks';
import { BsCurrencyEuro, } from "react-icons/bs";
import {Center, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'


function  EthMainnet() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <VerticalTimelineElement
    
       
        dateClassName="date"
        contentStyle={{ background: '#000000', color: '#ffffff', }}
        contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
        iconStyle={{ background: '#000000', color: '#ffffff', borderColor:"#00000" }}
        iconClassName="red"
        icon={<BsCurrencyEuro/>}
        
      >
        <Center>
  <Text id="subtitle">Ethereum Mainnet</Text>
  </Center>
      <Text className="sous_phrase">
       Si vous voulez utilisée une dapp sur Ethereum, alors il vous faut vous connecter, sur votre metamask, au réseau Ethereum mainnet.
       Metamask est configuré par défault au réseau Ethereum lors de la création du portefeuille. </Text>
          <div className="buttonTuto">
      <Button  variant='ghost' mt={4} m onClick={onOpen}>
            Play Tuto
          </Button>
          </div>
      <Modal  isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={"#585e508f"}>
              <ModalHeader color="gray.300">Ethereum Mainnet</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
              <video controls boxSize='10%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmX1tFGgUCTNdoh2ZYbTLYse4DH4hpddNBXBWBw4tAj8pb' type ="video/mp4" alt='Dan Abramov' />
      
              </ModalBody>
    
              <ModalFooter>
              <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          
   
      </VerticalTimelineElement>
    )
}
export default EthMainnet;