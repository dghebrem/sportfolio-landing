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

  textarea {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid var(--color-gray-200);
    border-radius: 10px;
    font-size: 15px;
    transition: all 0.2s;
    font-family: inherit;
    min-height: 160px;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: var(--color-gold);
      box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
    }
  }

  .character-count {
    text-align: right;
    font-size: 13px;
    color: var(--color-gray-500);
    margin-top: 8px;
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
    margin-bottom: 12px;
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

  .tip-box {
    background: #FEF3C7;
    border-left: 4px solid var(--color-gold);
    padding: 16px 20px;
    border-radius: 8px;
    margin-top: 30px;
  }

  .tip-title {
    font-weight: 700;
    color: #92400E;
    margin: 0 0 8px 0;
    font-size: 14px;
  }

  .tip-text {
    margin: 0;
    font-size: 14px;
    color: #78350F;
    line-height: 1.5;
  }
`;

const CoachingPhilosophy = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...data, [field]: value });
  };

  const philosophyLength = (data.philosophy || '').length;
  const coreValuesLength = (data.coreValues || '').length;

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Your coaching philosophy is what sets you apart. This section helps hiring committees understand
          your approach to coaching, player development, and program building.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="philosophy">
          Coaching Philosophy Statement <span className="required">*</span>
        </label>
        <textarea
          id="philosophy"
          value={data.philosophy || ''}
          onChange={(e) => handleChange('philosophy', e.target.value)}
          placeholder="Describe your overall approach to coaching, athlete development, team culture, competition, and success. What principles guide your coaching?"
          required
        />
        <div className="character-count">{philosophyLength} characters</div>
        <div className="helper-text">
          💡 Aim for 200-400 characters. Be authentic and specific to your coaching style.
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="coreValues">
          Core Values & Beliefs
        </label>
        <textarea
          id="coreValues"
          value={data.coreValues || ''}
          onChange={(e) => handleChange('coreValues', e.target.value)}
          placeholder="What values do you instill in your athletes? (e.g., discipline, teamwork, academic excellence, character development)"
        />
        <div className="character-count">{coreValuesLength} characters</div>
      </div>

      <div className="form-group">
        <label htmlFor="developmentApproach">
          Player/Athlete Development Approach
        </label>
        <textarea
          id="developmentApproach"
          value={data.developmentApproach || ''}
          onChange={(e) => handleChange('developmentApproach', e.target.value)}
          placeholder="How do you develop athletes' skills, character, and potential both on and off the field?"
        />
      </div>

      <div className="form-group">
        <label htmlFor="leadershipStyle">
          Leadership & Communication Style
        </label>
        <textarea
          id="leadershipStyle"
          value={data.leadershipStyle || ''}
          onChange={(e) => handleChange('leadershipStyle', e.target.value)}
          placeholder="Describe how you lead your team, communicate with athletes, parents, and staff"
        />
      </div>

      <div className="examples-box">
        <div className="examples-title">Examples of Strong Philosophy Elements:</div>
        <div className="example-item">
          "Building championship programs through discipline, accountability, and positive culture"
        </div>
        <div className="example-item">
          "Developing student-athletes who excel in competition, classroom, and community"
        </div>
        <div className="example-item">
          "Creating environments where athletes push their limits while maintaining joy for the game"
        </div>
        <div className="example-item">
          "Emphasizing fundamentals, work ethic, and mental toughness as foundations for success"
        </div>
      </div>

      <div className="tip-box">
        <div className="tip-title">Why This Matters</div>
        <p className="tip-text">
          Many hiring committees specifically look for coaches whose philosophy aligns with their program
          values. A well-articulated philosophy can be the deciding factor between similar candidates.
        </p>
      </div>
    </FormSection>
  );
};

export default CoachingPhilosophy;
