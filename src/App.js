import { Routes, Route } from "react-router-dom";
import "./App.css";
import Herosection from "./components/Herosection";
import Home from "./pages";


function App() {
  return (
    <>
       <Routes>
        <Route path='/' element={<Home />}/>
         
      
      
     
      </Routes>
    </>
  );
}

export default App;
