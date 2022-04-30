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
  

function Weth() {
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
    date=" Wrapped Ethereum"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    
    iconStyle={{ background: '#091843', color: '#fff' }}
    icon={< FaEthereum/>}
  >

<h1 className="vertical-timeline-element-title">WETH = ETH</h1>
    <h2 className="vertical-timeline-element-subtitle">Ethereum </h2>
        <p>
            Pour faire simple, un wETH est un ETH emballé (“Wrapped ETH” en Anglais). Mais commençons par présenter ses différents acteurs.
            <h3>TOUT D’ABORD, IL Y A LE TOKEN ETHER (ETH)</h3>
            L’Ether, ou ETH, est la monnaie de base construite sur la chaine de blocs (blockchain) Ethereum.</p>

<       div className="buttonTuto">
            <Button  variant='ghost' mt={4} m onClick={onOpen}>
                    En savoir Plus
            </Button>
      </div>


      <Modal onClose={onClose} size="lg" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Ethereum </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
            <p>
            Pour faire simple, un wETH est un ETH emballé (“Wrapped ETH” en Anglais). Mais commençons par présenter ses différents acteurs.
            <h3>TOUT D’ABORD, IL Y A LE TOKEN ETHER (ETH)</h3>
            L’Ether, ou ETH, est la monnaie de base construite sur la chaine de blocs (blockchain) Ethereum.


            <h3>ENSUITE VIENNENT LES TOKENS ALTERNATIFS (ALT TOKENS)</h3>
            Quand une dApp (application décentralisée) est construite depuis la chaine de blocs Ethereum, elle introduit généralement sa propre nouvelle forme de Token. Par exemple, les Token ERC-20, sont un standar dans la création et le trasnfert de token. 
                </p> <h3>pourquoi Weth et pas ETH</h3> 
            <p> Car tout simplement que le wETH est de l'Eth. Mais Lorsque nous utilisons une blockchaine different comme Polygon. Nous ne pouvons pas utliser de l'Eth. le wEth résout ce probleme. Il garde les memes caracteristique que l'eth mais en mieux, Il garde également la meme valeur car ce n'est que de l'ETH enveloppé. 
            </p> <p>pour plus d'information, vous pouvez lire cette petite explication simple </p>
            <a href="https://www.presse-citron.net/crypto/faq/ethereum/"> <Button colorScheme='teal' size='xs'> Button
            </Button></a> 
            <p> <h3>Ethereum c'est quoi?</h3> 
            Ethereum est une plateforme logicielle qui permet de construire des applications décentralisées grâce à des smart contracts (contrats intelligents). Certains considèrent Ethereum comme une nouvelle forme d’internet.
            pour plus d'information je vous conseille de lire cette article 
            </p> <a href="https://www.presse-citron.net/crypto/faq/ethereum/"><Button href="https://www.presse-citron.net/crypto/faq/ethereum/"colorScheme='teal' size='xs'>
            Button
            </Button></a>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

             </VerticalTimelineElement>



)
}
export default Weth
