import React from 'react';
import styled from 'styled-components';

const NavbarStyle = styled.div`
justify-content: space-between;
align-items: center;
padding: 32px 5%;
display: flex;
position: absolute;
top: 0%;
bottom: auto;
left: 0%;
right: 0%;
z-index: 1000;

img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
}

.logo-width {
    width: 200px;
    max-width: 100%;
    display: inline-block;
    text-decoration: none;
    background-color: transparent;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 40px;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-link {
    color: var(--color-navy);
    font-family: Grifter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
        color: var(--color-gold);
    }
}

.nav-cta {
    background: var(--color-gold);
    color: var(--color-navy);
    padding: 12px 24px;
    border-radius: 8px;
    font-family: Grifter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
    }
}

@media (max-width: 991px) {
    .nav-menu {
        display: none;
    }
}

`;

const Navbar = () => {
    return (
        <NavbarStyle>
            <a href="/" className="logo-width">
                <img src="https://assets.website-files.com/5837424ae11409586f837994/614a5001679615173f8c6620_Group%202262.svg" alt="Championship Resumes" loading="lazy" />
            </a>
            <nav className="nav-menu">
                <a href="#process" className="nav-link">Process</a>
                <a href="#portfolio" className="nav-link">Portfolio</a>
                <a href="#pricing-3" className="nav-link">Pricing</a>
                <a href="#faq" className="nav-link">FAQ</a>
                <a href="#pricing-3" className="nav-cta">Get Started</a>
            </nav>
        </NavbarStyle>
    );
}

export default Navbar;
