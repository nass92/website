import { FaEthereum, FaGamepad,FaBitcoin } from "react-icons/fa";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useDisclosure } from '@chakra-ui/hooks';
import { extendTheme } from '@chakra-ui/react'
import {Center, Container,  Heading, Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
  } from '@chakra-ui/react'
  

function Wbtc() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const theme = extendTheme({
        textStyle: {
          h1: {
            // you can also use responsive styles
            textDecoration: 'underline',
          },},})

return (
 
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=" Wrapped Bitcoin"

    iconStyle={{ background: '#091843', color: '#fff' }}
    icon={< FaBitcoin/>}
  >
    <h3 className="vertical-timeline-element-title">wBTC = BTC</h3>
    <h4 className="vertical-timeline-element-subtitle">Bitcoin</h4>
    <p>
     Avons-nous besoin de le présenter? Le Bitcoin est tout simplement la 1er crypto-monnaie. C'est elle qui a amenée la blockchain au monde. Aujourd'huit, ne disposant pas des caracteristiques demandé par les nouvelles technologies; la communauté crypto la vite considérer comme l'or d'internet. de ce fait, il est considerer comme une sécurité de fond, et non plus comme un moyen de payment instantané. 
     Mais le wBTC, apporte une fonctionnalité en plus au bitcoin, qui est la possibilité de procéder à des transactions en BTC sur d'autre blockchain.
    </p>
    <div className="buttonTuto">
            <Button  variant='ghost' mt={4} m onClick={onOpen}>
                    En savoir Plus
            </Button>
      </div>


      <Modal onClose={onClose} size="lg" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Bitcoin </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
            <h3 className="vertical-timeline-element-title">wBTC = BTC</h3>
    <h4 className="vertical-timeline-element-subtitle">Bitcoin</h4>
    <p>
     Avons-nous besoin de le présenter? Le Bitcoin est tout simplement la 1er crypto-monnaie. C'est elle qui a amenée la blockchain au monde. Aujourd'huit, ne disposant pas des caracteristiques demandé par les nouvelles technologies; la communauté crypto la vite considérer comme l'or d'internet. de ce fait, il est considerer comme une sécurité de fond, et non plus comme un moyen de payment instantané. 
     Mais le wBTC, apporte une fonctionnalité en plus au bitcoin, qui est la possibilité de procéder à des transactions en BTC sur d'autre blockchain.
    </p>
    <p> pour plus d'info, vous pouvez lire cette article  </p>
    <a href="https://cryptoast.fr/btc-emballe-wrapped-btc-wbtc/"><Button colorScheme='teal' size='xs'>button</Button></a>
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