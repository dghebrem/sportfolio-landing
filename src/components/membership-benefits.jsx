import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Trophy, Clipboard, CheckCircle, Star, Stopwatch, Megaphone } from './svg/CoachingIcons';

const MembershipBenefitsStyle = styled.div`
padding: 150px 5% 100px;
overflow: visible;
background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png),linear-gradient(#fff,#fff);
background-position: 0 0,0 0;
background-size: auto,auto;
padding-top: 60px;
padding-bottom: 100px;
position: relative;

.container {
    z-index: 2;
    max-width: 1240px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.benefits__title-block {
    position: static;
    top: 60px;
}

.benefits__splash-wrapper {
    max-width: none;
    position: static;
    top: 30vh;
}

.container__800 {
    max-width: 800px;
}

.m-auto {
    margin-left: auto;
    margin-right: auto;
}

img {
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
}

.benefits__icon {
    margin-bottom: 30px;
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

.max-6700 {
    margin-left: auto;
    margin-right: auto;
}

.benefits {
    max-width: 610px;
}

.button__group {
    margin-top: 40px;
    display: inline-block;
}

.w-inline-block {
    max-width: 100%;
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

.large {
    padding-left: 50px;
    padding-right: 50px;
}

div {
    display: block;
}

.w-layout-grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.benefits__grid {
    grid-column-gap: 60px;
    grid-row-gap: 60px;
    text-align: left;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 60px;
    position: relative;
}

#w-node-f8aa1968-ab07-d0f3-28a2-161e8436b6f5-1bf5e5de {
    justify-self: center;
}

.benefits__ind-block {
    text-align: center;
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 30px;
}

.benefits__icon-block {
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

svg:not(:root) {
    overflow-clip-margin: content-box;
    overflow: hidden;
}

:not(svg) {
    transform-origin: 0px 0px;
}

.benefits__title {
    letter-spacing: .5px;
    margin-bottom: 10px;
    font-family: Grifter,sans-serif;
    font-weight: 700;
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

    .sub-para-24 {
        margin-top: 20px;
    }

    .button__group {
        margin-top: 30px;
    }
}

@media (max-width: 767px) {
    overflow: hidden;

    .container {
        max-width: 1240px;
        min-width: 0;
    }

    .benefits__title-block, .benefits__splash-wrapper {
        position: static;
    }

    h2 {
        font-size: 50px;
        line-height: 60px;
    }

    .benefits__grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 991px) {
    .button {
        padding-left: 40px;
        padding-right: 40px;
        display: flex;
    }
}
`;

const MembershipBenefits = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);

    const inView1 = useInView(ref1);
    const inView2 = useInView(ref2);
    const inView3 = useInView(ref3);
    const inView4 = useInView(ref4);
    const inView5 = useInView(ref5);
    const inView6 = useInView(ref6);
    const inView7 = useInView(ref7);

    return (
        <MembershipBenefitsStyle>
            <div className="container">
                <div className="benefits__title-block">
                    <div className="benefits__splash-wrapper">
                        <motion.div
                            ref={ref1}
                            className="container__800 m-auto"
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 80 }}
                            transition={{ duration: 0.55 }}
                        >
                            <div className="benefits__icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Trophy size={80} color="var(--color-gold)" />
                            </div>
                            <h2>Every Play Matters.<br/>Every Section Counts.</h2>
                            <p className="sub-para-24 max-6700 benefits">
                                We don't just fill in templates. Every resume is strategically crafted to
                                showcase your wins, your philosophy, and your championship potential. No cookie-cutter
                                formats. No generic buzzwords. Just authentic storytelling that makes hiring committees take notice.
                            </p>
                            <div className="button__group">
                                <a href="#pricing-3" className="button large w-inline-block"><div>See packages</div></a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="w-layout-grid benefits__grid">
                    <motion.div
                        ref={ref2}
                        className="benefits__ind-block"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="benefits__icon-block">
                            <Clipboard size={70} color="var(--color-navy)" />
                        </div>
                        <div className="benefits__title">Comprehensive Intake</div>
                        <div className="benefits__description">Our 17-section form captures every achievement, philosophy, and milestone that matters.</div>
                    </motion.div>
                    <motion.div
                        ref={ref3}
                        className="benefits__ind-block"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="benefits__icon-block">
                            <Stopwatch size={70} color="var(--color-navy)" />
                        </div>
                        <div className="benefits__title">Fast Turnaround</div>
                        <div className="benefits__description">Most resumes delivered within 3-5 business days. Rush options available for tight deadlines.</div>
                    </motion.div>
                    <motion.div
                        ref={ref4}
                        className="benefits__ind-block"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="benefits__icon-block">
                            <CheckCircle size={70} color="var(--color-navy)" />
                        </div>
                        <div className="benefits__title">ATS-Optimized</div>
                        <div className="benefits__description">Formatted to pass Applicant Tracking Systems while still looking visually impressive.</div>
                    </motion.div>
                    <motion.div
                        ref={ref5}
                        className="benefits__ind-block"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="benefits__icon-block">
                            <Star size={70} color="var(--color-navy)" />
                        </div>
                        <div className="benefits__title">Industry Expertise</div>
                        <div className="benefits__description">Written by professionals who understand athletic departments, recruiting, and coaching culture.</div>
                    </motion.div>
                    <motion.div
                        ref={ref6}
                        className="benefits__ind-block"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="benefits__icon-block">
                            <Megaphone size={70} color="var(--color-navy)" />
                        </div>
                        <div className="benefits__title">Revision-Friendly</div>
                        <div className="benefits__description">Multiple rounds of revisions included. We work until you're completely satisfied with your resume.</div>
                    </motion.div>
                    <motion.div
                        ref={ref7}
                        className="benefits__ind-block"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: inView7 ? 1 : 0, y: inView7 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="benefits__icon-block">
                            <Trophy size={70} color="var(--color-navy)" />
                        </div>
                        <div className="benefits__title">100% Yours</div>
                        <div className="benefits__description">Your resume is custom-built for your career. No templates. No recycled content. All original.</div>
                    </motion.div>
                </div>
            </div>
        </MembershipBenefitsStyle>
    );
}

export default MembershipBenefits;
