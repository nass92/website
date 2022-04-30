import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { RiFileCopyLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Heading } from "@chakra-ui/layout";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsCurrencyEuro} from "react-icons/bs";
const NavMneuEl = styled.nav`
  display: flex;
  background-color: rgba(213, 213, 213, 0.08);
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  backdrop-filter: blur(50px);

  @media screen and (max-width: 960px) {
    background-color: #ffffff;
      border-top: 1pxsolid #fff;
      position: absolute;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
      align-items: center;
      width: 100%;
      height: 80px;
      backdrop-filter: blur(50px);
      background: #1f5156;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

`;
const H3 = styled.h3`color:white;
text-decoration: underline;
color: #000000;
font-size: 13px;
align-items: center;
`;
const Link = styled.a`
  font-size: 1.7rem;
  ${(p) => (p.active ? 'color: #FF164E' : "")}
  position: relative;
  cursor: pointer;

  ::before {
    ${(p) => (!p.active ? "display:none;" : "")}
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0.3rem;
    border-radius: 50%;
    margin-left: 10%;
    transform: translateX(-50%);
    height: 0.3rem;
    background-color: #FF164E;
  }
`;

export default function NavMenu() {
 
  return (
    <NavMneuEl >
    
      
        <Link>  
        <Heading fontSize={25} fontStyle="italic"><a href="https://www.tokensets.com/v2/set/polygon/0x14e3B2eF956DC91421bC774E110292A0Ce9798e0" > Mugiwara_index </a>   </Heading>
        </Link>
      
      <NavLink to="/" > 
        <Link>  
          <FiHome />
          <H3>Home</H3>
        </Link>
      </NavLink>

      <NavLink to ="/projet" >
        <Link>
        <RiFileCopyLine />
        <H3>Projects</H3>
        </Link>
      </NavLink>

      <NavLink to="/step">
        <Link>
        <RiFileCopyLine />
        <H3>In 3 Steps</H3>
        </Link>
      </NavLink>

      
        <Link>
        <BsCurrencyEuro/>
            <a href="https://www.moonpay.com/buy"><H3>Buy $Matic</H3></a>
        </Link>

        <Link>
        <AiOutlinePieChart />
            <a href="https://www.tokensets.com/v2/set/polygon/0x14e3B2eF956DC91421bC774E110292A0Ce9798e0"><H3>Invest in Our Index</H3></a>
      
        </Link>
      
        
      
    </NavMneuEl>

  );
}
