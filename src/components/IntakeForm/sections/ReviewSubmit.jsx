import React from 'react';
import styled from 'styled-components';

const ReviewSection = styled.div`
  .review-intro {
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-gray-600);
    margin-bottom: 40px;
  }

  .summary-card {
    background: var(--color-gray-50);
    border: 2px solid var(--color-gray-200);
    border-radius: 16px;
    padding: 30px;
    margin-bottom: 30px;
  }

  .summary-title {
    font-family: Grifter, sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .summary-content {
    font-size: 15px;
    line-height: 1.8;
    color: var(--color-gray-700);

    p {
      margin: 0 0 10px 0;
    }

    strong {
      color: var(--color-navy);
    }
  }

  .checklist {
    background: white;
    border: 2px solid var(--color-gold);
    border-radius: 16px;
    padding: 30px;
    margin-bottom: 30px;
  }

  .checklist-title {
    font-family: Grifter, sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 20px 0;
  }

  .checklist-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    font-size: 15px;
    color: var(--color-gray-700);
  }

  .check-icon {
    color: var(--color-green);
    flex-shrink: 0;
  }

  .disclaimer {
    background: #FEF3C7;
    border-left: 4px solid var(--color-gold);
    padding: 16px 20px;
    border-radius: 8px;
    margin-bottom: 30px;
  }

  .disclaimer-title {
    font-weight: 700;
    color: #92400E;
    margin: 0 0 8px 0;
    font-size: 14px;
  }

  .disclaimer-text {
    margin: 0;
    font-size: 14px;
    color: #78350F;
    line-height: 1.5;
  }
`;

const ReviewSubmit = ({ data }) => {
  const personalInfo = data.personal || {};
  const workHistory = data.work?.positions || [];
  const education = data.education?.degrees || [];

  return (
    <ReviewSection>
      <div className="review-intro">
        <p>
          Please review your information before submitting. Once submitted, your data will be
          downloaded as a JSON file and our team will be notified to begin working on your resume.
        </p>
      </div>

      <div className="summary-card">
        <div className="summary-title">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          Personal Information
        </div>
        <div className="summary-content">
          <p><strong>Name:</strong> {personalInfo.fullName || 'Not provided'}</p>
          <p><strong>Email:</strong> {personalInfo.email || 'Not provided'}</p>
          <p><strong>Phone:</strong> {personalInfo.phone || 'Not provided'}</p>
          <p><strong>Location:</strong> {personalInfo.city || 'Not provided'}</p>
          {personalInfo.linkedin && (
            <p><strong>LinkedIn:</strong> linkedin.com/in/{personalInfo.linkedin}</p>
          )}
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-title">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          Work History
        </div>
        <div className="summary-content">
          {workHistory.length > 0 ? (
            workHistory.map((position, index) => (
              <div key={index} style={{ marginBottom: 15 }}>
                <p><strong>{position.title || 'Position'}</strong> at {position.organization || 'Organization'}</p>
                <p style={{ fontSize: 14, color: 'var(--color-gray-600)' }}>
                  {position.startDate} - {position.endDate || 'Present'}
                </p>
              </div>
            ))
          ) : (
            <p>No work history added</p>
          )}
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-title">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          Education
        </div>
        <div className="summary-content">
          {education.length > 0 ? (
            education.map((degree, index) => (
              <div key={index} style={{ marginBottom: 15 }}>
                <p><strong>{degree.type}</strong> in {degree.field || 'Field of Study'}</p>
                <p style={{ fontSize: 14, color: 'var(--color-gray-600)' }}>
                  {degree.institution} - {degree.year || 'Year'}
                </p>
              </div>
            ))
          ) : (
            <p>No education added</p>
          )}
        </div>
      </div>

      <div className="checklist">
        <div className="checklist-title">Before you submit, make sure:</div>
        <div className="checklist-item">
          <svg className="check-icon" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          All contact information is current and accurate
        </div>
        <div className="checklist-item">
          <svg className="check-icon" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Work history is listed in reverse chronological order
        </div>
        <div className="checklist-item">
          <svg className="check-icon" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          All achievements and responsibilities are specific and quantifiable
        </div>
        <div className="checklist-item">
          <svg className="check-icon" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Educational credentials are complete
        </div>
      </div>

      <div className="disclaimer">
        <div className="disclaimer-title">Next Steps</div>
        <p className="disclaimer-text">
          When you click "Submit Order", your information will be downloaded as a JSON file.
          Our team will review your information and begin crafting your championship resume.
          You'll receive an email confirmation within 24 hours with next steps and delivery timeline.
        </p>
      </div>
    </ReviewSection>
  );
};

export default ReviewSubmit;
