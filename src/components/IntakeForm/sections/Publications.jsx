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
    min-height: 100px;
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

  .skip-section {
    text-align: center;
    padding: 40px 20px;
    background: var(--color-gray-50);
    border-radius: 12px;
    color: var(--color-gray-600);
    font-size: 15px;
  }
`;

const Publications = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...data, [field]: value });
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          If you've been featured in media, published articles, or participated in interviews/podcasts,
          list them here. This demonstrates thought leadership and visibility in the coaching community.
        </p>
        <p style={{ fontStyle: 'italic', marginTop: 12 }}>
          This section is optional. If not applicable, you can skip to the next section.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="articles">
          Published Articles or Blog Posts
        </label>
        <textarea
          id="articles"
          value={data.articles || ''}
          onChange={(e) => handleChange('articles', e.target.value)}
          placeholder="Articles you've written for coaching publications, blogs, or websites"
        />
      </div>

      <div className="form-group">
        <label htmlFor="mediaFeatures">
          Media Features & Interviews
        </label>
        <textarea
          id="mediaFeatures"
          value={data.mediaFeatures || ''}
          onChange={(e) => handleChange('mediaFeatures', e.target.value)}
          placeholder="Newspaper articles, TV interviews, radio appearances, podcast episodes featuring you or your program"
        />
        <div className="helper-text">
          Include publication name and date if known
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="presentations">
          Speaking Engagements & Presentations
        </label>
        <textarea
          id="presentations"
          value={data.presentations || ''}
          onChange={(e) => handleChange('presentations', e.target.value)}
          placeholder="Clinics, conferences, workshops where you've presented"
        />
      </div>

      <div className="form-group">
        <label htmlFor="videoContent">
          Video Content or Social Media Presence
        </label>
        <textarea
          id="videoContent"
          value={data.videoContent || ''}
          onChange={(e) => handleChange('videoContent', e.target.value)}
          placeholder="YouTube channels, coaching content, significant social media presence related to coaching"
        />
        <div className="helper-text">
          Only include if professional and relevant to coaching
        </div>
      </div>
    </FormSection>
  );
};

export default Publications;
