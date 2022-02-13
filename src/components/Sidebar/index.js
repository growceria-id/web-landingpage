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
            <SidebarLink to='tentang' onClick={toggle}>Tentang</SidebarLink>
            <SidebarLink to='fitur' onClick={toggle}>Fitur</SidebarLink>
            <SidebarLink to='keunggulan' onClick={toggle}>Keunggulan</SidebarLink>
            <SidebarLink to='bantuan' onClick={toggle}>Bantuan</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='unduh'>Unduh</SidebarRoute>
        </SideBtnWrap>
    </SidebarWrapper>
  </SidebarContainer>
  )
};

export default Sidebar;
