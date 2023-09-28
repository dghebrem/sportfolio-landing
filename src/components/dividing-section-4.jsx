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

@media (max-width: 479px) {
    height: 80px;
}
`;

const DividingSectionFour = () => {
    const ref1 = useRef(null);
    const inView1 = useInView(ref1);

    return (
        <DividingSectionStyle>
                <div class="dividing-section__half gray"></div>
                <div class="dividing-section__half white"></div>
                <motion.img
                    ref={ref1}
                    src="https://assets.website-files.com/5837424ae11409586f837994/611a98b21d362bb696f14734_Frame%2020.svg" 
                    loading="lazy" 
                    data-w-id="de2cda64-d33b-f25f-69b3-890f5d7e47ca" 
                    alt 
                    class="divider"
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : -80 }}
                    transition={{ duration: 0.55 }}
                />
        </DividingSectionStyle>
    );
}

export default DividingSectionFour;
