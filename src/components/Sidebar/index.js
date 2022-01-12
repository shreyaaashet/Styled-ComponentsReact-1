import React from 'react'
// import { FaTimes } from 'react-icons/fa';
import { CloseIcon, Icon, SidebarContainer,SideWrapper,SidebarMenu,SidebarLink 
    ,SidebarBtnWrap,SidebarRoute} from './SidebarElements';




const Sidebar = ({handleToggle, isOpen, setIsOpen}) => {
    return (
    <>
    <SidebarContainer isOpen={isOpen}>
        <Icon onClick={handleToggle}>
           <CloseIcon/>
        </Icon>
        <SideWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={handleToggle}>About</SidebarLink>
                <SidebarLink to='discover' onClick={handleToggle}>Discover</SidebarLink>
                <SidebarLink to='services' onClick={handleToggle}>Services</SidebarLink>
                <SidebarLink to='signUp' onClick={handleToggle}>Sign-up</SidebarLink>
                <SidebarBtnWrap>
                  <SidebarRoute to='/signIn' onClick={handleToggle}>Sign-in</SidebarRoute>
                </SidebarBtnWrap>
           </SidebarMenu>
        </SideWrapper>
    </SidebarContainer>
    


    </>
    );
};

export default Sidebar
