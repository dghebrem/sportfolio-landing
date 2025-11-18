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
    min-height: 140px;
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

  .tip-box {
    background: #EFF6FF;
    border-left: 4px solid var(--color-blue);
    padding: 16px 20px;
    border-radius: 8px;
    margin-top: 30px;
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

const NotableAthletes = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...data, [field]: value });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Highlighting athletes you've coached who went on to achieve success demonstrates your ability
          to develop talent and prepare athletes for the next level.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="collegeAthletes">
          Athletes Who Competed at College Level
        </label>
        <textarea
          id="collegeAthletes"
          value={data.collegeAthletes || ''}
          onChange={(e) => handleChange('collegeAthletes', e.target.value)}
          placeholder="List athletes and their college destinations (e.g., 'John Smith - University of Texas, Sarah Johnson - Stanford University')"
        />
        <div className="helper-text">
          💡 Include scholarship recipients if applicable
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="professionalAthletes">
          Athletes Who Competed Professionally
        </label>
        <textarea
          id="professionalAthletes"
          value={data.professionalAthletes || ''}
          onChange={(e) => handleChange('professionalAthletes', e.target.value)}
          placeholder="List athletes who competed professionally (NFL, NBA, MLB, etc.)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="allConference">
          All-Conference, All-State, All-American Athletes
        </label>
        <textarea
          id="allConference"
          value={data.allConference || ''}
          onChange={(e) => handleChange('allConference', e.target.value)}
          placeholder="Notable individual awards and recognitions earned by athletes you've coached"
        />
      </div>

      <div className="form-group">
        <label htmlFor="academicAthletes">
          Academic All-Stars & Scholar Athletes
        </label>
        <textarea
          id="academicAthletes"
          value={data.academicAthletes || ''}
          onChange={(e) => handleChange('academicAthletes', e.target.value)}
          placeholder="Athletes who earned academic honors (Academic All-State, National Honor Society, etc.)"
        />
      </div>

      <div className="tip-box">
        <div className="tip-title">Privacy Note</div>
        <p className="tip-text">
          You may use initials or list numbers without names if preferred (e.g., "15 athletes signed
          Division I scholarships" or "3 athletes drafted professionally"). Be mindful of student privacy.
        </p>
      </div>
    </FormSection>
  );
};

export default NotableAthletes;
