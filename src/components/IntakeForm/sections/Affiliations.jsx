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

  textarea {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid var(--color-gray-200);
    border-radius: 10px;
    font-size: 15px;
    transition: all 0.2s;
    font-family: inherit;
    min-height: 120px;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: var(--color-gold);
      box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
    }
  }

  .helper-text {
    margin-top: 8px;
    font-size: 13px;
    color: var(--color-gray-500);
  }

  .examples-box {
    background: var(--color-gray-50);
    border-radius: 12px;
    padding: 20px;
    margin-top: 30px;
  }

  .examples-title {
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 12px 0;
    font-size: 14px;
  }

  .example-item {
    margin-bottom: 8px;
    font-size: 14px;
    color: var(--color-gray-700);
    padding-left: 20px;
    position: relative;

    &:before {
      content: "•";
      position: absolute;
      left: 8px;
      color: var(--color-gold);
      font-weight: 700;
    }
  }
`;

const Affiliations = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...data, [field]: value });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Professional affiliations and memberships demonstrate your commitment to the coaching profession
          and staying current with best practices.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="professionalOrganizations">
          Professional Organizations & Associations
        </label>
        <textarea
          id="professionalOrganizations"
          value={data.professionalOrganizations || ''}
          onChange={(e) => handleChange('professionalOrganizations', e.target.value)}
          placeholder="List professional coaching organizations you belong to (e.g., NFHS, AFCA, NCAA Coaches Association, etc.)"
        />
        <div className="helper-text">
          List each on a new line or separate with commas
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="communityInvolvement">
          Community Involvement & Service
        </label>
        <textarea
          id="communityInvolvement"
          value={data.communityInvolvement || ''}
          onChange={(e) => handleChange('communityInvolvement', e.target.value)}
          placeholder="Community programs, volunteer work, youth clinics, speaking engagements, etc."
        />
      </div>

      <div className="form-group">
        <label htmlFor="committees">
          Committees & Leadership Roles
        </label>
        <textarea
          id="committees"
          value={data.committees || ''}
          onChange={(e) => handleChange('committees', e.target.value)}
          placeholder="Athletic committees, conference committees, board positions, task forces, etc."
        />
      </div>

      <div className="examples-box">
        <div className="examples-title">Examples:</div>
        <div className="example-item">American Football Coaches Association (AFCA) - Member since 2015</div>
        <div className="example-item">Texas High School Coaches Association - District Representative</div>
        <div className="example-item">Youth Football League - Volunteer Coach & Clinic Coordinator</div>
        <div className="example-item">District Athletic Directors Committee - Member</div>
      </div>
    </FormSection>
  );
};

export default Affiliations;
