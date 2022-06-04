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
 
   
    contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter' }}
    contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
    iconStyle={{ background: '#000000', color: '#ffffff' }}
    icon={< BsWallet />}
  ><Center>
  <Text id="subtitle">Metamask</Text>
  </Center>
  <Text className="sous_phrase">
  MetaMask est un portefeuille de crypto-monnaie (wallet) utilisé pour interagir avec différente blockchain. 
  Il permet aux utilisateurs d'accéder à leur portefeuille  via une extension de navigateur ou une application mobile, 
  qui peut ensuite être utilisée pour interagir avec des applications décentralisées.
  </Text>
  <div className="buttonTuto">
  <Button  variant='ghost' mt={4} m onClick={onOpen}>
        Play Tuto
      </Button>
      </div>
      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"#585e508f"}>
          <ModalHeader color="gray.400" ><Center> MetaMask Wallet </Center> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <video controls boxSize='10%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s' type ="video/mp4" alt='Dan Abramov' />
  
          </ModalBody>

          <ModalFooter>
          <a href="https://metamask.io/download/"> <Button variant='ghost' >Metamask</Button></a>
          </ModalFooter>
        </ModalContent>
      </Modal>

  </VerticalTimelineElement>


    )
}
export default Metamask;