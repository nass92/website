import 'react-vertical-timeline-component/style.min.css';
import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { useDisclosure } from '@chakra-ui/hooks';
import {  BsWallet} from "react-icons/bs";
import {Center,
  Container, 
  Heading, 
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  
} from '@chakra-ui/react'


function Metamask() {
    const { isOpen, onOpen, onClose } = useDisclosure();
   


    return(
        <VerticalTimelineElement
 
    date={<Heading textStyle='h1'>Set-up Metamask</Heading>}
    contentStyle={{ background: '#556655', color: 'rgb(249, 236, 216)' }}
    contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
    iconStyle={{ background: '#556655', color: '#fff' }}
    icon={< BsWallet />}
  >
      <Container color="white" >
  <Text>
  Installation de l'extension metamask sur votre navigateur, et configurer votre wallet aux réseaux Polygon.
  </Text>
  <div className="buttonTuto">
  <Button  variant='ghost' mt={4} m onClick={onOpen}>
        Play Tuto
      </Button>
      </div>
      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"gray.700"}>
          <ModalHeader color="gray.400" ><Center> MetaMask Wallet </Center> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <video controls boxSize='10%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s' type ="video/mp4" alt='Dan Abramov' />
  
          </ModalBody>

          <ModalFooter>
          <Button variant='ghost'>Metamask</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Container >
  </VerticalTimelineElement>


    )
}
export default Metamask;