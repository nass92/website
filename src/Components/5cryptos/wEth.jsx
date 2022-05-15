import { FaEthereum } from "react-icons/fa";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useDisclosure } from '@chakra-ui/hooks';
import { Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Center,
   
   
  } from '@chakra-ui/react'
  

function Weth() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  

return (
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=" Wrapped Ethereum"
    contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter' }}
    contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
    iconStyle={{ background: '#000000', color: '#ffffff' }}
    icon={< FaEthereum/>}
  >
<Center>
<Text id="subtitle"> Wrapped Ethereum</Text>
</Center>
<br/>
<Text  className="vertical-timeline-element-title">wETH ? ETH ? Ethereum ?</Text>
    <p> Certains le considèrent comme une nouvelle forme d’internet. Ethereum est une plateforme logicielle qui permet de construire des applications décentralisées grâce à des smart contracts (contrats intelligents).
      Chaque Dapp crée disposent de son propre token, également appelée ERC-20 (token alternatif). L'ETH est quand à lui la monnaie de base sur laquelle est construite la blockchain Ethereum. 
      de ce fait, Les transactions en ETH ne peuvent s'échanger directement avec des tokens alternatifs. Pour résoudre ce probleme là, la communauté Ethereum à crée un wETH.
            </p>
        
<       div className="buttonTuto">
            <Button  variant='ghost' mt={4} m onClick={onOpen}>
                    En savoir Plus
            </Button>
      </div>


      <Modal onClose={onClose} size="lg" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Wrapped ETH </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
         <p></p>
         <p>C'est un ETH emballé (wrapped eth). Lorsque nous utilisons une Dapp, nous ne pouvons pas utliser de l'Eth. les développeurs d'Ethereum Fundation, 
           ont crée un wETH, de type ERC-20, afin de pouvoir réaliser ces transactions.  Ce jeton fonctionne en fait comme un "convertisseur" entre les Ethers et les Tokens Alternatifs, 
           il transforme tout Ether que vous envoyez en un rapport 1: 1. 
            C'est autrement dit, un stablecoin d'Ether, qui peut ensuite être échangé en tout autre jeton ERC-20 de votre choix.</p>
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
