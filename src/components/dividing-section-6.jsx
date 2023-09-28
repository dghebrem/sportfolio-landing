import React from 'react';
import styled from 'styled-components';

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

.tan {
    background-color: #fbe8de;
    background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png);
    background-position: 0 0;
    background-size: auto;
}

._2 {
    width: 240px;
    left: -8%;
}
.image-41 {
    position: absolute;
    top: auto;
    bottom: -84%;
    right: auto;
}

.image-40 {
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

@media (max-width: 991px) {
    .image-40._4 {
        width: 110px;
    }

    .image-41._2 {
        width: 170px;
    }

    .image-41 {
        width: 110px;
        bottom: -70%;
    }
}

@media (max-width: 767px) {
    .image-40._4 {
        width: 80px;
    }

    .image-40 {
        width: 120px;
    }

    .image-41._2 {
        width: 140px;
    }

    .image-41 {
        width: 90px;
        bottom: 0%;
    }
}

@media (max-width: 479px) {
    height: 80px;

    .image-40._4 {
        width: 60px;
    }

    .image-40 {
        width: 100px;
    }

    .image-41._2 {
        width: 70px;
    }
}
`;

const DividingSectionSix = () => {
    return (
        <DividingSectionStyle>
            <div className="dividing-section__half tan"></div>
            <div className="dividing-section__half white"></div>
            <img src="https://assets.website-files.com/5837424ae11409586f837994/6119d6836ada862d90f89116_Divider.svg" loading="lazy" data-w-id="d08448c0-14dd-e479-7e03-fa084921f5a6" alt="" className="divider" />
            <img src="https://assets.website-files.com/5837424ae11409586f837994/6297ec2ebcb979c203dd1714_60.svg" loading="lazy" data-w-id="d08448c0-14dd-e479-7e03-fa084921f5a7" alt="" className="image-40 _4" />
            <img src="https://assets.website-files.com/5837424ae11409586f837994/6297ed366f3e626f630528ee_61.svg" loading="lazy" data-w-id="d08448c0-14dd-e479-7e03-fa084921f5a8" alt="" className="image-41 _2" />
        </DividingSectionStyle>
    );
}

export default DividingSectionSix;
