import React from 'react';
import styled from 'styled-components';

const NavbarStyle = styled.div`
justify-content: center;
align-items: center;
padding-top: 32px;
display: flex;
position: absolute;
top: 0%;
bottom: auto;
left: 0%;
right: 0%;

img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
}

.logo-width {
    width: 128px;
    max-width: 100%;
    display: inline-block;
    text-decoration: none;
    background-color: transparent;
}

`;

const Navbar = () => {
    return (
        <NavbarStyle>
            <a href="/" className="logo-width" >
                <img src="https://assets.website-files.com/5837424ae11409586f837994/614a5001679615173f8c6620_Group%202262.svg" alt loading="lazy" />
            </a>
        </NavbarStyle>
    );
}

export default Navbar;
