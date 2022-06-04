import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { useDisclosure } from '@chakra-ui/hooks';
import { BsCurrencyEuro, } from "react-icons/bs";
import {Center, Container, Heading, Text } from "@chakra-ui/react";
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


function  Polygon() {
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
  <Text id="subtitle">Polygon Mainnet</Text>
  </Center>
        <Text className="sous_phrase">
            Polygon est une blockchain, tels qu'Ethereum, qui permet la conception de Smart-Contract. Le réseau Ethereum étant actuellement surchargé, les frais de transactions y sont très élevés. 
            Polygon, lui, garde des frais transactions  très faible.
            Pour Interragir avec une dapp sur la blockchain Polygon, ou tout simplement stocker et transferer des $Matic, configurez votre wallet au réseau Polygon Mainnet. 
        </Text>
         <div className="buttonTuto">
          <Button  variant='ghost' mt={4} m onClick={onOpen}>
            Play Tuto
          </Button>
          </div>
      <Modal  isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={"#585e508f"}>
              <ModalHeader color="gray.300">Polygon Mainnet</ModalHeader>
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
export default Polygon;