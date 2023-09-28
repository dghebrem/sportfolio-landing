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

.image-29 {
    z-index: 2;
    width: 230px;
    max-width: none;
    position: absolute;
    top: -110%;
    bottom: auto;
    left: auto;
    right: 0%;
}

.image-30 {
    width: 180px;
    max-width: none;
    position: absolute;
    top: -68%;
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

@media (max-width: 991px) {
    .image-29 {
        width: 170px;
        top: -50%;
    }

    .image-30 {
        width: 130px;
        top: -52%;
    }
}

@media (max-width: 767px) {
    .image-29 {
        width: 140px;
    }

    .image-30 {
        width: 100px;
        top: -29%;
    }
}
`;

const DividingSectionOne = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const inView1 = useInView(ref1);
    const inView2 = useInView(ref2);
    const inView3 = useInView(ref3);

    return (
        <DividingSectionStyle>
            <div className="dividing-section_half white">
                <motion.img
                    ref={ref1}
                    src="https://assets.website-files.com/5837424ae11409586f837994/6119d8b53723f635d94596f7_Group%2046.svg" 
                    loading="lazy" 
                    alt 
                    className="image-29"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 80 }}
                    transition={{ duration: 0.75 }}
                />
                <motion.img
                    ref={ref2}
                    src="https://assets.website-files.com/5837424ae11409586f837994/6119d8eeae8fa3209c98f7c4_2.svg" 
                    loading="lazy" 
                    alt 
                    className="image-30"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -80 }}
                    transition={{ duration: 0.75 }}
                />
            </div>
            <div class="dividing-section_half gray"></div>
            <motion.img
                ref={ref3}
                src="https://assets.website-files.com/5837424ae11409586f837994/6119d83a539ea14de7db7bac_Group%2022.svg" 
                loading="lazy" 
                alt 
                className="divider"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : -80 }}
                transition={{ duration: 0.55 }}
            />
        </DividingSectionStyle>
    );
}

export default DividingSectionOne;
