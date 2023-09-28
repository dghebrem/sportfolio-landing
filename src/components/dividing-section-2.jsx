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

.dividing-section_half {
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

.image-33 {
    width: 190px;
    max-width: none;
    position: absolute;
    top: -89%;
    bottom: auto;
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

@media (max-width: 767px) {
    .image-33 {
        width: 150px;
        max-width: none;
        top: -57%;
    }
} 

@media (max-width: 479px) {
    height: 80px;

    .image-33 {
        width: 110px;
    }
}
`;

const DividingSectionTwo = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const inView1 = useInView(ref1);
    const inView2 = useInView(ref2);
    
    return (
        <DividingSectionStyle>
            <div class="dividing-section_half gray"></div>
            <div class="dividing-section_half white"></div>
            <motion.img
                ref={ref1}
                src="https://assets.website-files.com/5837424ae11409586f837994/611a98b21d362bb696f14734_Frame%2020.svg" 
                loading="lazy" 
                alt 
                className="divider"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : -80 }}
                transition={{ duration: 0.75 }}
            />
            <motion.img
                ref={ref2}
                src="https://assets.website-files.com/5837424ae11409586f837994/6297eb5836e6730ddf0e6962_Group%2047.svg" 
                loading="lazy" 
                alt 
                className="image-33"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -80 }}
                transition={{ duration: 0.55 }}
            />
        </DividingSectionStyle>
    );
}

export default DividingSectionTwo;
