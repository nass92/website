import Acc from "./Components/Body/Acc";
import { Route, Routes } from "react-router-dom";
import Projet from "./Components/Body/Project";
import StepTu from "./Components/Body/StepTu";
import Faq from "./Components/FAQ/Faq";
import Lexiqu from "./Components/Lexique/Lexique";
import ChatApp from "./Components/ChatBot/ChatApp";
import TutoInvest from "./Components/Body/Investment/TutoInvest";



function App() {
  return (
 <>
 <Routes>
 <Route  exact path="/" element={<ChatApp/>}></Route>
 <Route  path="/projet" element={<Projet/>}></Route>
 <Route  path="/mugiwara" element={<Acc/>}></Route>
<Route   path="/lexique" element={<Lexiqu/>}></Route>
 <Route  path="/steptuto" element={<StepTu/>}></Route>
 <Route  path="/tutoinvest" element={<TutoInvest/>}></Route>
 <Route  path="/FAQ" element={<Faq />}></Route>
 </Routes>
 </>
  );
}

export default App;
