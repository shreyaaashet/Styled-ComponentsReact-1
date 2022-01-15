import { Routes, Route } from "react-router-dom";
import "./App.css";
// SignIn
import Home from "./pages";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/signin' element={<SignIn />}/> */}
      </Routes>
    </>
  );
}

export default App;
