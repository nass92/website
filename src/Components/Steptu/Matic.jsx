import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { useDisclosure } from '@chakra-ui/hooks';
import { BsCurrencyEuro, } from "react-icons/bs";
import {Container, Heading, Text } from "@chakra-ui/react";
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
    
        date={<Heading>Buy $Matic</Heading>}
        contentStyle={{ background: '#556655', color: 'rgb(249, 236, 216)' }}
        contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
        iconStyle={{ background: '#556655', color: '#fff' }}
        icon={<BsCurrencyEuro/>}
        
      >
        <Container color="white" >
      <Text>
      Pour investir dans l'index, échangé vos euro avec des $Matic, la crypto-monnaie du réseaux Polygon. 
          Passer par moonpay pour pour une transaction simple par cb. 
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
              <video controls boxSize='10%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s' type ="video/mp4" alt='Dan Abramov' />
      
              </ModalBody>
    
              <ModalFooter>
               
               <a href="https://www.moonpay.com/buy"> <Button variant='ghost' >Moonpay</Button></a>
              </ModalFooter>
            </ModalContent>
          </Modal>
          
    </Container >
      </VerticalTimelineElement>
    )
}
export default Moonpay;