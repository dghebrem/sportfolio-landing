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
                            <div className="faq__title">How long does the resume creation process take?</div>
                            <div className="faq__answer">Most resumes are delivered within 3-5 business days for our standard packages. Championship Level clients receive their first draft in 3 days, and Elite Performance clients can opt for 24-hour rush delivery.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="5cd69e36-ecfd-3be9-3a25-5792a826acd6" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">What if I need revisions?</div>
                            <div className="faq__answer">All packages include revisions! Varsity Level includes 1 round, Championship Level includes 2 rounds, and Elite Performance includes unlimited revisions. We work with you until you're 100% satisfied.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937ce" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">Do you work with coaches from all sports?</div>
                            <div className="faq__answer">Absolutely! We've created resumes for football, basketball, baseball, soccer, lacrosse, volleyball, track & field, swimming, wrestling, and many other sports coaches. Our expertise spans all levels from high school to professional.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937d5" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">Are your resumes compatible with ATS (Applicant Tracking Systems)?</div>
                            <div className="faq__answer">Yes! All our resumes are ATS-optimized, meaning they're formatted to pass through automated screening systems used by schools and athletic departments while still looking visually impressive to human reviewers.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937dc" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">What information do I need to provide?</div>
                            <div className="faq__answer">You'll complete our comprehensive intake form covering your coaching experience, education, certifications, achievements, and coaching philosophy. The form is designed to be thorough but easy to complete, typically taking 30-45 minutes.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="1a81008d-0f15-30c3-8f4a-f33513fea544" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">Can you help with cover letters and LinkedIn profiles?</div>
                            <div className="faq__answer">Yes! Our Championship and Elite packages include cover letter templates and LinkedIn optimization. We can also provide interview coaching as an add-on service.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937e3" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">What if I'm not satisfied with the final product?</div>
                            <div className="faq__answer">Your satisfaction is our priority. If you're not happy with your resume after all included revisions, we offer a 100% money-back guarantee within 14 days of final delivery.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937ea" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">Do you provide examples or samples?</div>
                            <div className="faq__answer">Yes! Check out our Portfolio page to see anonymized samples of our work across different sports and coaching levels. You can also download a free template sample by contacting us.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937f1" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">Can I make changes to my resume after it's delivered?</div>
                            <div className="faq__answer">Absolutely! You'll receive your resume in both PDF (for submissions) and editable Word format (for future updates). We also offer annual update packages at a discounted rate.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                    <div data-w-id="c9b1f105-50eb-7aed-2e96-3ba9d79937f8" className="faq__row">
                        <div className="faq__left">
                            <div className="faq__title">What payment methods do you accept?</div>
                            <div className="faq__answer">We accept all major credit cards, debit cards, and PayPal. Payment is required upfront before we begin work on your resume.</div>
                        </div>
                        <img src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg" loading="lazy" alt="" className="faq__arrow" />
                    </div>
                </div>
            </div>
        </FAQStyle>
    );
}

export default Faq;
