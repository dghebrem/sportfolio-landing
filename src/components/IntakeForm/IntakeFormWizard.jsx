import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PersonalInfo from './sections/PersonalInfo';
import WorkHistory from './sections/WorkHistory';
import Education from './sections/Education';
import ReviewSubmit from './sections/ReviewSubmit';

const WizardStyle = styled.div`
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 60px 50px;
  max-width: 900px;
  margin: 0 auto;

  .section-header {
    margin-bottom: 40px;
    position: relative;
  }

  .section-number {
    font-family: Grifter, sans-serif;
    font-size: 96px;
    font-weight: 700;
    color: var(--color-gray-100);
    line-height: 1;
    position: absolute;
    top: -20px;
    left: 0;
    z-index: 0;
  }

  .section-title {
    font-family: Grifter, sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 10px 0;
    position: relative;
    z-index: 1;
    padding-left: 80px;
  }

  .progress-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .progress-text {
    font-size: 14px;
    color: var(--color-gray-600);
  }

  .progress-percentage {
    font-size: 24px;
    font-weight: 700;
    color: var(--color-gold);
  }

  .progress-bar {
    width: 100%;
    height: 4px;
    background: var(--color-gray-200);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 40px;
  }

  .progress-fill {
    height: 100%;
    background: var(--color-gold);
    transition: width 0.3s ease;
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding-top: 30px;
    border-top: 2px solid var(--color-gray-100);
  }

  .btn {
    padding: 16px 40px;
    border-radius: 12px;
    font-family: Grifter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-back {
    background: transparent;
    color: var(--color-gray-600);

    &:hover {
      color: var(--color-navy);
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  .btn-next {
    background: var(--color-gold);
    color: var(--color-navy);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
    }
  }

  .btn-submit {
    background: var(--color-navy);
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.3);
    }
  }

  .auto-save-indicator {
    text-align: center;
    margin-top: 20px;
    font-size: 13px;
    color: var(--color-gray-500);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  @media (max-width: 767px) {
    padding: 40px 30px;

    .section-title {
      font-size: 28px;
      padding-left: 0;
      margin-top: 20px;
    }

    .section-number {
      font-size: 72px;
      position: static;
    }

    .btn {
      padding: 14px 30px;
      font-size: 15px;
    }
  }
`;

const sections = [
  { id: 'personal', title: 'Personal Information', component: PersonalInfo },
  { id: 'work', title: 'Work History', component: WorkHistory },
  { id: 'education', title: 'Education', component: Education },
  { id: 'review', title: 'Review & Submit', component: ReviewSubmit },
];

const IntakeFormWizard = ({ selectedPackage }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [lastSaved, setLastSaved] = useState(null);

  // Auto-save functionality
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      const saveInterval = setInterval(() => {
        localStorage.setItem('intakeFormData', JSON.stringify(formData));
        setLastSaved(new Date());
      }, 30000); // Save every 30 seconds

      return () => clearInterval(saveInterval);
    }
  }, [formData]);

  // Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem('intakeFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const CurrentSection = sections[currentStep].component;
  const progress = Math.round(((currentStep + 1) / sections.length) * 100);

  const handleNext = () => {
    if (currentStep < sections.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    // Export JSON
    const jsonData = {
      orderDate: new Date().toISOString(),
      packageSelected: selectedPackage,
      ...formData,
    };

    const dataStr = JSON.stringify(jsonData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `coaching-resume-order-${Date.now()}.json`;
    link.click();

    alert('Form submitted successfully! Your data has been downloaded.');
  };

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data,
    }));
  };

  return (
    <WizardStyle>
      <div className="progress-section">
        <span className="progress-text">Progress</span>
        <span className="progress-percentage">{progress}%</span>
      </div>

      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="section-header">
            <div className="section-number">{String(currentStep + 1).padStart(2, '0')}</div>
            <h2 className="section-title">{sections[currentStep].title}</h2>
          </div>

          <CurrentSection
            data={formData[sections[currentStep].id] || {}}
            updateData={(data) => updateFormData(sections[currentStep].id, data)}
          />
        </motion.div>
      </AnimatePresence>

      <div className="navigation-buttons">
        <button
          className="btn btn-back"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {currentStep < sections.length - 1 ? (
          <button className="btn btn-next" onClick={handleNext}>
            Continue
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button className="btn btn-submit" onClick={handleSubmit}>
            Submit Order
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        )}
      </div>

      <div className="auto-save-indicator">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Your progress is automatically saved
      </div>
    </WizardStyle>
  );
};

export default IntakeFormWizard;
