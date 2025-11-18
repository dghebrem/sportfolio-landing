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

  .checkbox-group {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .checkbox-item {
    display: flex;
    align-items: start;
    gap: 12px;
    padding: 14px;
    background: var(--color-gray-50);
    border-radius: 10px;

    input[type="checkbox"] {
      margin-top: 2px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    label {
      margin: 0;
      font-weight: 600;
      cursor: pointer;
      flex: 1;
    }

    .description {
      font-size: 13px;
      color: var(--color-gray-600);
      margin-top: 4px;
      font-weight: normal;
    }
  }

  .helper-text {
    margin-top: 8px;
    font-size: 13px;
    color: var(--color-gray-500);
  }

  .info-box {
    background: rgba(251, 191, 36, 0.1);
    border: 2px solid var(--color-gold);
    border-radius: 12px;
    padding: 20px;
    margin-top: 30px;
  }

  .info-title {
    font-family: Grifter, sans-serif;
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 12px 0;
    font-size: 16px;
  }

  .info-text {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: var(--color-gray-700);
    line-height: 1.5;
  }
`;

const DeliveryPreferences = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...data, [field]: value });
  };

  const handleCheckboxChange = (field, checked) => {
    const current = data.deliveryFormats || [];
    const updated = checked
      ? [...current, field]
      : current.filter(f => f !== field);
    updateData({ ...data, deliveryFormats: updated });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Let us know how you'd like to receive your finished resume and any special delivery
          requirements.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="deliveryEmail">
          Delivery Email Address
        </label>
        <input
          id="deliveryEmail"
          type="email"
          value={data.deliveryEmail || ''}
          onChange={(e) => handleChange('deliveryEmail', e.target.value)}
          placeholder="your.email@example.com"
        />
        <div className="helper-text">
          This can be different from your contact email if needed
        </div>
      </div>

      <div className="form-group">
        <label>File Formats (select all that apply)</label>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="format-pdf"
              checked={(data.deliveryFormats || []).includes('pdf')}
              onChange={(e) => handleCheckboxChange('pdf', e.target.checked)}
            />
            <label htmlFor="format-pdf">
              PDF (recommended)
              <div className="description">
                Universal format, maintains formatting, ideal for online applications
              </div>
            </label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              id="format-word"
              checked={(data.deliveryFormats || []).includes('word')}
              onChange={(e) => handleCheckboxChange('word', e.target.checked)}
            />
            <label htmlFor="format-word">
              Word Document (.docx)
              <div className="description">
                Editable format for future updates
              </div>
            </label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              id="format-google"
              checked={(data.deliveryFormats || []).includes('google')}
              onChange={(e) => handleCheckboxChange('google', e.target.checked)}
            />
            <label htmlFor="format-google">
              Google Docs
              <div className="description">
                Cloud-based, easy to share and collaborate
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="urgency">
          Delivery Timeline
        </label>
        <select
          id="urgency"
          value={data.urgency || ''}
          onChange={(e) => handleChange('urgency', e.target.value)}
        >
          <option value="">Select timeline</option>
          <option value="standard">Standard (3-5 business days)</option>
          <option value="rush">Rush (1-2 business days) - +$100</option>
          <option value="flexible">Flexible (I'm not in a hurry)</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="specificDeadline">
          Specific Deadline (if applicable)
        </label>
        <input
          id="specificDeadline"
          type="date"
          value={data.specificDeadline || ''}
          onChange={(e) => handleChange('specificDeadline', e.target.value)}
        />
        <div className="helper-text">
          If you have a job application deadline, let us know
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="additionalRequests">
          Additional Delivery Requests or Instructions
        </label>
        <textarea
          id="additionalRequests"
          value={data.additionalRequests || ''}
          onChange={(e) => handleChange('additionalRequests', e.target.value)}
          placeholder="Any special instructions for delivery, specific naming conventions, additional copies needed, etc."
        />
      </div>

      <div className="info-box">
        <div className="info-title">What happens after you submit?</div>
        <p className="info-text">
          ✓ You'll receive an email confirmation within 24 hours
        </p>
        <p className="info-text">
          ✓ Our team will review your information and contact you if we need clarification
        </p>
        <p className="info-text">
          ✓ We'll send you a draft within your selected timeline
        </p>
        <p className="info-text">
          ✓ You'll have the opportunity for revisions based on your package
        </p>
        <p className="info-text">
          ✓ Final files will be delivered in your requested formats
        </p>
      </div>
    </FormSection>
  );
};

export default DeliveryPreferences;
