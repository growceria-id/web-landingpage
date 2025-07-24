import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon />
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='/' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</SidebarLink>
            <SidebarLink to='/produk' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Produk</SidebarLink>
            {/* <SidebarLink to='keunggulan' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Blog</SidebarLink> */}
            <SidebarLink to='/about-us' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Us</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/unduh'>Contact</SidebarRoute>
        </SideBtnWrap>
    </SidebarWrapper>
  </SidebarContainer>
  )
};

export default Sidebar;
