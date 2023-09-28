import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const ResumeBuildingProcessStyle = styled.div`
    padding: 150px 5% 100px;
    overflow: visible;
    padding-bottom: 100px;
    position: relative;
    background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png),linear-gradient(#fff,#fff);
    background-position: 0 0,0 0;
    background-size: auto,auto;
    padding-top: 100px;

    .container {
        z-index: 2;
        max-width: 1240px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }

    .container_800 {
        max-width: 800px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
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

    .max-600 {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .sub-para-24 {
        margin-top: 20px;
        margin-bottom: 0;
        font-size: 24px;
        line-height: 36px;
    }

    .grid {
        grid-auto-columns: 1fr;
        display: grid;
        max-width: 1100px;
        grid-column-gap: 60px;
        grid-row-gap: 30px;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 80px;
        margin-left: auto;
        margin-right: auto;
        font-size: 20px;
        line-height: 26px;
    }

    .div-block-19 {
        max-width: 320px;
    }

    .process_icon-block {
        width: 100px;
        height: 100px;
        background-image: none;
        background-repeat: repeat;
        background-size: auto;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
    }

    .grid {
        max-width: 1100px;
        grid-column-gap: 60px;
        grid-row-gap: 30px;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 80px;
        margin-left: auto;
        margin-right: auto;
        font-size: 20px;
        line-height: 26px;
    }

    .quote {
        z-index: 1;
        letter-spacing: .5px;
        background-color: #fbe8de;
        background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png);
        background-position: 0 0;
        background-size: auto;
        margin-top: 80px;
        padding: 60px;
        font-family: Grifter,sans-serif;
        font-size: 33px;
        font-weight: 200;
        line-height: 40px;
        position: relative;
    }

    .quote_wrapper {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    img {
        border: 0;
        max-width: 100%;
        vertical-align: middle;
        display: inline-block;
    }

    .m-b-30 {
        margin-bottom: 30px;
    }

    .m-t-30 {
        margin-top: 30px;
    }

    .webflow {
        width: 110px;
        max-width: none;
    }

    .image-31 {
        position: absolute;
        top: auto;
        bottom: 10%;
        left: -5%;
        right: auto;
    }

    .image-32 {
        position: absolute;
        top: -4%;
        bottom: auto;
        left: auto;
        right: -4%;
    }

    @media (max-width: 991px) {
        .hero {
            max-width: 540px;
        }

        .image-31 {
            width: 130px;
            max-width: none;
        }

        .image-32 {
            width: 150px;
            max-width: none;
        }
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

        .grid {
            grid-row-gap: 60px;
            grid-template-columns: 1fr;
            margin-top: 40px;
        }

        .div-block-19 {
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
        }

        ._1 {
            max-width: none;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media (max-width: 479px) {
        .section {
            overflow: hidden;
        }

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

        .grid {
            margin-top: 40px;
        }

        .quote {
            letter-spacing: .5px;
            padding: 40px 30px;
            font-size: 30px;
            line-height: 34px;
        }
        
        .image-31 {
            width: 60px;
            bottom: 16%;
        }

        .image-32 {
            width: 120px;
        }
    }
`;

const ResumeBuildingProcess = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

   const inView1 = useInView(ref1);
   const inView2 = useInView(ref2);
   const inView3 = useInView(ref3);
   const inView4 = useInView(ref4);
   const inView5 = useInView(ref5);

    return (
        <ResumeBuildingProcessStyle>
            <div className="container">
                <motion.div 
                    ref={ref1}
                    className="container_800"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 80 }}
                    transition={{ duration: 0.55 }}
                >
                    <h2 className="max-600">We didn't reinvent the wheel, just design</h2>
                    <p className="sub-para-24 max-600">Design as you know it is out the door. Design as you want it just arrived.</p>
                </motion.div>
                <motion.div
                    ref={ref2}
                    className="grid"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 80 }}
                    transition={{ duration: 0.55 }}
                >
                    <div className="div-block-19">
                        <div>Subscribe to a plan & request as many designs as you'd like.</div>
                    </div>
                    <div className="div-block-19">
                        <div>Receive your design within a few business days on average, Monday to Friday.</div>
                    </div>
                    <div className="div-block-19">
                        <div>We'll revise the designs until you're 100% satisfied.</div>
                    </div>
                </motion.div>
                <motion.div 
                    ref={ref3}
                    className="quote"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 80 }}
                    transition={{ duration: 0.55 }}
                >
                    <div className="quote_wrapper">
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg" alt="" loading="lazy" className="m-b-30" />
                        <div>Designjoy shows that they know the art of subtlety.</div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/6119d7e989cff23b39d11a86_webflow.svg" alt="" loading="lazy" className="m-t-30 webflow" />
                    </div>
                    <motion.img 
                        ref={ref4}
                        src="https://assets.website-files.com/5837424ae11409586f837994/6119d9897e15e38d7e0c8bea_52.svg" 
                        loading="lazy" 
                        alt="" 
                        className="image-31"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : -80 }}
                        transition={{ duration: 0.55 }}
                    />
                    <motion.img
                        ref={ref5}
                        src="https://assets.website-files.com/5837424ae11409586f837994/6297ebf6a202e770d1a0fd48_420.svg" 
                        loading="lazy"  
                        alt="" 
                        className="image-32"
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: inView5 ? 1 : 0, x: inView5 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    />
                </motion.div>
            </div>
        </ResumeBuildingProcessStyle>
    );
}

export default ResumeBuildingProcess;
