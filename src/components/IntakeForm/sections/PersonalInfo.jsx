import React from 'react';
import styled from 'styled-components';

const FormSection = styled.div`
  .form-intro {
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-gray-600);
    margin-bottom: 40px;
  }

  .form-group {
    margin-bottom: 30px;
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-navy);
    margin-bottom: 8px;
  }

  .required {
    color: var(--color-orange);
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="url"] {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid var(--color-gray-200);
    border-radius: 10px;
    font-size: 15px;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: var(--color-gold);
      box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
    }
  }

  .input-prefix {
    display: flex;
    align-items: center;
  }

  .prefix {
    padding: 14px 16px;
    background: var(--color-gray-100);
    border: 2px solid var(--color-gray-200);
    border-right: none;
    border-radius: 10px 0 0 10px;
    color: var(--color-gray-600);
    font-size: 15px;
  }

  .input-prefix input {
    border-radius: 0 10px 10px 0;
  }

  .helper-text {
    margin-top: 8px;
    font-size: 13px;
    color: var(--color-gray-500);
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .tip-box {
    background: #EFF6FF;
    border-left: 4px solid var(--color-blue);
    padding: 16px 20px;
    border-radius: 8px;
    margin-top: 40px;
  }

  .tip-title {
    font-weight: 700;
    color: #1E40AF;
    margin: 0 0 8px 0;
    font-size: 14px;
  }

  .tip-text {
    margin: 0;
    font-size: 14px;
    color: #1E3A8A;
    line-height: 1.5;
  }
`;

const PersonalInfo = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...data, [field]: value });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Let's start with the basics. This information will appear at the top of your resume
          and help hiring committees reach you easily.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="fullName">
          Full Legal Name <span className="required">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={data.fullName || ''}
          onChange={(e) => handleChange('fullName', e.target.value)}
          placeholder="John Smith"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email Address <span className="required">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={data.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="john.smith@email.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">
          Phone Number <span className="required">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={data.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="(555) 123-4567"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="linkedin">
          LinkedIn Profile URL
          <span style={{ fontWeight: 400, marginLeft: 8, color: 'var(--color-gray-500)' }}>
            (Optional)
          </span>
        </label>
        <div className="input-prefix">
          <span className="prefix">linkedin.com/in/</span>
          <input
            id="linkedin"
            type="text"
            value={data.linkedin || ''}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="your-profile"
          />
        </div>
        <div className="helper-text">
          💡 Including your LinkedIn profile can boost your application
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="city">
          City, State <span className="required">*</span>
        </label>
        <input
          id="city"
          type="text"
          value={data.city || ''}
          onChange={(e) => handleChange('city', e.target.value)}
          placeholder="Austin, TX"
          required
        />
      </div>

      <div className="tip-box">
        <div className="tip-title">Pro tip</div>
        <p className="tip-text">
          Make sure your contact information is current. Hiring committees need to reach you
          easily for interview opportunities.
        </p>
      </div>
    </FormSection>
  );
};

export default PersonalInfo;
