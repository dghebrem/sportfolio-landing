import React, { useState } from 'react';
import styled from 'styled-components';

const FormSection = styled.div`
  .form-intro {
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-gray-600);
    margin-bottom: 40px;
  }

  .reference-card {
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

  input, textarea {
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
    min-height: 80px;
    resize: vertical;
  }

  .add-reference-btn {
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

  .tip-box {
    background: #FEF3C7;
    border-left: 4px solid var(--color-gold);
    padding: 16px 20px;
    border-radius: 8px;
    margin-bottom: 30px;
  }

  .tip-text {
    margin: 0;
    font-size: 14px;
    color: #78350F;
    line-height: 1.5;
  }
`;

const References = ({ data, updateData }) => {
  const [references, setReferences] = useState(data.references || []);

  const addReference = () => {
    const newReferences = [...references, {}];
    setReferences(newReferences);
    updateData({ references: newReferences });
  };

  const removeReference = (index) => {
    const newReferences = references.filter((_, i) => i !== index);
    setReferences(newReferences);
    updateData({ references: newReferences });
  };

  const updateReference = (index, field, value) => {
    const newReferences = [...references];
    newReferences[index] = { ...newReferences[index], [field]: value };
    setReferences(newReferences);
    updateData({ references: newReferences });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Provide contact information for professional references. Choose people who can speak to your
          coaching abilities, character, and work ethic.
        </p>
      </div>

      <div className="tip-box">
        <p className="tip-text">
          💡 Note: Reference information typically appears as "Available upon request" on the resume itself.
          We'll format a separate reference sheet for you to provide when requested.
        </p>
      </div>

      {references.map((reference, index) => (
        <div key={index} className="reference-card">
          <div className="card-header">
            <div className="card-title">Reference {index + 1}</div>
            {references.length > 0 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeReference(index)}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Remove
              </button>
            )}
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={reference.name || ''}
              onChange={(e) => updateReference(index, 'name', e.target.value)}
              placeholder="Dr. Jane Smith"
            />
          </div>

          <div className="form-group">
            <label>Title/Position</label>
            <input
              type="text"
              value={reference.title || ''}
              onChange={(e) => updateReference(index, 'title', e.target.value)}
              placeholder="Athletic Director, Principal, Fellow Coach, etc."
            />
          </div>

          <div className="form-group">
            <label>Organization/School</label>
            <input
              type="text"
              value={reference.organization || ''}
              onChange={(e) => updateReference(index, 'organization', e.target.value)}
              placeholder="Lincoln High School"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={reference.email || ''}
              onChange={(e) => updateReference(index, 'email', e.target.value)}
              placeholder="jane.smith@school.edu"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={reference.phone || ''}
              onChange={(e) => updateReference(index, 'phone', e.target.value)}
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label>Relationship/How They Know You</label>
            <textarea
              value={reference.relationship || ''}
              onChange={(e) => updateReference(index, 'relationship', e.target.value)}
              placeholder="Supervised me as Athletic Director at Lincoln HS from 2018-2023"
            />
          </div>
        </div>
      ))}

      <button type="button" className="add-reference-btn" onClick={addReference}>
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Reference
      </button>
    </FormSection>
  );
};

export default References;
