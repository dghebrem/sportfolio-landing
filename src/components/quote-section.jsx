import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Whistle, Trophy } from './svg/CoachingIcons';

const QuoteStyle = styled.div`
  background-color: var(--color-gray-50);
  padding: 150px 5% 150px;
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .whistle-wrapper {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.8;
  }

  .trophy-wrapper {
    position: absolute;
    right: 5%;
    bottom: 10%;
    opacity: 0.8;
  }

  blockquote {
    font-size: 36px;
    line-height: 1.5;
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 40px 0;
    font-family: Grifter, sans-serif;
    position: relative;
  }

  .highlight {
    position: relative;
    display: inline-block;
  }

  .highlight::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 100%;
    height: 12px;
    background-color: var(--color-gold);
    opacity: 0.3;
    z-index: -1;
  }

  cite {
    font-size: 18px;
    color: var(--color-gray-600);
    font-style: normal;
    font-weight: 500;
  }

  .author-name {
    font-weight: 700;
    color: var(--color-navy);
  }

  @media (max-width: 991px) {
    padding: 100px 5%;

    blockquote {
      font-size: 28px;
    }

    .whistle-wrapper,
    .trophy-wrapper {
      display: none;
    }
  }

  @media (max-width: 767px) {
    padding: 80px 5%;

    blockquote {
      font-size: 24px;
    }

    cite {
      font-size: 16px;
    }
  }
`;

const QuoteSection = () => {
  return (
    <QuoteStyle>
      {/* Animated Whistle */}
      <motion.div
        className="whistle-wrapper"
        initial={{ opacity: 0, x: -100, rotate: -45 }}
        whileInView={{ opacity: 0.8, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: 'backOut' }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ y: [-15, 15] }}
          transition={{ duration: 2.5, repeat: Infinity, yoyo: true, ease: 'easeInOut' }}
        >
          <Whistle size={100} color="var(--color-orange)" />
        </motion.div>
      </motion.div>

      {/* Quote Content */}
      <div className="container">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          "The difference between ordinary and extraordinary is that{' '}
          <span className="highlight">little extra</span>."
        </motion.blockquote>
        <motion.cite
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="author-name">— Jimmy Johnson</span>, 2x NFL Champion, Hall of Fame Coach
        </motion.cite>
      </div>

      {/* Animated Trophy */}
      <motion.div
        className="trophy-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Trophy size={80} color="var(--color-green)" />
      </motion.div>
    </QuoteStyle>
  );
};

export default QuoteSection;
