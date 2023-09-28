import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const FooterStyle = styled.div`
padding: 150px 5% 100px;
overflow: visible;
color: #fff;
background-image: url(https://assets.website-files.com/5837424ae11409586f837994/611b2d3c1a84f270060c9ec1_Texture.png),linear-gradient(#000,#000);
background-position: 0 0,0 0;
background-size: auto,auto;
position: relative;

.container {
    z-index: 2;
    max-width: 1240px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.hero {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
.m-auto {
    margin-left: auto;
    margin-right: auto;
}
.container__800 {
    max-width: 800px;
}

h2 {
    letter-spacing: .5px;
    margin-top: 0;
    margin-bottom: 10px;
    font-family: Grifter,sans-serif;
    font-size: 50px;
    font-weight: 200;
    line-height: 60px;
}

.sub-para-24 {
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 24px;
    line-height: 36px;
}

a {
    background-color: transparent;
    text-decoration: none;
}

.w-inline-block {
    max-width: 100%;
}

.cta-button {
    color: #fff;
    letter-spacing: 0;
    border: 1px solid #fff;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    padding: 60px;
    font-family: Grifter,sans-serif;
    font-size: 28px;
    transition: all .6s;
    display: flex;
}

.cta-button:hover {
    color: #000;
    background-color: #fff;
    transform: translateY(-13px);
    box-shadow: 9px 9px rgba(255,255,255,.24);
}

a:active, a:hover {
    outline: 0;
}

div {
    display: block;
}

.logos {
    border-top: 6px #fff;
    border-bottom: 6px #fff;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
}

img {
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
}

.lang {
    height: 24px;
}
.footer__logo {
    height: 26px;
    margin-right: 2vw;
}

.white {
    filter: invert()saturate(0%)saturate(0%);
}

.soundstripe {
    filter: saturate(0%);
}

.nectar {
    height: 23px;
}

.bottom {
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 100px;
    display: flex;
}

.footer__left-col {
    max-width: 480px;
    text-align: left;
    align-items: center;
    line-height: 19px;
    display: flex;
}

.footer__bottom-logo {
    width: 150px;
    margin-right: 30px;
    display: block;
}

.div-block-3 {
    align-items: center;
    display: flex;
}

.az {
    max-width: 40px;
    margin-right: 10px;
}

.footer__head {
    max-width: 240px;
    font-family: Inconsolata,monospace;
}

.footer__right-col {
    text-align: left;
    justify-content: space-between;
    align-items: flex-start;
    display: flex;
}

.footer__link-col-left {
    margin-right: 60px;
}

.footer__link {
    color: #fff;
    margin-bottom: 16px;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    transition: all .2s;
    display: block;
}

.image-42 {
    position: absolute;
    top: auto;
    bottom: 0%;
    left: 0%;
    right: auto;
}

@media (max-width: 767px) {
    .container__800.m-auto.hero {
        max-width: 540px;
    }
}

@media (max-width: 991px) {
    .logos {
        margin-top: 60px;
        display: block;
    }

    .footer__logo {
        margin-top: 30px;
        margin-right: 5vw;
    }

    .bottom {
        display: block;
    }

    .footer__left-col {
        margin-bottom: 40px;
    }

    .footer__right-col {
        max-width: 310px;
        display: flex;
    }

    .image-42 {
        width: 100px;
    }
}

@media (max-width: 767px) {
    padding-bottom: 120px;

    .container {
        max-width: 1240px;
        min-width: 0;
    }

    h2 {
        font-size: 50px;
        line-height: 60px;
    }
}

@media (max-width: 479px) {
    padding-top: 60px;

    .container {
        max-width: 1240px;
        min-width: auto;
        flex: 0 auto;
    }

    h2 {
        font-size: 42px;
        line-height: 44px;
    }

    .sub-para-24 {
        margin-top: 20px;
    }

    .cta-button {
        margin-top: 40px;
        line-height: 30px;
    }

    .logos {
        margin-top: 40px;
    }

    .footer__logo.soundstripe {
        margin-right: 0;
    }

    .footer__left-col {
        display: block;
    }

    .div-block-3 {
        margin-top: 20px;
    }

    .footer__head {
        margin-top: 20px;
    }
}
`;

const Footer = () => {
    return (
        <FooterStyle>
            <div className="section footer">
                <div className="container">
                    <div data-w-id="e21e1f8d-f728-e6e2-065d-4466a59029d4" className="container__800 m-auto hero">
                        <h2>See if Designjoy is right for you. (It totally is.)</h2>
                        <p className="sub-para-24">Get a guided tour through Designjoy, and find out how you and your team can change the way you source design, forever.</p>
                        <a href="#pricing-3" className="cta-button w-inline-block">
                            <div>Get started</div>
                        </a>
                    </div>
                    <div data-w-id="e21e1f8d-f728-e6e2-065d-4466a59029dd" className="logos">
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/61424c5418f01be24c52b682_Frame%2051.svg" loading="lazy" alt className="footer__logo lang" />
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/6165e962d62dea1088533161_Dark%20Logo%20SVG.svg" loading="lazy" alt className="footer__logo soundstripe white" />
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/620c0b65ac9e342dcd34db83_Nectar-sleep-logo-vector%201.svg" loading="lazy" alt className="footer__logo nectar" />
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/6203180d8e14605fb2d2c003_Vector.svg" loading="lazy" alt className="footer__logo" />
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/61424c54ffa9064f6650375b_Group%2015.svg" loading="lazy" alt className="footer__logo soundstripe" />
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/611b2dc537b655a389aaf3d7_5e1c980f4b6c084724851ee1_cometchat%201%201.svg" loading="lazy" alt className="footer__logo" />
                    </div>
                    <div data-w-id="e21e1f8d-f728-e6e2-065d-4466a59029e4" className="bottom">
                        <div className="footer__left-col">
                            <a href="/" aria-current="page" className="footer__bottom-logo w-inline-block w--current">
                                <img src="https://assets.website-files.com/5837424ae11409586f837994/614a5000615d62efc4f90f5f_Group%202263.svg" loading="lazy" alt />
                            </a>
                            <div className="div-block-3">
                                <img src="https://assets.website-files.com/5837424ae11409586f837994/611d718c63e40202e8a17cd3_Frame.svg" loading="lazy" alt className="az" />
                                <div className="footer__head">Designjoy is headquartered in Phoenix, Arizona.</div>
                            </div>
                        </div>
                        <div className="footer__right-col">
                            <div className="footer__link-col-left">
                                <a href="#latest" className="footer__link">Latest projects</a>
                                <a href="#pricing-3" className="footer__link">Pricing</a>
                                <a href="mailto:hello@designjoy.co?subject=Designjoy%20Inquiry" className="footer__link">Contact</a>
                            </div>
                            <div>
                                <a href="https://billing.stripe.com/p/login/14keXT4Qa8wh5k4dQQ" className="footer__link">Client login</a>
                                <a href="#pricing" className="footer__link">Get started</a>
                                <a href="https://www.notion.so/brettwill1025/Terms-of-Use-4901d894656448a69c4c4e04d40d3bbc?pvs=4" target="_blank" className="footer__link">Terms &amp; conditions</a>
                                <a href="https://www.notion.so/brettwill1025/DesignJoy-Privacy-Policy-0011594d80724a68821940237f9f7b02" target="_blank" className="footer__link">Privacy policy</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://assets.website-files.com/5837424ae11409586f837994/611b30cc3e9ae0491a0ac358_25.svg" loading="lazy" alt className="image-42" />
            </div>
        </FooterStyle>
    );
}

export default Footer;
