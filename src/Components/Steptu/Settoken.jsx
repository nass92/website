
import 'react-vertical-timeline-component/style.min.css';
import styled from "styled-components";
import { BsWallet} from "react-icons/bs";
import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Container, Heading, Text } from "@chakra-ui/react";
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
import { useDisclosure } from '@chakra-ui/hooks';

function Settoken(){
    const { isOpen, onOpen, onClose } = useDisclosure()
return(
<VerticalTimelineElement
 
        date={<Heading color="white">Mugiwara_index</Heading>}
    contentStyle={{ background: '#091843', color: '#fff' }}
    contentArrowStyle={{ border: '7px solid  #091843' }}
    iconStyle={{ background: '#091843', color: '#fff' }}
    icon={< BsWallet/>}
  >
   <Container color="white" >
  <Text>
  TokenSet est la plateforme qui heberge l'index. C'est ici, que vous allez pouvoir investir, le temps d'une integration prochaine sur notre environnement web.
  </Text>
  <div className="buttonTuto">
  <Button  variant='ghost' mt={4} m onClick={onOpen}>
        Play Tuto
      </Button>
      </div>
  <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"gray.700"}>
          <ModalHeader color="gray.300">TokenSet for Mugiwara_index</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <video controls boxSize='10%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s' type ="video/mp4" alt='Dan Abramov' />
  
          </ModalBody>

          <ModalFooter>
           
            <a href="https://www.tokensets.com/v2/set/polygon/0x14e3B2eF956DC91421bC774E110292A0Ce9798e0"><Button >Mugiwara_Index</Button></a>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Container >
  </VerticalTimelineElement>
  )}

  export default Settoken;