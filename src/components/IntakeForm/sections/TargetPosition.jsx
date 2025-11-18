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
  select,
  textarea {
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
    min-height: 120px;
    resize: vertical;
  }

  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 12px;
  }

  .checkbox-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
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

const TargetPosition = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...data, [field]: value });
  };

  const handleCheckboxChange = (field, value) => {
    const currentValues = data[field] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    updateData({ ...data, [field]: newValues });
  };

  const sports = [
    'Football', 'Basketball', 'Baseball', 'Soccer', 'Volleyball',
    'Track & Field', 'Swimming', 'Wrestling', 'Lacrosse', 'Softball',
    'Golf', 'Tennis', 'Cross Country', 'Hockey', 'Other'
  ];

  const levels = [
    'Youth', 'Middle School', 'High School', 'Junior College',
    'NCAA Division I', 'NCAA Division II', 'NCAA Division III',
    'NAIA', 'Professional', 'Athletic Director'
  ];

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Tell us about your ideal position. This helps us tailor your resume to match the opportunities
          you're pursuing and highlight the most relevant experience.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="targetTitle">
          Desired Job Title <span className="required">*</span>
        </label>
        <input
          id="targetTitle"
          type="text"
          value={data.targetTitle || ''}
          onChange={(e) => handleChange('targetTitle', e.target.value)}
          placeholder="Head Football Coach, Assistant Basketball Coach, Athletic Director, etc."
          required
        />
        <div className="helper-text">
          💡 Be specific - this will be used to optimize your resume keywords
        </div>
      </div>

      <div className="form-group">
        <label>
          Sport(s) <span className="required">*</span>
        </label>
        <div className="checkbox-group">
          {sports.map(sport => (
            <label key={sport} className="checkbox-item">
              <input
                type="checkbox"
                checked={(data.sports || []).includes(sport)}
                onChange={() => handleCheckboxChange('sports', sport)}
              />
              <span>{sport}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>
          Target Level(s) <span className="required">*</span>
        </label>
        <div className="checkbox-group">
          {levels.map(level => (
            <label key={level} className="checkbox-item">
              <input
                type="checkbox"
                checked={(data.levels || []).includes(level)}
                onChange={() => handleCheckboxChange('levels', level)}
              />
              <span>{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="geographicPreference">
          Geographic Preference
        </label>
        <input
          id="geographicPreference"
          type="text"
          value={data.geographicPreference || ''}
          onChange={(e) => handleChange('geographicPreference', e.target.value)}
          placeholder="Texas, Southwest Region, Open to relocation, etc."
        />
      </div>

      <div className="form-group">
        <label htmlFor="salaryRange">
          Desired Salary Range (Optional)
        </label>
        <input
          id="salaryRange"
          type="text"
          value={data.salaryRange || ''}
          onChange={(e) => handleChange('salaryRange', e.target.value)}
          placeholder="$60,000 - $80,000"
        />
        <div className="helper-text">
          Note: This won't appear on your resume, but helps us understand your target market
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="additionalPreferences">
          Additional Preferences or Requirements
        </label>
        <textarea
          id="additionalPreferences"
          value={data.additionalPreferences || ''}
          onChange={(e) => handleChange('additionalPreferences', e.target.value)}
          placeholder="Public vs private school preference, facility requirements, program size, competition level, etc."
        />
      </div>

      <div className="tip-box">
        <div className="tip-title">Pro tip</div>
        <p className="tip-text">
          Being specific about your target position allows us to use industry-specific keywords that will
          help your resume pass through ATS systems and catch the attention of hiring committees.
        </p>
      </div>
    </FormSection>
  );
};

export default TargetPosition;
