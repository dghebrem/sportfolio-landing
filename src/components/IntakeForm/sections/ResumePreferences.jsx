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

  select, textarea {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid var(--color-gray-200);
    border-radius: 10px;
    font-size: 15px;
    transition: all 0.2s;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: var(--color-gold);
      box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
  }

  .radio-item {
    display: flex;
    align-items: start;
    gap: 12px;
    padding: 16px;
    background: var(--color-gray-50);
    border: 2px solid var(--color-gray-200);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: var(--color-gold);
    }

    &.selected {
      border-color: var(--color-gold);
      background: rgba(251, 191, 36, 0.05);
    }

    input[type="radio"] {
      margin-top: 2px;
      cursor: pointer;
      width: 20px;
      height: 20px;
    }
  }

  .radio-content {
    flex: 1;
  }

  .radio-label {
    font-weight: 700;
    color: var(--color-navy);
    margin-bottom: 4px;
  }

  .radio-description {
    font-size: 13px;
    color: var(--color-gray-600);
  }

  .helper-text {
    margin-top: 8px;
    font-size: 13px;
    color: var(--color-gray-500);
  }
`;

const ResumePreferences = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...data, [field]: value });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Help us understand your preferences for the final resume design and format. These choices will
          guide how we structure and present your information.
        </p>
      </div>

      <div className="form-group">
        <label>Resume Length Preference</label>
        <div className="radio-group">
          <label className={`radio-item ${data.length === '1-page' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="length"
              value="1-page"
              checked={data.length === '1-page'}
              onChange={(e) => handleChange('length', e.target.value)}
            />
            <div className="radio-content">
              <div className="radio-label">1 Page</div>
              <div className="radio-description">
                Concise format, ideal for early-career coaches or specific applications
              </div>
            </div>
          </label>

          <label className={`radio-item ${data.length === '2-page' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="length"
              value="2-page"
              checked={data.length === '2-page'}
              onChange={(e) => handleChange('length', e.target.value)}
            />
            <div className="radio-content">
              <div className="radio-label">2 Pages (Recommended)</div>
              <div className="radio-description">
                Standard length for experienced coaches, allows for comprehensive detail
              </div>
            </div>
          </label>

          <label className={`radio-item ${data.length === 'flexible' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="length"
              value="flexible"
              checked={data.length === 'flexible'}
              onChange={(e) => handleChange('length', e.target.value)}
            />
            <div className="radio-content">
              <div className="radio-label">Let the Designer Decide</div>
              <div className="radio-description">
                We'll determine the best length based on your experience
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Design Style Preference</label>
        <div className="radio-group">
          <label className={`radio-item ${data.style === 'traditional' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="style"
              value="traditional"
              checked={data.style === 'traditional'}
              onChange={(e) => handleChange('style', e.target.value)}
            />
            <div className="radio-content">
              <div className="radio-label">Traditional/Conservative</div>
              <div className="radio-description">
                Classic black & white, minimal graphics, professional serif fonts
              </div>
            </div>
          </label>

          <label className={`radio-item ${data.style === 'modern' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="style"
              value="modern"
              checked={data.style === 'modern'}
              onChange={(e) => handleChange('style', e.target.value)}
            />
            <div className="radio-content">
              <div className="radio-label">Modern/Contemporary</div>
              <div className="radio-description">
                Clean design with strategic color accents, modern fonts, visual hierarchy
              </div>
            </div>
          </label>

          <label className={`radio-item ${data.style === 'athletic' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="style"
              value="athletic"
              checked={data.style === 'athletic'}
              onChange={(e) => handleChange('style', e.target.value)}
            />
            <div className="radio-content">
              <div className="radio-label">Athletic/Bold</div>
              <div className="radio-description">
                Dynamic layout with school colors, energetic design elements
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="colorPreferences">
          Color Preferences (Optional)
        </label>
        <textarea
          id="colorPreferences"
          value={data.colorPreferences || ''}
          onChange={(e) => handleChange('colorPreferences', e.target.value)}
          placeholder="Preferred colors, school colors, colors to avoid, etc."
        />
        <div className="helper-text">
          Examples: "Use navy blue and gold (school colors)" or "Professional, avoid bright colors"
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="specificRequests">
          Specific Design Requests or Requirements
        </label>
        <textarea
          id="specificRequests"
          value={data.specificRequests || ''}
          onChange={(e) => handleChange('specificRequests', e.target.value)}
          placeholder="Any specific elements you want included/excluded, inspiration from other resumes, formatting requirements, etc."
        />
      </div>
    </FormSection>
  );
};

export default ResumePreferences;
