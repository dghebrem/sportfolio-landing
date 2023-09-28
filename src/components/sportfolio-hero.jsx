import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';


const HeroStyle = styled.div`
position: relative;
padding-top: 200px;
padding-bottom: 40px;
overflow: hidden;
background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png),linear-gradient(#fbe8de,#fbe8de);
background-position: 0 0,0 0;
background-size: auto,auto;
padding: 200px 5% 40px;

.container {
    z-index: 2;
    max-width: 1240px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
}

.container-800 {
    max-width: 800px;
}

.m-auto {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.hero {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

h1 {
    font-size: 80px;
    line-height: 80px;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Grifter,sans-serif;
    font-weight: 200;
}

.sub-para-24 {
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.button_group {
    margin-top: 40px;
    display: inline-block;
}

.button {
    display: flex;
    max-width: 100%;
    color: #fff;
    text-align: center;
    letter-spacing: .5px;
    background-color: #000;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 24px 60px;
    cursor: pointer;
    font-family: Grifter,sans-serif;
    font-size: 17px;
    font-weight: 700;
    text-decoration: none;
    transition: all .2s;
    box-shadow: 6px 6px rgba(0,0,0,.2);
}

.button:hover {
    transform: translateY(-6px);
    box-shadow: 8px 8px rgba(0,0,0,.2);
}

.guarantee {
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    font-size: 13px;
    display: flex;
}

.guarantee_heart {
    margin-left: 4px;
    margin-right: 2px;
}

img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
    overflow-clip-margin: content-box;
    overflow: clip;
}

.image-43 {
    width: 16vw;
    max-width: 250px;
    position: absolute;
    top: 13%;
    bottom: 0%;
    left: auto;
    right: 0%;
}

.image-44 {
    width: 16vw;
    max-width: 200px;
    position: absolute;
    top: 15%;
    bottom: auto;
    left: 0%;
    right: auto;
}

@media (max-width: 991px) {
    overflow: hidden;

    .image-43 {
        width: 30vw;
        max-width: 24vw;
        top: auto;
        bottom: 37%;
        left: auto;
        right: 0%;
    }

    .image-44 {
        width: 25vw;
        max-width: 25vw;
    }

    .hero {
        max-width: 540px;
    }

    h1  {
        font-size: 80px;
        line-height: 80px;
    }
}

@media (max-width: 767px) {
    overflow: hidden;

    .container {
        max-width: 1240px;
        min-width: 0;
    }

    .image-43 {
        bottom: 28%;
        right: -6%;
    }

    .image-44 {
        width: 20vw;
        max-width: 20vw;
        top: 5%;
        left: -5%;
    }

    .hero {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    h1  {
        font-size: 70px;
        line-height: 70px;
    }
}
`;

const SportfolioHero = () => {
    return (
        <HeroStyle>
            <div className="container">
                <motion.div 
                    className="container-800 m-auto hero"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                >
                    <h1>Unlock a picture perfect resume</h1>
                    <p className="sub-para-24">Coaching portfolio subscriptions to advance your career.</p>
                    <div className="button_group">
                        <a className="button">
                            <div>
                                See plans
                            </div>
                        </a>
                    </div>
                    <div className="guarantee">
                        <div>Designs you'll</div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/61195da63e9b07d94bbaa046_heart.svg" loading="lazy" alt className="guarantee_heart" />
                        <div>, guaranteed</div>
                    </div>
                </motion.div>
            </div>
            <motion.img 
                src="https://assets.website-files.com/5837424ae11409586f837994/61195ed506c73c67adaf0a3d_Group%2044.svg" 
                alt 
                loading="lazy" 
                className="image-43"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
            />
            <motion.img 
                src="https://assets.website-files.com/5837424ae11409586f837994/61195ef16ada8678daf3f267_Group%2045.svg" 
                alt 
                loading="lazy" 
                className="image-44"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
            />
        </HeroStyle>
    );
}

export default SportfolioHero;

