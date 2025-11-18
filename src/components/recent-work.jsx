import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const RecentWorkStyle = styled.div`
padding: 150px 5% 100px;
overflow: visible;
background-image: url(https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png),linear-gradient(#e1eaf4,#e1eaf4);
background-position: 0 0,0 0;
background-size: auto,auto;
padding-top: 60px;

.container {
    z-index: 2;
    max-width: 1240px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.recent-work__title-block {
    display: block;
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

.sub-para-24 {
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 24px;
    line-height: 36px;
}

.button__group {
    display: inline-block;
}

.recent-work {
    margin-top: 40px;
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

.button:hover {
    transform: translateY(-6px);
    box-shadow: 8px 8px rgba(0,0,0,.2);
}

.hero {
    padding-left: 60px;
    padding-right: 60px;
}

.w-layout-grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.latest-projects__grid {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-top: 60px;
    margin-bottom: 60px;
}

img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
}

#w-node-_4669fb84-43d3-407d-351a-333dc453fdb1-1bf5e5de, #w-node-a476bea0-4d4e-9005-ee25-f88a19146459-1bf5e5de {
    grid-area: span 1/span 1/span 1/span 1;
}

.container__800 {
    max-width: 800px;
}

.m-auto {
    margin-left: auto;
    margin-right: auto;
}

.logo {
    margin-top: 80px;
}

.recent-work__logos-title {
    letter-spacing: .5px;
    margin-bottom: 10px;
    font-family: Grifter,sans-serif;
    font-size: 17px;
    font-weight: 700;
}

.filter-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 40px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 12px 24px;
    border: 2px solid var(--color-gray-300);
    background: white;
    color: var(--color-navy);
    font-family: Grifter, sans-serif;
    font-size: 15px;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: var(--color-gold);
        color: var(--color-gold);
    }

    &.active {
        background: var(--color-gold);
        border-color: var(--color-gold);
        color: var(--color-navy);
    }
}

.portfolio-stats {
    max-width: 800px;
    margin: 60px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    text-align: center;
}

.stat-item {
    padding: 20px;
}

.stat-number {
    font-family: Grifter, sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: var(--color-gold);
    line-height: 1;
    margin-bottom: 10px;
}

.stat-label {
    font-size: 16px;
    color: var(--color-gray-600);
    font-weight: 600;
}

@media (max-width: 991px) {
    .portfolio-stats {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}

@media (max-width: 767px) {
    overflow: hidden;

    .container {
        max-width: 1240px;
        min-width: 0;
    }

    .portfolio-stats {
        margin: 40px auto;
    }
}

@media (max-width: 479px) {
    overflow: hidden;

    .latest-projects__grid {
        grid-template-columns: 1fr;
    }

    .filter-btn {
        padding: 10px 18px;
        font-size: 14px;
    }
}
`;

const portfolioItems = [
    { id: 1, category: 'Football', level: 'College', image: 'https://assets.website-files.com/5837424ae11409586f837994/64bea7745eabdc84545d0c6e_dfdfdfKam.jpg', title: 'Head Football Coach - Division I' },
    { id: 2, category: 'Basketball', level: 'High School', image: 'https://assets.website-files.com/5837424ae11409586f837994/64bea70b83b8a6d5be1c5ab3_dKam.jpg', title: 'Varsity Basketball Coach' },
    { id: 3, category: 'Baseball', level: 'College', image: 'https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam.jpg', title: 'Assistant Baseball Coach - Division II' },
    { id: 4, category: 'Track & Field', level: 'High School', image: 'https://assets.website-files.com/5837424ae11409586f837994/64bea81886bd9a873e0d6cd7_ffKam.jpg', title: 'Head Track & Field Coach' },
];

const RecentWork = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const inView1 = useInView(ref1);
    const inView2 = useInView(ref2);
    const inView3 = useInView(ref3);
    const inView4 = useInView(ref4);
    const inView5 = useInView(ref5);
    const inView6 = useInView(ref6);

    const filteredItems = activeFilter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter || item.level === activeFilter);

    return (
        <RecentWorkStyle>
            <div id="portfolio" className="section gray">
                <div className="container">
                    <motion.div
                        ref={ref1}
                        className="recent-work__title-block"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    >
                        <h2>Resume Portfolio</h2>
                        <p className="sub-para-24">Real resumes that helped coaches land their dream positions.</p>
                    </motion.div>

                    <div className="filter-buttons">
                        <button
                            className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('All')}
                        >
                            All Sports
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'Football' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('Football')}
                        >
                            Football
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'Basketball' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('Basketball')}
                        >
                            Basketball
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'Baseball' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('Baseball')}
                        >
                            Baseball
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'High School' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('High School')}
                        >
                            High School
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'College' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('College')}
                        >
                            College
                        </button>
                    </div>

                    <div className="w-layout-grid latest-projects__grid">
                        {filteredItems.map((item, index) => (
                            <motion.img
                                key={item.id}
                                ref={index === 0 ? ref2 : index === 1 ? ref3 : index === 2 ? ref4 : ref5}
                                src={item.image}
                                loading="lazy"
                                alt={item.title}
                                initial={{ opacity: 0, y: 80 }}
                                animate={{
                                    opacity: index === 0 ? (inView2 ? 1 : 0) :
                                             index === 1 ? (inView3 ? 1 : 0) :
                                             index === 2 ? (inView4 ? 1 : 0) :
                                             (inView5 ? 1 : 0),
                                    y: index === 0 ? (inView2 ? 0 : 80) :
                                       index === 1 ? (inView3 ? 0 : 80) :
                                       index === 2 ? (inView4 ? 0 : 80) :
                                       (inView5 ? 0 : 80)
                                }}
                                transition={{ duration: 0.55 }}
                            />
                        ))}
                    </div>

                    <motion.div
                        ref={ref6}
                        className="portfolio-stats"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 80 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="stat-item">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Coaches Placed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">92%</div>
                            <div className="stat-label">Interview Rate</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">3-5</div>
                            <div className="stat-label">Days Delivery</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </RecentWorkStyle>
    );
}

export default RecentWork;
