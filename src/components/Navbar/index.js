import React from "react";
import { Nav, NavbarContainer, NavLogo,MobileIcons,NavMenu,NavbarItems,NavLinks
 } from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Dalla</NavLogo>
          <MobileIcons>
           <FaBars/>
          </MobileIcons>
          <NavMenu>
              <NavbarItems>
                  <NavLinks to='about'>About</NavLinks>
                </NavbarItems>
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
