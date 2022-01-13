import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes} from "react-icons/fa";


export const SidebarContainer= styled.aside`
top:0;
left:0;
height:100%;
width: 100%;
position:fixed;
z-index:999;
/* background:#0d0d0d; */
background:#0d0d0d;
display:grid;
align-items:center;
transition:0.3s ease-in-out;
 opacity:${({isOpen})=>
    (isOpen ? '100%' : '0')}; 

 top:${({isOpen})=>(isOpen?'0':'-100%')}; 
`;
 
export const Icon=styled.div`
position:absolute;
background:transparent;
 top:2.5rem;
 right: 0;
 transform: translate(-100%, -60%);
 font-size: 1.8rem;
 cursor: pointer;
 outline:none;`;

 export const CloseIcon =styled(FaTimes)`
 color:#fff;`;

 export const SideWrapper = styled.div`
 color:#fff;

 `;
 export const SidebarMenu=styled.ul`
 display: flex;
 text-align:center;
 justify-content: center;
 align-items: center;
flex-direction:column;
padding: 2rem 0 2rem 0;

 @media screen and (max-width: 480px) {
    
  } `;
 export const SidebarLink =styled(LinkS)`
   color: #fff;
   /* color:#cd3b3b; */
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  text-decoration: none;
  padding: 1.5rem 0 2rem 0;
  height: 100%;
  cursor: pointer;
  &:hover {
   color:#01bf71;
  }`;
  export const SidebarBtnWrap=styled.nav`
  display: flex;
  align-items: center;`;
export const SidebarRoute= styled(LinkR)`
  border-radius: 5px;
  background:#01bf71;
  color:#fff;
  white-space: nowrap;
  padding: 8px 12px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #01bf71;
    color: #010606;
  }`;