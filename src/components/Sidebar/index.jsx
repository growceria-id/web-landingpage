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
            <SidebarLink to='tentang' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Tentang</SidebarLink>
            <SidebarLink to='fitur' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Fitur</SidebarLink>
            <SidebarLink to='keunggulan' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Keunggulan</SidebarLink>
            <SidebarLink to='bantuan' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Bantuan</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/unduh'>Unduh</SidebarRoute>
        </SideBtnWrap>
    </SidebarWrapper>
  </SidebarContainer>
  )
};

export default Sidebar;
