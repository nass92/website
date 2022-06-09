
import 'react-vertical-timeline-component/style.min.css';
import {GiReceiveMoney} from "react-icons/gi"
import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Center, Text } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/hooks';
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

function Settoken(){
    const { isOpen, onOpen, onClose } = useDisclosure()
return(
<VerticalTimelineElement
 
        
        contentStyle={{ background: '#000000' , color: '#ffffff', fontFamily:'inter', fontWeight: '500',}}
        contentArrowStyle={{ borderRight: '10px solid rgb(240 239 206) '}}
        iconStyle={{ background: '#000000', color: '#ffffff' }}
    icon={< GiReceiveMoney/>}
  >
   <Center>
  <Text id="subtitle">TokenSet</Text>
  </Center>
  <Text className="sous_phrase" size='20px' >
  TokenSet est une plateform qui permet la création, ainsi que l'hebrgement d'index crypto. Vous allez pouvoir, ainsi, investir de façon la plus simple.  </Text>
  <div className="buttonTuto">
  <Button  variant='ghost' mt={4} m onClick={onOpen}>
        Play Tuto
      </Button>
      </div>
  <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"#585e508f"}>
          <ModalHeader color="gray.300"><Center>TokenSet for Mugiwara_index </Center></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <video controls boxSize='10%' position="relative" src='https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s' type ="video/mp4" alt='Dan Abramov' />
  
          </ModalBody>

          <ModalFooter>
           
            <a href="https://www.tokensets.com/v2/set/polygon/0x14e3B2eF956DC91421bC774E110292A0Ce9798e0"><Button variant='ghost' >Mugiwara_Index</Button></a>
          </ModalFooter>
        </ModalContent>
      </Modal>

  </VerticalTimelineElement>
  )}

  export default Settoken;