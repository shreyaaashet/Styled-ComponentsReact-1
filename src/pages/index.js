import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import  Herosection  from '../components/Herosection'
import Infosection from '../components/Infosection'
import { aboutObj } from '../components/Infosection/Data'


const Home = () => {

const [isOpen, setIsOpen] = useState(false);
const [hover,setHover]= useState(false);

const handleToggle=()=>{
 setIsOpen(!isOpen);
}  
const handleHover=()=>{
  setHover(!hover);
}
  return (
      <>
      <Sidebar handleToggle={handleToggle} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar handleToggle={handleToggle} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Herosection handleHover={handleHover} hover={hover} setHover={setHover}/>
      <Infosection {...aboutObj} />
      </>
    )
}

export default Home
