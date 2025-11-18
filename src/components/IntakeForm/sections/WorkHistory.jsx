import React, { useState } from 'react';
import styled from 'styled-components';

const FormSection = styled.div`
  .form-intro {
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-gray-600);
    margin-bottom: 40px;
  }

  .position-card {
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

  .required {
    color: var(--color-orange);
  }

  input[type="text"],
  input[type="date"],
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

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .add-position-btn {
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

  @media (max-width: 767px) {
    .form-row {
      grid-template-columns: 1fr;
    }
  }
`;

const WorkHistory = ({ data, updateData }) => {
  const [positions, setPositions] = useState(data.positions || []);

  const addPosition = () => {
    const newPositions = [...positions, {}];
    setPositions(newPositions);
    updateData({ positions: newPositions });
  };

  const removePosition = (index) => {
    const newPositions = positions.filter((_, i) => i !== index);
    setPositions(newPositions);
    updateData({ positions: newPositions });
  };

  const updatePosition = (index, field, value) => {
    const newPositions = [...positions];
    newPositions[index] = { ...newPositions[index], [field]: value };
    setPositions(newPositions);
    updateData({ positions: newPositions });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          List your coaching positions in reverse chronological order (most recent first).
          Include all relevant roles that showcase your progression and experience.
        </p>
      </div>

      {positions.map((position, index) => (
        <div key={index} className="position-card">
          <div className="card-header">
            <div className="card-title">Position {index + 1}</div>
            {positions.length > 0 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removePosition(index)}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Remove
              </button>
            )}
          </div>

          <div className="form-group">
            <label>
              Job Title <span className="required">*</span>
            </label>
            <input
              type="text"
              value={position.title || ''}
              onChange={(e) => updatePosition(index, 'title', e.target.value)}
              placeholder="Head Football Coach"
            />
          </div>

          <div className="form-group">
            <label>
              School/Organization <span className="required">*</span>
            </label>
            <input
              type="text"
              value={position.organization || ''}
              onChange={(e) => updatePosition(index, 'organization', e.target.value)}
              placeholder="Lincoln High School"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                Start Date <span className="required">*</span>
              </label>
              <input
                type="date"
                value={position.startDate || ''}
                onChange={(e) => updatePosition(index, 'startDate', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={position.endDate || ''}
                onChange={(e) => updatePosition(index, 'endDate', e.target.value)}
                placeholder="Leave blank if current"
              />
            </div>
          </div>

          <div className="form-group">
            <label>
              Key Achievements & Responsibilities
            </label>
            <textarea
              value={position.achievements || ''}
              onChange={(e) => updatePosition(index, 'achievements', e.target.value)}
              placeholder="Led team to 3 district championships, improved player retention by 40%, developed strength and conditioning program..."
            />
          </div>
        </div>
      ))}

      <button type="button" className="add-position-btn" onClick={addPosition}>
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Another Position
      </button>
    </FormSection>
  );
};

export default WorkHistory;
