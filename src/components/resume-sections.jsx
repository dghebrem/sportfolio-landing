import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const ResumeSectionsStyle = styled.div`
    background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png),linear-gradient(#fff,#fff);
    background-position: 0 0,0 0;
    background-size: auto,auto;
    padding-top: 60px;
    padding-bottom: 100px;
    position: relative;
    padding: 150px 5% 100px;
    overflow: visible;

    .container {
        z-index: 2;
        max-width: 1240px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        position: relative;
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

    .scope__wrapper {
        text-align: left;
        border: 6px solid #fbe8de;
        margin-top: 100px;
        padding: 50px;
        font-size: 17px;
        font-weight: 700;
        position: relative;
    }

    .scope__grid {
        grid-column-gap: 30px;
        grid-row-gap: 0px;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .w-layout-grid {
        grid-auto-columns: 1fr;
        display: grid;
    }

    #w-node-a476bea0-4d4e-9005-ee25-f88a19146459-1bf5e5de {
        grid-area: span 1/span 1/span 1/span 1;
    }

    .scope__item {
        border-bottom: 6px solid #fbe8de;
        margin-bottom: 30px;
        padding-bottom: 16px;
    }

    div {
        display: block;
    }

    img {
        border: 0;
        max-width: 100%;
        vertical-align: middle;
        display: inline-block;
    }

    .image-39 {
        width: 100px;
        position: absolute;
        top: -7%;
        bottom: auto;
        left: -5%;
        right: auto;
    }

    @media (max-width: 767px) {
        overflow: hidden;

        .container {
            max-width: 1240px;
            min-width: 0;
        }

        h2 {
            font-size: 50px;
            line-height: 60px;
        }

        .scope__grid {
            grid-template-columns: 1fr;
        }

        .image-39 {
            top: -4%;
        }
    }

    @media (max-width: 479px) {
        overflow: hidden;

        .container {
            max-width: 1240px;
            min-width: auto;
            flex: 0 auto;
        }

        h2 {
            font-size: 42px;
            line-height: 44px;
        }

        .scope__wrapper {
            padding: 20px;
        }

        .image-39 {
            top: -4%;
            bottom: auto;
            left: auto;
            right: -5%;
        }
    }

`;

const ResumeSections = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const inView1 = useInView(ref1);
    const inView2 = useInView(ref2);
    const inView3 = useInView(ref3);
    return (
        <ResumeSectionsStyle>
            <div class="container">
                <motion.h2
                    ref={ref1}
                    data-w-id="92b7ca35-434c-0477-5ac5-31882ca1bd53"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 80 }}
                    transition={{ duration: 0.55 }}
                >
                    Apps, websites, logos &amp; more.
                </motion.h2>
                <motion.div 
                    ref={ref2}
                    data-w-id="ae4f00de-7ef9-d071-0cef-1cbc4e98a622" 
                    class="scope__wrapper"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 80 }}
                    transition={{ duration: 0.55 }}
                >
                    <div class="w-layout-grid scope__grid">
                        <div id="w-node-a476bea0-4d4e-9005-ee25-f88a19146459-1bf5e5de" class="scope__col">
                            <div class="scope__item">
                                <div>Websites</div>
                            </div>
                            <div class="scope__item">
                                <div>Mobile apps</div>
                            </div>
                            <div class="scope__item">
                                <div>Logos &amp; branding</div>
                            </div>
                            <div class="scope__item">
                                <div>Design systems</div>
                            </div>
                            <div class="scope__item">
                                <div>SAAS</div>
                            </div>
                            <div class="scope__item">
                                <div>Wireframes</div>
                            </div>
                            <div class="scope__item">
                                <div>Stationery</div>
                            </div>
                            <div class="scope__item">
                                <div>Pitch decks</div>
                            </div>
                        </div>
                        <div class="scope__col">
                            <div class="scope__item">
                                <div>Slide decks</div>
                            </div>
                            <div class="scope__item">
                                <div>Direct mail</div>
                            </div>
                            <div class="scope__item">
                                <div>Infographics</div>
                            </div>
                            <div class="scope__item">
                                <div>Brochures</div>
                            </div>
                            <div class="scope__item">
                                <div>Signage</div>
                            </div>
                            <div class="scope__item">
                                <div>Brand guides</div>
                            </div>
                            <div class="scope__item">
                                <div>Social media graphics</div>
                            </div>
                            <div class="scope__item">
                                <div>Billboards</div>
                            </div>
                        </div>
                        <div class="scope__col">
                            <div class="scope__item">
                                <div>Trade show banners</div>
                            </div>
                            <div class="scope__item">
                                <div>Email graphics</div>
                            </div>
                            <div class="scope__item">
                                <div>Resumes</div>
                            </div>
                            <div class="scope__item">
                                <div>Business cards</div>
                            </div>
                            <div class="scope__item">
                                <div>Packaging</div>
                            </div>
                            <div class="scope__item">
                                <div>Blog graphics</div>
                            </div>
                            <div class="scope__item">
                                <div>Digital ads</div>
                            </div>
                            <div class="scope__item">
                                <div>Icons</div>
                            </div>
                        </div>
                    </div>
                    <motion.img
                        ref={ref3} 
                        src="https://assets.website-files.com/5837424ae11409586f837994/6297eb5855799436cb408920_23.svg" 
                        loading="lazy" 
                        data-w-id="b4935d71-c7ee-7651-36e0-1b9e11fa7d82" 
                        alt="" 
                        class="image-39"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -80 }}
                        transition={{ duration: 0.55 }}
                    />
                </motion.div>
            </div>
        </ResumeSectionsStyle>
    );
}

export default ResumeSections;
