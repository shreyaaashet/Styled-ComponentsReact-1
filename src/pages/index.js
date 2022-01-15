import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import  Herosection  from '../components/Herosection'
import Infosection from '../components/Infosection'
import { aboutObj, signUpObj } from '../components/Infosection/Data'
import { discoverObj } from '../components/Infosection/Data'

import { serviceItem } from '../components/Services/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'


const Home = () => {
// const[serviceData, setServiceData]= useState( serviceItem );

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
      <Infosection {...discoverObj} />
      <Services serviceItem={serviceItem}/>
      <Infosection {...signUpObj} />
      <Footer/>

      </>
    )
}

export default Home
