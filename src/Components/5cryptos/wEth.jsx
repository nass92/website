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
    Image,
   
   
  } from '@chakra-ui/react'
  import '../../Css/App.css'
import WEth from '../../asset/IllustrationModal/weth.svg'
function Weth() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  

return (
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    style={ {boxShadow:'0px'}}
    date=" Wrapped Ethereum"
    dateStyle={{color:"#000000"}}
    contentStyle={{ background: '#000000', color: '#ffffff', fontFamily:'inter' }}
    contentArrowStyle={{ borderRight: '9px solid rgb(73 85 73)' }}
    iconStyle={{ background: '#000000', color: '#ffffff' }}
    icon={< FaEthereum/>}
  >
<Center>
<Text id="subtitle"> Wrapped Ethereum</Text>
</Center>
<br/>
<h1 className="sous_phrase">wETH ? ETH ? Ethereum ?</h1>
    <p> Certains le considèrent comme une nouvelle forme d’internet. Ethereum est une plateforme logiciel qui permet de construire des applications décentralisées grâce à des smart contracts (contrats intelligents). Chaque Dapp créé dispose de son propre token, également appelée ERC-20 (token alternatif). L'ETH est quant à lui la monnaie de base sur laquelle est construite la blockchain Ethereum. De ce fait, les transactions en ETH ne peuvent s'échanger directement avec des tokens alternatifs. Pour résoudre ce problème, la communauté Ethereum a créé un wETH.  </p>
        
<       div className="buttonTuto">
            <Button  variant='ghost' mt={4} m onClick={onOpen}>
                    En savoir plus
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
         <p>C'est un ETH emballé (wrapped eth). Lorsque nous utilisons une Dapp, nous ne pouvons pas utiliser de l'Eth. Les développeurs d'Ethereum Fundation ont créé un wETH, 
           de type ERC-20, afin de pouvoir réaliser ces transactions. Ce jeton fonctionne en fait comme un "convertisseur" entre les Ethers et les Tokens Alternatifs, 
           il transforme tout Ether que vous envoyez en un rapport 1: 1. C'est autrement dit, un stablecoin d'Ether, qui peut ensuite être échangé en tout autre jeton ERC-20 de votre choix.</p>
            </Text>
            <Image src={WEth}/>
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
