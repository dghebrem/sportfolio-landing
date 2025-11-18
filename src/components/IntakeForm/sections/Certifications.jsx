import React, { useState } from 'react';
import styled from 'styled-components';

const FormSection = styled.div`
  .form-intro {
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-gray-600);
    margin-bottom: 40px;
  }

  .cert-card {
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

  .add-cert-btn {
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

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 12px;

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

const Certifications = ({ data, updateData }) => {
  const [certifications, setCertifications] = useState(data.certifications || []);

  const addCertification = () => {
    const newCerts = [...certifications, {}];
    setCertifications(newCerts);
    updateData({ certifications: newCerts });
  };

  const removeCertification = (index) => {
    const newCerts = certifications.filter((_, i) => i !== index);
    setCertifications(newCerts);
    updateData({ certifications: newCerts });
  };

  const updateCertification = (index, field, value) => {
    const newCerts = [...certifications];
    newCerts[index] = { ...newCerts[index], [field]: value };
    setCertifications(newCerts);
    updateData({ certifications: newCerts });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          List all relevant coaching certifications, licenses, and credentials. These are essential for
          demonstrating your qualifications and meeting position requirements.
        </p>
      </div>

      {certifications.map((cert, index) => (
        <div key={index} className="cert-card">
          <div className="card-header">
            <div className="card-title">Certification {index + 1}</div>
            {certifications.length > 0 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeCertification(index)}
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
              Certification Name <span className="required">*</span>
            </label>
            <input
              type="text"
              value={cert.name || ''}
              onChange={(e) => updateCertification(index, 'name', e.target.value)}
              placeholder="CPR/AED, NFHS Coaching Certification, USATF Level 1, etc."
            />
          </div>

          <div className="form-group">
            <label>
              Issuing Organization <span className="required">*</span>
            </label>
            <input
              type="text"
              value={cert.organization || ''}
              onChange={(e) => updateCertification(index, 'organization', e.target.value)}
              placeholder="American Red Cross, NFHS, USATF, etc."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Issue Date</label>
              <input
                type="date"
                value={cert.issueDate || ''}
                onChange={(e) => updateCertification(index, 'issueDate', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Expiration Date</label>
              <input
                type="date"
                value={cert.expirationDate || ''}
                onChange={(e) => updateCertification(index, 'expirationDate', e.target.value)}
                disabled={cert.noExpiration}
              />
            </div>
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={cert.noExpiration || false}
              onChange={(e) => updateCertification(index, 'noExpiration', e.target.checked)}
            />
            <span>This certification does not expire</span>
          </label>

          <div className="form-group">
            <label>Certification Number/ID (Optional)</label>
            <input
              type="text"
              value={cert.certificationNumber || ''}
              onChange={(e) => updateCertification(index, 'certificationNumber', e.target.value)}
              placeholder="Credential ID or certification number"
            />
          </div>
        </div>
      ))}

      <button type="button" className="add-cert-btn" onClick={addCertification}>
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Certification
      </button>

      <div className="helper-text" style={{ marginTop: 20, textAlign: 'center' }}>
        💡 Include CPR/First Aid, sport-specific certifications, teaching licenses, and safety training
      </div>
    </FormSection>
  );
};

export default Certifications;
