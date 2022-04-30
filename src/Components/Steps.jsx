import { BsCurrencyEuro, BsGoogle, BsWallet, BsInfoCircleFill} from "react-icons/bs";
import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiReceiveMoney  } from "react-icons/gi";
import { GrValidate} from "react-icons/gr"
import NavMenu from "./NavBar";

function Step() {
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
    icon={<BsGoogle/>}
  >
    <h3 className="vertical-timeline-element-title">Google Chrome Or Firefox</h3>
    <h4 className="vertical-timeline-element-subtitle">Navigateur</h4>

    <p>
      Assurez-vous d'utiliser Google Chrome, Firefox ou Brave comme navigateur, afin de pouvoir utliser pleinement les fonctionnabilités web3.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Second Step"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< BsWallet/>}
  >
    <h3 className="vertical-timeline-element-title">Metamask</h3>
    <h4 className="vertical-timeline-element-subtitle">Wallet</h4>
    <p>
      Installer l'extension metamask sur votre navigateur, et configurer votre wallet aux réseaux Polygon 
    </p>
    <p> pour plus d'info, voir notre video tuto <EarningsIncrease><a href="https://nass.mypinata.cloud/ipfs/QmRiqwRfFcCUzfYddzmmozmZHxQzakAWyJZ4PWBEquRK5s">Set Up Metamask</a></EarningsIncrease></p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Third Step"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsCurrencyEuro />}
  >
    <h3 className="vertical-timeline-element-title">Acheter du Matic (polygon)</h3>
    <h4 className="vertical-timeline-element-subtitle"> euro-crypto</h4>
    <p>
      Pour investir dans l'index, échangé vos euro avec des $Matic, la crypto-monnaie du réseaux Polygon. 
      Passer par moonpay pour pour une transaction simple par cb. 
    </p>
    <p>pour plus d'info, voir notre video tuto <EarningsIncrease><a href="https://nass.mypinata.cloud/ipfs/QmX1tFGgUCTNdoh2ZYbTLYse4DH4hpddNBXBWBw4tAj8pb">Buy MATIC</a></EarningsIncrease></p> 
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Fourth Step"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsInfoCircleFill/>}
  >
    <h3 className="vertical-timeline-element-title">5 Cryptos, 5 Projects</h3>
    <h4 className="vertical-timeline-element-subtitle">Dans quoi vous investissez ?</h4>
    <p>
      Vous pouvez Maintenant investir dans notre index. Mais avant-cela, petite présentation des 5 cryptos qui le composent.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Five Step"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<GiReceiveMoney />}
  >
    <h3 className="vertical-timeline-element-title">Mugiwara_index</h3>
    <h4 className="vertical-timeline-element-subtitle">TokenSet</h4>
    <p>
     TokenSet est la plateforme qui heberge notre index. C'est ici, que vous allez pouvoir investir ,dans notre index, le temps d'une integration prochaine sur notre environnement web.
    </p>

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

const EarningsIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default Step;
