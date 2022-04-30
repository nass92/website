import Acceuil from "./Components/Accueil";
import { Route, Routes } from "react-router-dom";
import StepTuto from "./Components/StepTuto";
import Projet from "./Components/Project";
import Step from "./Components/Steps";
import Acc from "./Components/Acc";
import StepTu from "./Components/StepTu";

function App() {
  return (
 <>
 <Routes>
 <Route exact path="/" element={<Acc/>}></Route>
 <Route exact path="/steptuto" element={<StepTu/>}></Route>
 <Route  path="/projet" element={<Projet/>}></Route>
 <Route  path="/step" element={<Step/>}></Route>
 </Routes>
 </>
  );
}

export default App;
