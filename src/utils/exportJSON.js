/**
 * Export utility functions for form data
 */

export function exportFormDataAsJSON(formData, packageSelected = 'Not specified') {
  const timestamp = new Date().toISOString();
  const orderID = `ORD-${timestamp.split('T')[0].replace(/-/g, '')}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

  const structuredData = {
    orderID,
    orderDate: timestamp,
    packageSelected,

    // Form sections
    personalInfo: formData.personal || {},
    targetPosition: formData.target || {},
    currentPosition: formData.current || {},
    workHistory: formData.work || {},
    education: formData.education || {},
    certifications: formData.certifications || {},
    coachingPhilosophy: formData.philosophy || {},
    achievements: formData.achievements || {},
    affiliations: formData.affiliations || {},
    notableAthletes: formData.athletes || {},
    publicationsAndMedia: formData.publications || {},
    references: formData.references || {},
    additionalInfo: formData.additional || {},
    resumePreferences: formData.preferences || {},
    fileUploads: formData.uploads || {},
    deliveryPreferences: formData.delivery || {},
  };

  return structuredData;
}

export function downloadJSON(data, filename = null) {
  const defaultFilename = `coaching-resume-order-${data.orderID || Date.now()}.json`;
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename || defaultFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function sendJSONToEmail(data, email) {
  try {
    const response = await fetch('/api/send-order-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderData: data,
        recipientEmail: email,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

export function saveToLocalStorage(formData, key = 'intakeFormData') {
  try {
    localStorage.setItem(key, JSON.stringify(formData));
    localStorage.setItem(`${key}_timestamp`, new Date().toISOString());
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
}

export function loadFromLocalStorage(key = 'intakeFormData') {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
}

export function clearLocalStorage(key = 'intakeFormData') {
  try {
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}_timestamp`);
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
}
