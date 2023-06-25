import styled from "styled-components";
import { Link } from "react-router-dom";
export const Button = styled(Link)`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 12px 30px;
    color: #8C2C6C;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #D661B6;
        color: #fff
    }
`

export const AnchorButton = styled.a`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 12px 30px;
    color: #8C2C6C;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #D661B6;
        color: #fff
    }
`