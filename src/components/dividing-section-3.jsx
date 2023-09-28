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

.gray {
    background-color: #e1eaf4;
    background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png);
    background-position: 0 0;
    background-size: auto;
}

.image-37 {
    width: 150px;
    position: absolute;
    top: 0%;
    bottom: auto;
    left: auto;
    right: 0%;
}

img {
    border: 0;
    vertical-align: middle;
    display: inline-block;
}

.divider {
    position: absolute;
}

@media (max-width: 479px) {
    height: 80px; 

    .image-37 {
        display: none;
        top: -54%;
    }
}

@media (max-width: 767px) {
    .image-37 {
        width: 100px;
    }
}
`;

const DividingSectionThree = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const inView1 = useInView(ref1);
    return (
        <DividingSectionStyle>
            <div class="dividing-section__half white"></div>
            <div class="dividing-section__half gray"></div>
            <motion.img
                ref={ref1}
                src="https://assets.website-files.com/5837424ae11409586f837994/6119d83a539ea14de7db7bac_Group%2022.svg" 
                loading="lazy" 
                alt
                class="divider"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : -80 }}
                transition={{ duration: 0.55 }}
            />
            <motion.img
                ref={ref2}
                src="https://assets.website-files.com/5837424ae11409586f837994/6297eb6a4aa99cf45a3a1068_26.svg" 
                loading="lazy"  
                alt
                class="image-37"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 80 }}
                transition={{ duration: 0.55 }}
            />
        </DividingSectionStyle>
    );
}

export default DividingSectionThree;
