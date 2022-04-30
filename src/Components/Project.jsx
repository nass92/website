import { FaEthereum, FaGamepad,FaBitcoin } from "react-icons/fa";
import { SiNintendogamecube } from "react-icons/si";
import { GiBank } from "react-icons/gi";
import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button} from '@chakra-ui/react'
import { GrValidate} from "react-icons/gr";
import NavMenu from "./NavBar";
function Projet() {
  return (
    <DesktopRoot>
<div className="fixed-top">
        <NavMenu />
        </div>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=" First Step"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< FaEthereum/>}
  >
    <h1 className="vertical-timeline-element-title">WETH = ETH</h1>
    <h2 className="vertical-timeline-element-subtitle">Ethereum </h2>
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
  </VerticalTimelineElement>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Second Step"

    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< FaGamepad/>}
  >
    <h1 className="vertical-timeline-element-title">Decentraland (MANA)</h1>
    <h2 className="vertical-timeline-element-subtitle">Metaverse</h2>
    <p>
    Decentraland est une plate-forme de réalité virtuelle 3D décentralisée qui se compose de 90 601 parcelles de terrain. Les parcelles de Decentraland sont des jetons non fongibles qui peuvent être achetés en utilisant la crypto-monnaie MANA. Decentraland, est la 1er metaverse sortit, et repose sur la blockchain Ethereum.
    Il est possible d'y acceder sois de facon classique, ou par le biais de casque virtuelle pour PC. Elle est à ce jour un des projets metaverse les plus solides du secteur. 
    </p>
    <p> pour plus d'info, vous pouvez visiter leur site  </p>
   <a href="https://decentraland.org/"> <Button href="https://decentraland.org/"colorScheme='teal' size='xs'>button</Button></a>
  </VerticalTimelineElement>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Third Step"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SiNintendogamecube  />}
  >
    <h1 className="vertical-timeline-element-title">The SandBox</h1>
    <h2 className="vertical-timeline-element-subtitle"> Metaverse</h2>
    <p>
    The Sandbox est un jeu de type « Play-to-Earn » (jouer pour gagner), mais c’est aussi bien plus que ça. C’est avant tout un monde virtuel, l'un des metaverse les plus développés à ce jour, dans lequel les joueurs peuvent posséder,
     construire et monétiser des actifs virtuels et des expériences de jeu par l’intermédiaire de tokens non fongibles (NFT). Le projet s'est associé à de nombreux influenceurs, marques et artistes, parmi lesquels Snoop Dogg, Atari, Ubisoft, Warner Music Group, Binance...</p>
     <p> pour plus d'info, vous pouvez lire cette article  </p>
    <Button href="https://cryptoast.fr/the-sandbox-sand-metaverse-play-to-earn-tokenise/"colorScheme='teal' size='xs'>button</Button>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Fourth Step"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<GiBank/>}
  >
    <h1 className="vertical-timeline-element-title">AAVE</h1>
    <h2 className="vertical-timeline-element-subtitle">DeFi</h2>
    <p> <h3> la Defi c'est quoi ? </h3>
      La Defi (finance décentralisée), à révolutionner le secteur de la finance. 
      La finance décentralisée ou DeFi est un moyen d'échanger, d'acheter et de vendre avec peu d'intermédiaires et donc par théorie, 
      d'éviter les fonds bloqués ou des frais non prévus à la base ou toute autre action qui impacterait les finances des propriétaires de fonds. 
    </p>
    <p>
        <h3>Et AAVE ?</h3>
        Aave est un protocole open-source de finance décentralisée qui permet à n’importe qui de prêter et d’emprunter des cryptomonnaies. 
        En prêtant vos actifs numériques à la plateforme (et à ses utilisateurs), vous allez pouvoir gagner des intérêts. 
        Cela vous permet aussi de réaliser un prêt qui va être garanti par la valeur déposée.
    </p>
    <p> pour plus d'info, vous pouvez lire cette article  </p>
    <a href="https://www.journaldugeek.com/crypto/acheter/aave/"><Button colorScheme='teal' size='xs'>button</Button></a>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Five Step"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(204,102,0)', color: '#fff' }}
    icon={<FaBitcoin/>}
  >
    <h3 className="vertical-timeline-element-title">wBTC = BTC</h3>
    <h4 className="vertical-timeline-element-subtitle">Bitcoin</h4>
    <p>
     Avons-nous besoin de le présenter? Le Bitcoin est tout simplement la 1er crypto-monnaie. C'est elle qui a amenée la blockchain au monde. Aujourd'huit, ne disposant pas des caracteristiques demandé par les nouvelles technologies; la communauté crypto la vite considérer comme l'or d'internet. de ce fait, il est considerer comme une sécurité de fond, et non plus comme un moyen de payment instantané. 
     Mais le wBTC, apporte une fonctionnalité en plus au bitcoin, qui est la possibilité de procéder à des transactions en BTC sur d'autre blockchain.
    </p>
    <p> pour plus d'info, vous pouvez lire cette article  </p>
    <a href="https://cryptoast.fr/btc-emballe-wrapped-btc-wbtc/"><Button colorScheme='teal' size='xs'>button</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<GrValidate/>}
  />
</VerticalTimeline>

</DesktopRoot>
  );
  
}

const DesktopRoot = styled.div`
  background-color: #091843;
  margin: 0;
  padding: 0;
`;

export default Projet;

