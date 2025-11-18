import React, { useState } from 'react';
import styled from 'styled-components';

const FormSection = styled.div`
  .form-intro {
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-gray-600);
    margin-bottom: 40px;
  }

  .degree-card {
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

  input,
  select {
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

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .add-degree-btn {
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

const Education = ({ data, updateData }) => {
  const [degrees, setDegrees] = useState(data.degrees || [{}]);

  const addDegree = () => {
    const newDegrees = [...degrees, {}];
    setDegrees(newDegrees);
    updateData({ degrees: newDegrees });
  };

  const removeDegree = (index) => {
    const newDegrees = degrees.filter((_, i) => i !== index);
    setDegrees(newDegrees);
    updateData({ degrees: newDegrees });
  };

  const updateDegree = (index, field, value) => {
    const newDegrees = [...degrees];
    newDegrees[index] = { ...newDegrees[index], [field]: value };
    setDegrees(newDegrees);
    updateData({ degrees: newDegrees });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          List your educational background, including degrees, certifications, and relevant
          training that support your coaching career.
        </p>
      </div>

      {degrees.map((degree, index) => (
        <div key={index} className="degree-card">
          <div className="card-header">
            <div className="card-title">Education {index + 1}</div>
            {degrees.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeDegree(index)}
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
              Degree Type <span className="required">*</span>
            </label>
            <select
              value={degree.type || ''}
              onChange={(e) => updateDegree(index, 'type', e.target.value)}
            >
              <option value="">Select degree type</option>
              <option value="Associate">Associate's Degree</option>
              <option value="Bachelor">Bachelor's Degree</option>
              <option value="Master">Master's Degree</option>
              <option value="Doctorate">Doctorate</option>
              <option value="Certificate">Certificate Program</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Field of Study <span className="required">*</span>
            </label>
            <input
              type="text"
              value={degree.field || ''}
              onChange={(e) => updateDegree(index, 'field', e.target.value)}
              placeholder="Physical Education, Kinesiology, etc."
            />
          </div>

          <div className="form-group">
            <label>
              Institution <span className="required">*</span>
            </label>
            <input
              type="text"
              value={degree.institution || ''}
              onChange={(e) => updateDegree(index, 'institution', e.target.value)}
              placeholder="University of Texas"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Graduation Year</label>
              <input
                type="number"
                value={degree.year || ''}
                onChange={(e) => updateDegree(index, 'year', e.target.value)}
                placeholder="2015"
                min="1960"
                max="2030"
              />
            </div>

            <div className="form-group">
              <label>GPA (Optional)</label>
              <input
                type="text"
                value={degree.gpa || ''}
                onChange={(e) => updateDegree(index, 'gpa', e.target.value)}
                placeholder="3.8"
              />
            </div>
          </div>
        </div>
      ))}

      <button type="button" className="add-degree-btn" onClick={addDegree}>
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Another Degree
      </button>
    </FormSection>
  );
};

export default Education;
