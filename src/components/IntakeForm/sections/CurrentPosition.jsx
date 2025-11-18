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

  input,
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
    min-height: 140px;
    resize: vertical;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    cursor: pointer;

    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .helper-text {
    margin-top: 8px;
    font-size: 13px;
    color: var(--color-gray-500);
  }

  @media (max-width: 767px) {
    .form-row {
      grid-template-columns: 1fr;
    }
  }
`;

const CurrentPosition = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...data, [field]: value });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Tell us about your current or most recent coaching position. This is the most important section
          for demonstrating your current capabilities and recent achievements.
        </p>
      </div>

      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={data.isCurrentlyEmployed || false}
          onChange={(e) => handleChange('isCurrentlyEmployed', e.target.checked)}
        />
        <span>I am currently employed as a coach</span>
      </label>

      <div className="form-group">
        <label htmlFor="currentTitle">
          Current/Most Recent Job Title <span className="required">*</span>
        </label>
        <input
          id="currentTitle"
          type="text"
          value={data.currentTitle || ''}
          onChange={(e) => handleChange('currentTitle', e.target.value)}
          placeholder="Head Football Coach"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="currentOrganization">
          School/Organization <span className="required">*</span>
        </label>
        <input
          id="currentOrganization"
          type="text"
          value={data.currentOrganization || ''}
          onChange={(e) => handleChange('currentOrganization', e.target.value)}
          placeholder="Lincoln High School"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="currentLocation">
          Location <span className="required">*</span>
        </label>
        <input
          id="currentLocation"
          type="text"
          value={data.currentLocation || ''}
          onChange={(e) => handleChange('currentLocation', e.target.value)}
          placeholder="Austin, TX"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="startDate">
            Start Date <span className="required">*</span>
          </label>
          <input
            id="startDate"
            type="date"
            value={data.startDate || ''}
            onChange={(e) => handleChange('startDate', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">
            End Date {!data.isCurrentlyEmployed && <span className="required">*</span>}
          </label>
          <input
            id="endDate"
            type="date"
            value={data.endDate || ''}
            onChange={(e) => handleChange('endDate', e.target.value)}
            disabled={data.isCurrentlyEmployed}
            required={!data.isCurrentlyEmployed}
          />
          {data.isCurrentlyEmployed && (
            <div className="helper-text">Currently employed - end date not required</div>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="teamLevel">
          Team/Program Level
        </label>
        <input
          id="teamLevel"
          type="text"
          value={data.teamLevel || ''}
          onChange={(e) => handleChange('teamLevel', e.target.value)}
          placeholder="Varsity, 5A Division I, NCAA Division II, etc."
        />
      </div>

      <div className="form-group">
        <label htmlFor="responsibilitiesOverview">
          Key Responsibilities & Duties <span className="required">*</span>
        </label>
        <textarea
          id="responsibilitiesOverview"
          value={data.responsibilitiesOverview || ''}
          onChange={(e) => handleChange('responsibilitiesOverview', e.target.value)}
          placeholder="Describe your primary responsibilities, team size, budget oversight, recruiting duties, practice planning, game preparation, staff management, etc."
          required
        />
        <div className="helper-text">
          💡 Be specific and quantify where possible (e.g., "Managed team of 65 athletes and 8 assistant coaches")
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="keyAccomplishments">
          Notable Accomplishments in This Role <span className="required">*</span>
        </label>
        <textarea
          id="keyAccomplishments"
          value={data.keyAccomplishments || ''}
          onChange={(e) => handleChange('keyAccomplishments', e.target.value)}
          placeholder="Championships, win-loss records, player development achievements, program improvements, recruiting successes, academic achievements, awards received, etc."
          required
        />
        <div className="helper-text">
          💡 Use numbers and metrics: "Improved program GPA from 2.8 to 3.4" or "Led team to first playoff appearance in 12 years"
        </div>
      </div>
    </FormSection>
  );
};

export default CurrentPosition;
