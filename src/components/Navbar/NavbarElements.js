import styled from "styled-components";
// hve the link from both router n react-scroll
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  /* background: #000; */
  background:rgba(0,0,0,.6);
  height: 80px;
  margin-top:-80px;
  align-items: center;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 2px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcons = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 60%;
    right: 0;
    transform: translate(-100%, -60%);
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -2px;
  z-index: 100;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const NavbarItems = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 5px;
  background: #010606;
  color: #01bf71;
  white-space: nowrap;
  padding: 10px 15px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #01bf71;
    color: #010606;
  }
`;
