import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AddOnsStyle = styled.div`
  background: white;
  padding: 100px 5%;

  .container {
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
  }

  .header {
    text-align: center;
    margin-bottom: 60px;
  }

  h2 {
    font-family: Grifter, sans-serif;
    font-size: 50px;
    line-height: 60px;
    font-weight: 200;
    margin: 0 0 20px 0;
    color: var(--color-navy);
  }

  .subtitle {
    font-size: 20px;
    line-height: 32px;
    color: var(--color-gray-600);
    max-width: 600px;
    margin: 0 auto;
  }

  .addons-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 60px;
  }

  .addon-card {
    background: var(--color-gray-50);
    border-radius: 20px;
    padding: 40px 32px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      border-color: var(--color-gold);
    }
  }

  .addon-icon {
    font-size: 48px;
    margin-bottom: 20px;
    display: block;
  }

  .addon-name {
    font-family: Grifter, sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 12px 0;
  }

  .addon-price {
    font-family: Grifter, sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: var(--color-gold);
    margin: 0 0 16px 0;
  }

  .addon-description {
    font-size: 15px;
    line-height: 1.6;
    color: var(--color-gray-600);
    margin: 0;
  }

  @media (max-width: 991px) {
    .addons-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    h2 {
      font-size: 42px;
      line-height: 50px;
    }
  }

  @media (max-width: 767px) {
    padding: 80px 5%;

    .addons-grid {
      grid-template-columns: 1fr;
    }

    h2 {
      font-size: 36px;
      line-height: 44px;
    }

    .addon-card {
      padding: 32px 24px;
    }
  }
`;

const AddOns = () => {
  const addOns = [
    {
      icon: '⚡',
      name: 'Rush Delivery',
      price: 100,
      description: '24-48 hour turnaround instead of standard',
    },
    {
      icon: '🔄',
      name: 'Extra Revision Round',
      price: 50,
      description: 'Additional round beyond package limit',
    },
    {
      icon: '📄',
      name: 'Coaching Philosophy',
      price: 75,
      description: 'Professional philosophy statement document',
    },
    {
      icon: '🎯',
      name: 'Interview Coaching',
      price: 150,
      description: '60-minute interview preparation session',
    },
    {
      icon: '💼',
      name: 'LinkedIn Optimization',
      price: 99,
      description: 'Complete profile makeover and optimization',
    },
    {
      icon: '🔄',
      name: 'Annual Update',
      price: 99,
      description: 'Refresh your resume next season',
    },
  ];

  return (
    <AddOnsStyle>
      <div className="container">
        <div className="header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Level Up With Add-Ons
          </motion.h2>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Customize your package with these powerful extras
          </motion.p>
        </div>

        <div className="addons-grid">
          {addOns.map((addon, index) => (
            <motion.div
              key={index}
              className="addon-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="addon-icon">{addon.icon}</span>
              <h3 className="addon-name">{addon.name}</h3>
              <div className="addon-price">+${addon.price}</div>
              <p className="addon-description">{addon.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AddOnsStyle>
  );
};

export default AddOns;
