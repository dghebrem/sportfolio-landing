import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const RecentWorkStyle = styled.div`
padding: 150px 5% 100px;
overflow: visible;
background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png),linear-gradient(#e1eaf4,#e1eaf4);
background-position: 0 0,0 0;
background-size: auto,auto;
padding-top: 60px;

.container {
    z-index: 2;
    max-width: 1240px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.recent-work__title-block {
    display: block;
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

.button__group {
    display: inline-block;
}

.recent-work {
    margin-top: 40px;
}

.w-inline-block {
    max-width: 100%;
    display: inline-block;
}

.button {
    color: #fff;
    text-align: center;
    letter-spacing: .5px;
    background-color: #000;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 24px 30px;
    font-family: Grifter,sans-serif;
    font-size: 17px;
    font-weight: 700;
    text-decoration: none;
    transition: all .2s;
    display: flex;
    box-shadow: 6px 6px rgba(0,0,0,.2);
}

.button:hover {
    transform: translateY(-6px);
    box-shadow: 8px 8px rgba(0,0,0,.2);
}

.hero {
    padding-left: 60px;
    padding-right: 60px;
}

.w-layout-grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.latest-projects__grid {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-top: 60px;
    margin-bottom: 60px;
}

img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
}

#w-node-_4669fb84-43d3-407d-351a-333dc453fdb1-1bf5e5de, #w-node-a476bea0-4d4e-9005-ee25-f88a19146459-1bf5e5de {
    grid-area: span 1/span 1/span 1/span 1;
}

.container__800 {
    max-width: 800px;
}

.m-auto {
    margin-left: auto;
    margin-right: auto;
}

.logo {
    margin-top: 80px;
}

.recent-work__logos-title {
    letter-spacing: .5px;
    margin-bottom: 10px;
    font-family: Grifter,sans-serif;
    font-size: 17px;
    font-weight: 700;
}

.recent-work__logos-flex {
    max-width: 600px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

.recent-work__logo {
    width: auto;
    height: 28px;
    margin-right: 0.5vw;
}

.dribbble {
    height: 24px;
    margin-right: 0.5vw;
}

.awwwards {
    height: 18px;
    margin-right: 0.5vw;
}

.ph {
    height: 28px;
}

@media (max-width: 991px) {
    .recent-work__logos-flex {
        justify-content: center;
    }

    .recent-work__logo.awwwards, .recent-work__logo.dribbble {
        margin-right: 2vw;
    }

    .recent-work__logo {
        margin-bottom: 0;
        margin-right: 2vw;
    }
}

@media (max-width: 767px) {
    overflow: hidden;

    .container {
        max-width: 1240px;
        min-width: 0;
    }

    .recent-work__logo.awwwards, .recent-work__logo.dribbble {
        margin-right: 3vw;
    }

    .recent-work__logo {
        margin-bottom: 20px;
        margin-right: 3vw;
    }
}

@media (max-width: 479px) {
    overflow: hidden;

    .latest-projects__grid {
        grid-template-columns: 1fr;
    }

    .recent-work__logo {
        margin-bottom: 20px;
        margin-right: 20px;
    }
}
`;

