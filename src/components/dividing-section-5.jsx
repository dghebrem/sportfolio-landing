import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const DividingSectionStyle = styled.div`
z-index: 1;
height: 120px;
flex-direction: column;
justify-content: center;
align-items: center;
display: flex;
position: relative;

div {
    display: block;
}

.dividing-section__half {
    width: 100%;
    height: 50%;
}

.white {
    background-color: #fff;
    background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png);
    background-position: 0 0;
    background-size: auto;
}

.tan {
    background-color: #fbe8de;
    background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png);
    background-position: 0 0;
    background-size: auto;
}

.image-40 {
    position: absolute;
    top: 0%;
    bottom: auto;
    left: auto;
    right: 0%;
}

.image-41 {
    position: absolute;
    top: auto;
    bottom: -84%;
    left: 0%;
    right: auto;
}

img {
    border: 0;
    vertical-align: middle;
    display: inline-block;
}

.divider {
    position: absolute;
}

@media (max-width: 991px) {
    .image-41 {
        width: 110px;
        bottom: -70%;
    }
}

@media (max-width: 767px) {
    height: 80px;

    .image-40 {
        width: 120px;
    }

    .image-41 {
        width: 90px;
        bottom: 0%;
    }
}

@media (max-width: 479px) {
    height: 80px;

    .image-40 {
        width: 100px;
    }
}
`;

const DividingSectionFive = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const inView1 = useInView(ref1);
    const inView2 = useInView(ref2);
    const inView3 = useInView(ref3);
    return (
        <DividingSectionStyle>
                <div class="dividing-section__half white"></div>
                <div class="dividing-section__half tan"></div>
            <motion.img
                ref={ref1} 
                src="https://assets.website-files.com/5837424ae11409586f837994/6119d6836ada862d90f89116_Divider.svg" 
                loading="lazy" 
                alt 
                class="divider"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : -80 }}
                transition={{ duration: 0.55 }}
            />
            <motion.img
                ref={ref2} 
                src="https://assets.website-files.com/5837424ae11409586f837994/6297eb2700a23638c2e486ec_19.svg" 
                loading="lazy" 
                alt
                class="image-40"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 80 }}
                transition={{ duration: 0.75 }}
            />
            <motion.img
                ref={ref3} 
                src="https://assets.website-files.com/5837424ae11409586f837994/6297eb2738300c1fd0d4b4ff_43.svg" 
                loading="lazy" 
                alt 
                class="image-41"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -80 }}
                transition={{ duration: 0.75 }}
                />
        </DividingSectionStyle>
    );
}

export default DividingSectionFive;
