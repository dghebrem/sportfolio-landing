import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const PerksOneStyled = styled.div`
position: relative;
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

.container__800 {
    max-width: 800px;
}

.m-auto {
    max-width: 800px;
    text-align: center;
}

.hero {
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

.never {
    background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61425085fefcfd2c00b1be93_Vector.svg);
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: contain;
}

.sub-para-24 {
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 24px;
    line-height: 36px;
}

.max-6700 {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.w-layout-grid {
    position: relative;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.feature-quote__grid {
    grid-column-gap: 60px;
    grid-row-gap: 60px;
    grid-template-rows: auto;
    margin-top: 100px;
}

.feature-quote__quote-block {
    text-align: left;
    letter-spacing: .5px;
    background-color: #fff;
    background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png);
    background-position: 0 0;
    background-size: auto;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px 40px;
    font-family: Grifter,sans-serif;
    font-size: 33px;
    font-weight: 200;
    line-height: 40px;
    display: flex;
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

.author-wrapper {
    align-items: center;
    margin-top: 20px;
    display: flex;
}

.author-avatar {
    width: 40px;
    height: 40px;
    background-color: #000;
    background-image: url(https://assets.website-files.com/5837424ae11409586f837994/6126a045ae4708114a9f6320_5fb3e6aa7b258c2dfe0928dc.jpeg);
    background-position: 90%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin-right: 12px;
}

b, strong {
    font-weight: 700;
}

.feature-quote__quote-author {
    margin-top: 0;
    font-family: Plusjakartasans,sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
}

.feature-quote__feature-block {
    padding-right: 40px;
}

.feature-quote__feature-ind-block {
    text-align: left;
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 30px;
}

.feature-quote__feature-title {
    letter-spacing: .5px;
    font-family: Grifter,sans-serif;
    font-weight: 700;
}

div {
    display: block;
}

.m-b-10 {
    margin-bottom: 10px;
}

.feature-quote__description {
    max-width: 490px;
    font-size: 17px;
    line-height: 24px;
}

.last-child {
    margin-bottom: 0;
}

@media (max-width: 991px) {
    .hero {
        max-width: 540px;
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

    .feature-quote__grid {
        grid-template-columns: 1fr;
    }

    .feature-quote__quote-block {
        padding-top: 60px;
        padding-bottom: 60px;
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

    .sub-para-24 {
        margin-top: 20px;
    }

    .feature-quote__grid {
        margin-top: 60px;
    }

    .feature-quote__quote-block {
        text-align: center;
        align-items: center;
        padding: 40px 30px;
        font-size: 30px;
        line-height: 34px;
    }

    .author-wrapper {
        display: block;
    }

    .author-avatar {
        margin-bottom: 12px;
        margin-left: auto;
        margin-right: auto;
    }

    .text-span {
        display: block;
    }
}
`;

const PerksOne = () => {
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
        <PerksOneStyled>
            <div className="container">
                <motion.div
                    ref={ref1}
                    className="container__800 m-auto hero"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 80 }}
                    transition={{ duration: 0.55 }}
                >
                    <h2 className="max-600">It’s “you’ll <span className="never">never</span> go back” better</h2>
                    <p className="sub-para-24 max-6700">Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast that it will blow your mind.</p>
                </motion.div>
                <div className="w-layout-grid feature-quote__grid">
                    <motion.div
                        ref={ref2}
                        className="feature-quote__quote-block"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    >
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg" loading="lazy" alt="" className="m-b-30" />
                        <div>Design is everything, and these guys have nailed it.</div>
                        <div className="author-wrapper">
                            <div className="author-avatar"></div>
                            <div className="feature-quote__quote-author">Kevin O'Leary, <span className="text-span">🦈 <strong>Shark Tank</strong></span></div>
                        </div>
                    </motion.div>
                    <div className="feature-quote__feature-block">
                        <motion.div
                            ref={ref3}
                            className="feature-quote__feature-ind-block"
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 80 }}
                            transition={{ duration: 0.55 }}
                        >
                            <div className="feature-quote__feature-title m-b-10">Totally async</div>
                            <div className="feature-quote__description">Don't like meetings?&nbsp;We don't either; so much so that we've outlawed them completely.</div>
                        </motion.div>
                        <motion.div
                            ref={ref4}
                            className="feature-quote__feature-ind-block"
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 80 }}
                            transition={{ duration: 0.55 }}
                        >
                            <div className="feature-quote__feature-title m-b-10">Manage with Trello</div>
                            <div className="feature-quote__description">Manage your design board using Trello. View active, queued and completed tasks with ease.</div>
                        </motion.div>
                        <motion.div
                            ref={ref5}
                            className="feature-quote__feature-ind-block last-child"
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 80 }}
                            transition={{ duration: 0.55 }}
                        >
                            <div className="feature-quote__feature-title m-b-10">Invite unlimited team members</div>
                            <div className="feature-quote__description">Invite your entire team, so anyone can submit requests and track their progress.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PerksOneStyled>
    );
}

export default PerksOne;