const RecentWork = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const inView1 = useInView(ref1);
    const inView2 = useInView(ref2);
    const inView3 = useInView(ref3);
    const inView4 = useInView(ref4);
    const inView5 = useInView(ref5);
    const inView6 = useInView(ref6);

    return (
        <RecentWorkStyle>
            <div id="latest" className="section gray">
                <div className="container">
                    <motion.div
                        ref={ref1}
                        className="recent-work__title-block"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    >
                        <h2>Recent work</h2>
                        <p className="sub-para-24">Award winning designs, and nothing less.</p>
                        <div className="button__group recent-work">
                            <a href="https://www.figma.com/proto/xMf3kagAMyUSNulcEMNUAU/Sample-Work?page-id=0%3A1&amp;node-id=1%3A2&amp;viewport=252%2C48%2C0.25&amp;scaling=min-zoom&amp;starting-point-node-id=1%3A2" target="_blank" className="button hero w-inline-block">
                                <div>View recent work</div>
                            </a>
                        </div>
                    </motion.div>
                    <div className="w-layout-grid latest-projects__grid">
                        <motion.img 
                            ref={ref2}
                            src="https://assets.website-files.com/5837424ae11409586f837994/64bea7745eabdc84545d0c6e_dfdfdfKam.jpg" 
                            loading="lazy" srcset="https://assets.website-files.com/5837424ae11409586f837994/64bea7745eabdc84545d0c6e_dfdfdfKam-p-500.jpg 500w, https://assets.website-files.com/5837424ae11409586f837994/64bea7745eabdc84545d0c6e_dfdfdfKam-p-800.jpg 800w, https://assets.website-files.com/5837424ae11409586f837994/64bea7745eabdc84545d0c6e_dfdfdfKam-p-1080.jpg 1080w, https://assets.website-files.com/5837424ae11409586f837994/64bea7745eabdc84545d0c6e_dfdfdfKam-p-1600.jpg 1600w, https://assets.website-files.com/5837424ae11409586f837994/64bea7745eabdc84545d0c6e_dfdfdfKam.jpg 2000w" 
                            sizes="90vw" 
                            alt
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 80 }}
                            transition={{ duration: 0.55 }}
                        />
                        <motion.img 
                            ref={ref3}
                            src="https://assets.website-files.com/5837424ae11409586f837994/64bea70b83b8a6d5be1c5ab3_dKam.jpg" 
                            loading="lazy" 
                            srcset="https://assets.website-files.com/5837424ae11409586f837994/64bea70b83b8a6d5be1c5ab3_dKam-p-500.jpg 500w, https://assets.website-files.com/5837424ae11409586f837994/64bea70b83b8a6d5be1c5ab3_dKam-p-800.jpg 800w, https://assets.website-files.com/5837424ae11409586f837994/64bea70b83b8a6d5be1c5ab3_dKam-p-1080.jpg 1080w, https://assets.website-files.com/5837424ae11409586f837994/64bea70b83b8a6d5be1c5ab3_dKam-p-1600.jpg 1600w, https://assets.website-files.com/5837424ae11409586f837994/64bea70b83b8a6d5be1c5ab3_dKam.jpg 2000w" 
                            sizes="90vw" 
                            alt
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 80 }}
                            transition={{ duration: 0.55 }}
                        />
                        <motion.img
                            ref={ref4}
                            src="https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam.jpg" 
                            loading="lazy" 
                            srcset="https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam-p-500.jpeg 500w, https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam-p-800.jpeg 800w, https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam.jpg 1001w" 
                            sizes="(max-width: 1112px) 90vw, 1001px" 
                            alt
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 80 }}
                            transition={{ duration: 0.55 }}
                        />
                        <motion.img
                            ref={ref5}
                            src="https://assets.website-files.com/5837424ae11409586f837994/64bea81886bd9a873e0d6cd7_ffKam.jpg" 
                            alt
                            sizes="90vw" 
                            id="w-node-_4669fb84-43d3-407d-351a-333dc453fdb1-1bf5e5de" 
                            loading="lazy" 
                            srcset="https://assets.website-files.com/5837424ae11409586f837994/64bea81886bd9a873e0d6cd7_ffKam-p-500.jpg 500w, https://assets.website-files.com/5837424ae11409586f837994/64bea81886bd9a873e0d6cd7_ffKam-p-800.jpg 800w, https://assets.website-files.com/5837424ae11409586f837994/64bea81886bd9a873e0d6cd7_ffKam-p-1080.jpg 1080w, https://assets.website-files.com/5837424ae11409586f837994/64bea81886bd9a873e0d6cd7_ffKam-p-1600.jpg 1600w, https://assets.website-files.com/5837424ae11409586f837994/64bea81886bd9a873e0d6cd7_ffKam.jpg 2000w"
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 80 }}
                            transition={{ duration: 0.55 }}
                        />
                    </div>
                    <motion.div
                        ref={ref6}
                        className="container__800 m-auto logo"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="recent-work__logos-title">Designs commonly featured by</div>
                        <div className="recent-work__logos-flex">
                            <img src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba463b27cf60b2c9a7554_dribbble-logo.svg" loading="lazy" alt className="recent-work__logo dribbble" />
                            <img src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba4634c5ff90b59c1abdf_lapa-logo.svg" loading="lazy" alt className="recent-work__logo" />
                            <img src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba46388adf7d226b3bd2e_awwwards-seeklogo.com.svg" loading="lazy" alt className="recent-work__logo awwwards" />
                            <img src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba4639aae7e3a14b5f282_product-hunt-logo-horizontal-black.svg" loading="lazy" alt className="recent-work__logo ph" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </RecentWorkStyle>
    );
}

export default RecentWork;
