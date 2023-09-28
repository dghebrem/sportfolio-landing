import React from 'react';
import styled from 'styled-components';

const FAQStyle = styled.div`
background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png),linear-gradient(#fff,#fff);
background-position: 0 0,0 0;
background-size: auto,auto;
padding-bottom: 100px;
position: relative;
padding: 100px 5%;
overflow: visible;

.container {
    z-index: 2;
    max-width: 1240px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
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

.faq__list-wrapper {
    max-width: 800px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
}

.faq__row {
    text-align: left;
    cursor: pointer;
    border-bottom: 1px solid #000;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
    padding-bottom: 20px;
    display: flex;
}

.faq__title {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
}

.faq__answer {
    font-size: 17px;
    line-height: 26px;
}

.faq__arrow {
    width: 16px;
    margin-left: 60px;
}
img {
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
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

    .faq__arrow {
        margin-left: 40px;
    }
}
`;

const Faq = () => {
    return (
        <FAQStyle>
            <div className="container">
                <h2 data-w-id="68473092-de01-5c15-12ef-7d075beb4576">FAQs</h2>
                <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937c6" className="faq__list-wrapper">
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937c7" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">Why wouldn't I just hire a full-time designer?</div>
                            <div className="faq__answer">Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. <br/> <br/> With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="5cd69e36-ecfd-3be9-3a25-5792a826acd6" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">Is there a limit to how many requests I&nbsp;can have?</div>
                            <div className="faq__answer">Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937ce" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">How fast will I receive my designs?</div>
                            <div className="faq__answer">On average, most requests are completed in just two days or less. However, more complex requests can take longer.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937d5" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">Who are the designers?</div>
                            <div className="faq__answer">You might be surprised to hear this, but Designjoy is actually an agency of one. This means you'll work directly with me, founder of Designjoy. However, power-ups requests such as animations or custom illustrations are provided by partner designers.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937dc" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">How does the pause feature work?</div>
                            <div className="faq__answer">We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.<br/> <br/> Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="1a81008d-0f15-30c3-8f4a-f33513fea544" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">What programs do you design in?</div>
                            <div className="faq__answer">Most requests are designed using Figma.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937e3" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">How do I request designs?</div>
                            <div className="faq__answer">Designjoy offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937ea" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">What if I don't like the design?</div>
                            <div className="faq__answer">No worries! We'll continue to revise the design until you're 100% satisfied.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937f1" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">What if I&nbsp;only have a single request?</div>
                            <div className="faq__answer">That's fine. You can pause your subscription when finished and return &nbsp;when you have additional design needs. There's no need to let the remainder of your subscription go to waste.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937f8" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">Are there any refunds if I don't like the service?</div>
                            <div className="faq__answer">Due to the high quality nature of the work, there will be no refunds issued.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                </div>
            </div>
        </FAQStyle>
    );
}

export default Faq;
