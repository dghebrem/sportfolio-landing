import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CheckCircle } from './svg/CoachingIcons';

const PricingStyle = styled.div`
  background-color: var(--color-gray-50);
  padding: 100px 5%;
  position: relative;

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
    font-size: 24px;
    line-height: 36px;
    color: var(--color-gray-600);
    margin: 0;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 60px;
  }

  .pricing-card {
    background: white;
    border-radius: 24px;
    padding: 50px 40px;
    position: relative;
    border: 3px solid transparent;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    &.popular {
      transform: scale(1.05);
      border-color: var(--color-gold);
      box-shadow: 0 8px 16px rgba(251, 191, 36, 0.2);

      &:hover {
        transform: scale(1.05) translateY(-8px);
      }
    }

    &.varsity {
      border-color: var(--color-green);
    }

    &.elite {
      border-color: var(--color-navy);
    }
  }

  .popular-badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-gold);
    color: var(--color-navy);
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .tier-header {
    margin-bottom: 30px;
  }

  .tier-name {
    font-family: Grifter, sans-serif;
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 8px 0;
  }

  .tier-name.varsity { color: var(--color-green); }
  .tier-name.championship { color: var(--color-gold); }
  .tier-name.elite { color: var(--color-navy); }

  .tier-tagline {
    font-size: 14px;
    color: var(--color-gray-600);
    margin: 0;
  }

  .price-section {
    margin-bottom: 30px;
  }

  .price {
    font-family: Grifter, sans-serif;
    font-size: 52px;
    font-weight: 700;
    color: var(--color-navy);
    line-height: 1;
    margin: 0;
  }

  .price-currency {
    font-size: 32px;
  }

  .price-period {
    font-size: 16px;
    color: var(--color-gray-600);
    margin-left: 8px;
  }

  .description {
    font-size: 15px;
    color: var(--color-gray-600);
    margin: 12px 0 0 0;
    line-height: 1.6;
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 40px 0;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
    font-size: 15px;
    color: var(--color-gray-600);
  }

  .feature-icon {
    margin-right: 12px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .cta-button {
    width: 100%;
    padding: 20px;
    background: var(--color-navy);
    color: white;
    border: none;
    border-radius: 12px;
    font-family: Grifter, sans-serif;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    display: block;
    text-align: center;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    &.gold {
      background: var(--color-gold);
      color: var(--color-navy);
    }
  }

  @media (max-width: 991px) {
    .pricing-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .pricing-card {
      &.popular {
        transform: scale(1);
      }
    }

    h2 {
      font-size: 42px;
      line-height: 50px;
    }
  }

  @media (max-width: 767px) {
    padding: 80px 5%;

    h2 {
      font-size: 36px;
      line-height: 44px;
    }

    .subtitle {
      font-size: 18px;
      line-height: 28px;
    }

    .pricing-card {
      padding: 40px 30px;
    }
  }
`;

const PricingCoaching = () => {
  const pricingTiers = [
    {
      name: 'Varsity Level',
      tagline: 'For rising coaches',
      price: 149,
      period: 'one-time',
      description: 'Perfect for entry-level and high school positions',
      features: [
        'Professional 1-2 page resume',
        'ATS-optimized formatting',
        'Standard coaching template',
        '1 round of revisions',
        'PDF delivery',
        '5-day turnaround',
        'Email support',
      ],
      cta: 'Start Varsity',
      popular: false,
      className: 'varsity',
      ctaClass: '',
    },
    {
      name: 'Championship Level',
      tagline: 'Most popular choice',
      price: 249,
      period: 'one-time',
      description: 'For competitive programs and college-level coaches',
      features: [
        'Everything in Varsity Level',
        'Cover letter template',
        'LinkedIn profile optimization guide',
        '2 rounds of revisions',
        'PDF + editable Word file',
        '3-day turnaround',
        'Reference list formatting',
        'Priority email support',
      ],
      cta: 'Go Championship',
      popular: true,
      className: 'championship',
      ctaClass: 'gold',
    },
    {
      name: 'Elite Performance',
      tagline: 'For top-tier positions',
      price: 399,
      period: 'one-time',
      description: 'Professional coaches, D1 programs, Athletic Directors',
      features: [
        'Everything in Championship Level',
        '30-minute strategy consultation',
        'Coaching philosophy statement',
        'Professional bio (100 words)',
        'Unlimited revisions',
        '24-hour rush delivery available',
        'One-page quick reference version',
        '30-day post-delivery support',
        'Phone + email support',
      ],
      cta: 'Elite Package',
      popular: false,
      className: 'elite',
      ctaClass: '',
    },
  ];

  return (
    <PricingStyle id="packages">
      <div className="container">
        <div className="header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Plans For Your Future
          </motion.h2>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Simple pricing. Championship results. Choose what works for you.
          </motion.p>
        </div>

        <div className="pricing-grid">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`pricing-card ${tier.className} ${tier.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {tier.popular && <div className="popular-badge">MOST POPULAR</div>}

              <div className="tier-header">
                <h3 className={`tier-name ${tier.className}`}>{tier.name}</h3>
                <p className="tier-tagline">{tier.tagline}</p>
              </div>

              <div className="price-section">
                <div className="price">
                  <span className="price-currency">$</span>
                  {tier.price}
                  <span className="price-period">{tier.period}</span>
                </div>
                <p className="description">{tier.description}</p>
              </div>

              <ul className="features-list">
                {tier.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <span className="feature-icon">
                      <CheckCircle size={20} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="/order" className={`cta-button ${tier.ctaClass}`}>
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </PricingStyle>
  );
};

export default PricingCoaching;
