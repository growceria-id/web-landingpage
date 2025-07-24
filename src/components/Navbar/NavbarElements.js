import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    max-width: 1800px;
    margin: auto;
    background: #FFF;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    width: 1200px;

    @media (max-width: 1300px) {
        width: 80%;
    }

    @media (max-width: 850px) {
        width: 100%; /* Optional: full width on smaller screens */
        padding: 0 1rem;
    }
`

export const NavbarLogo = styled(LinkR)`
    width: 10%;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const ImageLogo = styled.img`
    max-height: 80%;
    max-width: 100%;
    object-fit: contain;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #8C2C6C;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    width: 100%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    display: flex;
    text-align: center;
    flex: 0 0 ${({ span }) => (span ? `${(span / 12) * 100}%` : 'auto')};
    max-width: ${({ span }) => (span ? `${(span / 12) * 100}%` : 'auto')};
    height: 80px;
    
    justify-content: center; /* horizontal center */
    align-items: center;     /* vertical center */
`

export const NavItemEmpty = styled.li`
    display: flex;
    text-align: center;
    flex: 0 0 ${({ span }) => (span ? `${(span / 12) * 100}%` : 'auto')};
    max-width: ${({ span }) => (span ? `${(span / 12) * 100}%` : 'auto')};
    height: 80px;
`

export const NavLinks = styled(LinkR)`
    font-weight: bold;
    color: #000;
    margin: auto;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavLinksContact = styled.a`
    font-weight: bold;
    color: #000;
    margin: auto;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const Navlinkr = styled(LinkR)`
    font-weight: bold;
    color: #000;
    margin: auto;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavLinkHighlightOnActive = styled.span`
    &.active {
        color: white;
        background-color: #8C2C6C;
        padding: .5rem;
        border-radius: .5rem; 
    }
`

export const NavLinkHighlight = styled.span`
    color: #8C2C6C;
    background-color: rgba(255, 173, 228, 0.5);
    padding: .5rem;
    border-radius: .5rem; 
`

export const NavBtn = styled.nav` /* why nav? */
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 12px 30px;
    color: #8C2C6C;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #D661B6;
        color: #fff
    }
`