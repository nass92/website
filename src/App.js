import { Route, Routes } from "react-router-dom";
import Projet from "./Components/Body/Project";
import Acc from "./Components/Body/Acc";
import StepTu from "./Components/Body/StepTu";
import Faq from "./Components/FAQ/Faq";

function App() {
  return (
 <>
 <Routes>
 <Route exact path="/" element={<Acc/>}></Route>
 <Route exact path="/steptuto" element={<StepTu/>}></Route>
 <Route  path="/projet" element={<Projet/>}></Route>
 <Route  path="/FAQ" element={<Faq />}></Route>
 </Routes>
 </>
  );
}

export default App;
