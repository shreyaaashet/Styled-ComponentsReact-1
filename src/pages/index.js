import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import  Herosection  from '../components/Herosection'


const Home = () => {

const [isOpen, setIsOpen] = useState(false);

const handleToggle=()=>{
 setIsOpen(!isOpen);
}  
  return (
      <>
      <Sidebar handleToggle={handleToggle} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar handleToggle={handleToggle} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Herosection/>
      </>
    )
}

export default Home
