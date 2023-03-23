import { FaBars } from "react-icons/fa"
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`  
    background: #99CCED;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-weight: bold;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color:4d4dff;
    }
`;

export const bar = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max:width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: Translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /*Second Nav */
    /*margin-right: 24px*/
    /* Third Nav */
    /* width: 100vw;
    white-space:nowrap; */
    @media screen and (max-width: 768px) {
        display:none;
    }
`;
