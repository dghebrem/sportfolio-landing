import React from 'react';
import styled from 'styled-components';

const PricingStyle = styled.div`
    background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png),linear-gradient(#fbe8de,#fbe8de);
    background-position: 0 0,0 0;
    background-size: auto,auto;
    padding: 150px 5% 100px;
    overflow: visible;
    padding-top: 60px;

    .container {
        z-index: 2;
        max-width: 1240px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }

    a {
        text-decoration: none;
    }

    .container__800 {
        max-width: 800px;
    }

    .container__800.m-auto {
        margin-left: auto;
        margin-right: auto;
    }

    .hero {
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

    .pricing-header, .max-600 {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    p {
        margin-top: 0;
        margin-bottom: 10px;
    }

    .sub-para-24 {
        margin-top: 20px;
        margin-bottom: 0;
        font-size: 24px;
        line-height: 36px;
    }

    img {
        border: 0;
        max-width: 100%;
        vertical-align: middle;
        display: inline-block;
    }

    .pricing__squiggle {
        margin-top: 60px;
    }

    .w-layout-grid {
        grid-row-gap: 16px;
        grid-column-gap: 16px;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr;
        grid-auto-columns: 1fr;
        display: grid;
    }

    .pricing__grid {
        grid-column-gap: 2px;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 60px;
    }

    .pricing__col-top {
        min-height: 450px;
        text-align: left;
        background-color: #fff;
        background-image: url(https://assets.website-files.com/5837424…/61195e2…_noise.png);
        background-position: 0 0;
        background-size: auto;
        flex-direction: column;
        justify-content: space-between;
        padding: 60px 30px 30px;
        display: flex;
        position: relative;
    }

    .pricing__title {
        letter-spacing: .5px;
        font-family: Grifter,sans-serif;
        font-size: 24px;
        font-weight: 200;
        line-height: 30px;
    }

    .pricing__description {
        margin-top: 10px;
        font-size: 15px;
        line-height: 22px;
    }

    .pricing__col-top-bottom {
        text-align: center;
    }

    .pricing__amount {
        text-align: left;
        letter-spacing: .5px;
        margin-top: 30px;
        font-family: Grifter,sans-serif;
        font-size: 30px;
        font-weight: 200;
        line-height: 42px;
    }

    .pricing__not-included {
        opacity: .5;
        margin-top: 20px;
        font-size: 12px;
    }

    .m-t-0 {
        text-align: left;
        margin-top: 0;
    }

    .button__group {
        margin-top: 40px;
        display: inline-block;
    }

    .pricing {
        width: 100%;
    }

    .w-inline-block {
        max-width: 100%;
        display: inline-block;
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

    .pricing {
        padding-left: 30px;
        padding-right: 30px;
    }

    .book-call-wrapper {
        width: 100%;
        justify-content: center;
        display: flex;
    }

    ._2 {
        width: auto;
        color: #000;
        text-align: center;
        border: 1px #000;
        border-bottom-style: dotted;
        margin-top: 24px;
        margin-left: auto;
        margin-right: auto;
        font-weight: 700;
        display: inline-block;
    }

    .most-popular-tag {
        color: #fff;
        letter-spacing: 1px;
        background-color: #ea552b;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        padding: 6px 9px;
        font-size: 10px;
        font-weight: 700;
        display: flex;
        position: absolute;
        top: -3%;
        bottom: auto;
        left: 9%;
        right: auto;
        transform: rotate(-9deg);
    }

    .image-67 {
        width: 20px;
        position: absolute;
        top: -10%;
        bottom: auto;
        left: 22%;
        right: auto;
    }

    .pricing__right-col {
        background-image: url(chttps://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png),linear-gradient(#fff,#fff);
        background-position: 0 0,0 0;
        background-size: auto,auto;
        padding: 32px;
    }

    .pricing__right-col-top {
        text-align: left;
        border-bottom: 1px solid #000;
        padding-bottom: 40px;
    }

    .pricing__right-col-img {
        text-align: center;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .pricing__description {
        margin-top: 10px;
        font-size: 15px;
        line-height: 22px;
    }

    .pricing__right-col-top.bottom {
        border-bottom-style: none;
        margin-top: 40px;
        display: block;
    }

    .bottom {
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 100px;
        display: flex;
    }
    .pricing__right-col-top {
        text-align: left;
        border-bottom: 1px solid #000;
        padding-bottom: 40px;
    }

    .pricing__right-col-img {
        text-align: center;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .pricing__title {
        letter-spacing: .5px;
        font-family: Grifter,sans-serif;
        font-size: 24px;
        font-weight: 200;
        line-height: 30px;
    }

    .small {
        font-size: 20px;
        line-height: 24px;
    }

    .pricing__text-link {
        color: #000;
        margin-top: 20px;
        font-weight: 700;
        text-decoration: none;
        display: block;
    }

    .pricing__col-bottom {
        min-height: 350px;
        text-align: left;
        background-image: url(https://assets.website-files.com/5837424…/61195e2…_noise.png),linear-gradient(#fff,#fff);
        background-position: 0 0,0 0;
        background-size: auto,auto;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 2px;
        padding: 30px;
        display: block;
    }

    .pricing__included {
        font-weight: 700;
    }

    .pricing__list {
        margin-top: 20px;
        padding-left: 16px;
    }

    ul, ol {
        margin-top: 0;
        margin-bottom: 10px;
        padding-left: 40px;
    }

    .pricing__li {
        margin-bottom: 10px;
    }

    ::marker {
        unicode-bidi: isolate;
        font-variant-numeric: tabular-nums;
        text-transform: none;
        text-indent: 0px !important;
        text-align: start !important;
        text-align-last: start !important;
    }

    ul {
        list-style-type: disc;
    }

    #w-node-_579720a1-9250-87b7-64d3-78773a50fabb-1bf5e5de {
        grid-area: span 1/span 3/span 1/span 3;
    }
    
    .div-block-14 {
        color: #fff;
        text-align: center;
        background-color: #000;
        background-image: url(https://assets.website-files.com/5837424ae11409586f837994/611b2d3c1a84f270060c9ec1_Texture.png);
        background-position: 0 0;
        background-size: auto;
        border-bottom: 1px solid rgba(255,255,255,.18);
        justify-content: center;
        align-items: flex-start;
        padding: 50px;
        display: flex;
    }

    .grid-2 {
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 2px;
    }
    .w-layout-grid {
        grid-auto-columns: 1fr;
        display: grid;
    }

    .badge-pricing-secondary {
        color: #000;
        letter-spacing: .02em;
        text-transform: uppercase;
        background-color: #fdd900;
        border: 1px #b3bbe5;
        border-radius: 32px;
        margin-bottom: 24px;
        padding: 6px 14px;
        font-size: 10px;
        font-weight: 700;
        line-height: 16px;
        display: inline-block;
    }

    .power-ups {
        margin-bottom: 16px;
        font-size: 30px;
        line-height: 30px;
    }

    h2 {
        letter-spacing: .5px;
        margin-top: 0;
        font-family: Grifter,sans-serif;
        font-weight: 200;
    }

    .pricing__description._2 {
        margin-top: 6px;
    }

    .pricing__description {
        font-size: 15px;
        line-height: 22px;
    }

    .pricing__description._2 {
        color: white;
    }

    .power-ups.price {
        margin-top: 24px;
    }

    @media (max-width: 991px) {
        .container__800.m-auto.hero {
            max-width: 540px;
        }

        .pricing__grid {
            grid-template-columns: 1fr;
        }

        .pricing__col-top {
            min-height: 0;
            padding-bottom: 30px;
            padding-left: 30px;
            padding-right: 30px;
        }

        .pricing__col-top-bottom {
            text-align: left;
            margin-top: 0;
        }

        .pricing__not-included.m-t-0 {
            margin-bottom: 30px;
        }

        .button__group.pricing {
            width: auto;
            margin-top: 0;
        }

        .button.pricing {
            padding-left: 40px;
            padding-right: 40px;
        }

        .button {
            padding-left: 40px;
            padding-right: 40px;
            display: flex;
        }

        .book-call-wrapper._2 {
            display: inline-block;
        }

        .book-call-wrapper {
            justify-content: flex-start;
        }

        .most-popular-tag {
            left: 4%;
        }

        .image-67 {
            top: -13%;
            left: 8%;
        }

        .pricing__col-bottom {
            min-height: 0;
        }

        .pricing__col-top.normal {
            padding-top: 30px;
        }

        .pricing__col-top {
            min-height: 0;
            padding-bottom: 30px;
            padding-left: 30px;
            padding-right: 30px;
        }

        .pricing__amount {
            margin-bottom: 0;
        }

        .pricing__not-included.m-t-0 {
            margin-bottom: 30px;
        }

        .div-block-18 {
            text-align: left;
        }

        .pricing__col-bottom {
            min-height: 0;
        }

        .pricing__right-col {
            background-image: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0));
            background-position: 0 0;
            background-size: auto;
            margin-top: 0;
            padding-left: 0;
        }

        .pricing__right-col-top {
            text-align: center;
        }

        .pricing__right-col-img {
            margin-left: auto;
        }

        .pricing__right-col-top.bottom {
            flex-direction: column;
            display: block;
        }

        .bottom {
            display: block;
        }

        .grid-2 {
            grid-template-columns: 1fr;
        }

        #w-node-_579720a1-9250-87b7-64d3-78773a50fabb-1bf5e5de {
            grid-area: span 2/span 1/span 2/span 1;
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

        .pricing__amount {
            margin-top: 30px;
            margin-bottom: 0;
        }

        .button__group.pricing {
            width: 100%;
        }

        .book-call-wrapper {
            justify-content: center;
        }

        .pricing__right-col {
            padding-right: 0;
        }
    }

    @media (max-width: 479px) {
        overflow: hidden;
        padding-bottom: 60px;

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

        .pricing__amount {
            margin-top: 30px;
        }

        .button__group.pricing, .button.pricing {
            width: 100%;
        }

        .button__group {
            margin-top: 30px;
        }

        .pricing__right-col {
            margin-top: 0;
        }

        .pricing__right-col-top {
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
        }

        .pricing__right-col-top.bottom {
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
            padding-bottom: 0;
        }

        .div-block-14 {
            flex-direction: column;
            padding: 24px;
        }
    }
`;

