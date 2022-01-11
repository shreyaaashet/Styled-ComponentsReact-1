import React from "react";
import { Nav, NavbarContainer, NavLogo,MobileIcons,NavMenu,NavbarItems,NavLinks,NavBtn,NavBtnLink
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
                <NavbarItems>
                  <NavLinks to='discover'>Discover</NavLinks>
                </NavbarItems>
                <NavbarItems>
                  <NavLinks to='services'>Services</NavLinks>
                </NavbarItems>
                <NavbarItems>
                  <NavLinks to='signUp'>Sign-up</NavLinks>
                </NavbarItems>
                <NavBtn>
                  <NavBtnLink to='signIn'>Sign-in</NavBtnLink>
                </NavBtn>
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
