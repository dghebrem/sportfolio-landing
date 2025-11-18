import React, { useState } from 'react';
import styled from 'styled-components';

const FormSection = styled.div`
  .form-intro {
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-gray-600);
    margin-bottom: 40px;
  }

  .achievement-card {
    background: var(--color-gray-50);
    border: 2px solid var(--color-gray-200);
    border-radius: 16px;
    padding: 30px;
    margin-bottom: 24px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .card-title {
    font-family: Grifter, sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--color-navy);
  }

  .remove-btn {
    background: transparent;
    border: none;
    color: var(--color-orange);
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      color: #ea552b;
    }
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-navy);
    margin-bottom: 8px;
  }

  input, select, textarea {
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

  .add-achievement-btn {
    width: 100%;
    padding: 16px;
    background: white;
    border: 2px dashed var(--color-gold);
    border-radius: 12px;
    color: var(--color-gold);
    font-family: Grifter, sans-serif;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;

    &:hover {
      background: var(--color-gray-50);
      border-color: var(--color-gold-dark);
      color: var(--color-gold-dark);
    }
  }
`;

const Achievements = ({ data, updateData }) => {
  const [achievements, setAchievements] = useState(data.achievements || []);

  const addAchievement = () => {
    const newAchievements = [...achievements, {}];
    setAchievements(newAchievements);
    updateData({ achievements: newAchievements });
  };

  const removeAchievement = (index) => {
    const newAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(newAchievements);
    updateData({ achievements: newAchievements });
  };

  const updateAchievement = (index, field, value) => {
    const newAchievements = [...achievements];
    newAchievements[index] = { ...newAchievements[index], [field]: value };
    setAchievements(newAchievements);
    updateData({ achievements: newAchievements });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Highlight your most impressive achievements, awards, and recognitions. These demonstrate your
          impact and success as a coach.
        </p>
      </div>

      {achievements.map((achievement, index) => (
        <div key={index} className="achievement-card">
          <div className="card-header">
            <div className="card-title">Achievement {index + 1}</div>
            {achievements.length > 0 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeAchievement(index)}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Remove
              </button>
            )}
          </div>

          <div className="form-group">
            <label>Achievement Type</label>
            <select
              value={achievement.type || ''}
              onChange={(e) => updateAchievement(index, 'type', e.target.value)}
            >
              <option value="">Select type</option>
              <option value="championship">Championship/Title</option>
              <option value="award">Award/Honor</option>
              <option value="record">Record/Milestone</option>
              <option value="recognition">Recognition/Nomination</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Achievement Title/Name</label>
            <input
              type="text"
              value={achievement.title || ''}
              onChange={(e) => updateAchievement(index, 'title', e.target.value)}
              placeholder="District Championship, Coach of the Year, State Qualifier, etc."
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <input
              type="number"
              value={achievement.year || ''}
              onChange={(e) => updateAchievement(index, 'year', e.target.value)}
              placeholder="2023"
              min="1960"
              max="2030"
            />
          </div>

          <div className="form-group">
            <label>Description/Context</label>
            <textarea
              value={achievement.description || ''}
              onChange={(e) => updateAchievement(index, 'description', e.target.value)}
              placeholder="Provide context: Led team to first championship in 15 years with 12-1 record..."
            />
          </div>
        </div>
      ))}

      <button type="button" className="add-achievement-btn" onClick={addAchievement}>
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Achievement
      </button>
    </FormSection>
  );
};

export default Achievements;
