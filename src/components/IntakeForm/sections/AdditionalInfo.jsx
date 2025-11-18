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
`;

const AdditionalInfo = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...data, [field]: value });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Use this section to share any additional information that didn't fit elsewhere but is
          important for your resume. This is your chance to highlight unique qualifications or circumstances.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="specialSkills">
          Special Skills or Expertise
        </label>
        <textarea
          id="specialSkills"
          value={data.specialSkills || ''}
          onChange={(e) => handleChange('specialSkills', e.target.value)}
          placeholder="Bilingual abilities, technology skills, specialized training methods, recruiting expertise in specific regions, etc."
        />
      </div>

      <div className="form-group">
        <label htmlFor="volunteering">
          Additional Volunteer Work or Community Service
        </label>
        <textarea
          id="volunteering"
          value={data.volunteering || ''}
          onChange={(e) => handleChange('volunteering', e.target.value)}
          placeholder="Significant volunteer coaching, community programs, charitable work, etc."
        />
      </div>

      <div className="form-group">
        <label htmlFor="militaryService">
          Military Service
        </label>
        <textarea
          id="militaryService"
          value={data.militaryService || ''}
          onChange={(e) => handleChange('militaryService', e.target.value)}
          placeholder="Branch, rank, years of service, relevant experience"
        />
      </div>

      <div className="form-group">
        <label htmlFor="gapsOrTransitions">
          Career Gaps or Transitions to Explain
        </label>
        <textarea
          id="gapsOrTransitions"
          value={data.gapsOrTransitions || ''}
          onChange={(e) => handleChange('gapsOrTransitions', e.target.value)}
          placeholder="If there are gaps in your employment or you're transitioning from another field, briefly explain here"
        />
        <div className="helper-text">
          This won't appear on your resume, but helps us craft the best narrative
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="anythingElse">
          Anything Else We Should Know?
        </label>
        <textarea
          id="anythingElse"
          value={data.anythingElse || ''}
          onChange={(e) => handleChange('anythingElse', e.target.value)}
          placeholder="Any other information, unique circumstances, or special requests for your resume"
        />
      </div>
    </FormSection>
  );
};

export default AdditionalInfo;
