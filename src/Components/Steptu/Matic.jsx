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


function Moonpay() {
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
  <Text id="subtitle">MoonPay</Text>
  </Center>
      <Text>
      Pour investir dans l'index, échangez vos euro avec des $Matic, la crypto-monnaie du réseau Polygon. Passez par moonpay pour une transaction simple par carte bleue.
       </Text>
          <div className="buttonTuto">
      <Button  variant='ghost' mt={4} m onClick={onOpen}>
            Play Tuto
          </Button>
          </div>
      <Modal  isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={"#585e508f"}>
              <ModalHeader color="gray.300">MoonPay for EUR/MATIC</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
              <video controls boxSize='10%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmX1tFGgUCTNdoh2ZYbTLYse4DH4hpddNBXBWBw4tAj8pb' type ="video/mp4" alt='Dan Abramov' />
      
              </ModalBody>
    
              <ModalFooter>
               
               <a href="https://www.moonpay.com/buy"> <Button variant='ghost' >Moonpay</Button></a>
              </ModalFooter>
            </ModalContent>
          </Modal>
          
   
      </VerticalTimelineElement>
    )
}
export default Moonpay;