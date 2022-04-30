import Acceuil from "./Components/Accueil";
import { Route, Routes } from "react-router-dom";
import Projet from "./Components/Project";
import Acc from "./Components/Acc";
import StepTu from "./Components/StepTu";

function App() {
  return (
 <>
 <Routes>
 <Route exact path="/" element={<Acc/>}></Route>
 <Route exact path="/steptuto" element={<StepTu/>}></Route>
 <Route  path="/projet" element={<Projet/>}></Route>
 </Routes>
 </>
  );
}

export default App;