const Pricing = () => {
    return (
        <PricingStyle>
            <div className="container">
                <div data-w-id="f768d994-700e-86d6-9f81-2b33264c2d49" className="container__800 m-auto hero">
                    <h2 className="pricing-header">Memberships levels</h2>
                    <p className="sub-para-24">Choose a plan that's right for you.</p>
                    <img src="https://assets.website-files.com/5837424ae11409586f837994/611abc817f5b796fe72d04e4_Group%2028.svg" loading="lazy" alt="" className="pricing__squiggle" />
                </div>
                <div id="pricinggrid" data-w-id="f768d994-700e-86d6-9f81-2b33264c2d4f" className="w-layout-grid pricing__grid">
                    <div className="pricing__col">
                        <div id="pricing-3" className="pricing__col-top">
                            <div className="pricing__col-top-top">
                                <div className="pricing__title">Standard</div>
                                <div className="pricing__description">One request at a time. Pause or cancel anytime.</div>
                            </div>
                            <div className="pricing__col-top-bottom">
                                <div className="pricing__amount">$4,995/m</div>
                                <div className="pricing__not-included m-t-0">Pause or cancel anytime</div>
                                <div className="button__group pricing">
                                    <a data-ms-membership="62558f15e13be400045542ac" href="https://buy.stripe.com/fZe28BaiLfOO99e146" className="button pricing w-inline-block">
                                        <div>Get started</div>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://calendly.com/designjoy/designjoy-intro-1" target="_blank" rel="noreferrer" className="book-call-wrapper _2">Book a call</a>
                                </div>
                            </div>
                            <div className="most-popular-tag">
                                <div>MOST&nbsp;POPULAR</div>
                            </div>
                            <img src="https://assets.website-files.com/5837424ae11409586f837994/611c2385076821ad95ae18bc_45.svg" loading="lazy" alt="" className="image-67" />
                        </div>
                        <div className="pricing__col-bottom">
                            <div className="pricing__col-bottom-bottom">
                                <div className="pricing__included">What's included:</div>
                                <ul className="pricing__list">
                                    <li className="pricing__li">
                                        <div>One request at a time</div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Average 48 hour delivery</div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Unlimited brands</div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Unlimited users</div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Unlimited stock photos via Shutterstock</div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Easy credit-card payments</div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Pause or cancel anytime</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pricing__col">
                        <div className="pricing__col-top normal">
                            <div className="pricing__col-top-top">
                                <div className="pricing__title">Pro</div>
                                <div className="pricing__description">Double the requests. Pause or cancel anytime.</div>
                            </div>
                            <div className="pricing__col-top-bottom">
                                <div className="pricing__amount">$7,995/m</div>
                                <div className="pricing__not-included m-t-0">Pause or cancel anytime</div>
                                <div className="button__group pricing">
                                    <a data-ms-membership="62678c0904c1df00043bf6ff" href="https://buy.stripe.com/00g3cF0Ib466bhm5kp" className="button w-inline-block">
                                        <div>Get started</div>
                                    </a>
                                </div>
                                <div className="book-call-wrapper"></div>
                                <div className="div-block-18">
                                    <a href="https://calendly.com/designjoy/designjoy-intro-1" target="_blank" rel="noreferrer" className="book-call-wrapper _2">Book a call</a>
                                </div>
                            </div>
                        </div>
                        <div className="pricing__col-bottom">
                            <div className="pricing__col-bottom-bottom">
                                <div className="pricing__included">What's included:</div>
                                <ul role="list" className="pricing__list">
                                    <li className="pricing__li">
                                        <div>
                                            <strong>Two requests at a time</strong>
                                        </div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Average 48 hour delivery</div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Unlimited brands</div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Unlimited users</div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Unlimited stock photos via Shutterstock</div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Easy credit-card payments</div>
                                    </li>
                                    <li className="pricing__li">
                                        <div>Pause or cancel anytime</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pricing__right-col">
                        <div className="pricing__right-col-top">
                            <img src="https://assets.website-files.com/5837424ae11409586f837994/611abc6c32fdaa097c267b19_dFrame.svg" loading="lazy" alt="" className="pricing__right-col-img" />
                            <div className="pricing__title small">Book a call</div>
                            <div className="pricing__description">Learn more about how DesignJoy works and how it can help you.</div>
                            <a href="https://calendly.com/designjoy/designjoy-intro-1" target="_blank" rel="noreferrer" className="pricing__text-link">Book a call</a>
                        </div>
                        <div className="pricing__right-col-top bottom">
                            <img src="https://assets.website-files.com/5837424ae11409586f837994/611abc6c5e7a2adf4b36ad2c_ddGroup.svg" loading="lazy" alt="" className="pricing__right-col-img" />
                            <div className="pricing__title small">Refer a friend &amp; earn</div>
                            <div className="pricing__description">Earn 5% monthly recurring commissions for each referral.</div>
                            <a href="https://designjoy.getrewardful.com/signup" target="_blank" rel="noreferrer" className="pricing__text-link">Join now</a>
                        </div>
                    </div>
                </div>
                <div className="w-layout-grid grid-2">
                    <div id="w-node-_579720a1-9250-87b7-64d3-78773a50fabb-1bf5e5de" className="div-block-14">
                        <div>
                            <div className="badge-pricing-secondary">
                                <div>ADD-ON</div>
                            </div>
                            <h2 className="power-ups">Webflow development</h2>
                            <div className="pricing__description _2">Get a better website faster with Webflow development. Requires a design subscription.</div>
                            <h2 className="power-ups price">$999/m</h2>
                        </div>
                    </div>
                </div>
            </div>
        </PricingStyle>
    );
}

export default Pricing;
