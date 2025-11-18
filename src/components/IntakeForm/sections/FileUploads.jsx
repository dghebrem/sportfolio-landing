import React, { useState } from 'react';
import styled from 'styled-components';

const FormSection = styled.div`
  .form-intro {
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-gray-600);
    margin-bottom: 40px;
  }

  .upload-area {
    border: 2px dashed var(--color-gray-300);
    border-radius: 16px;
    padding: 40px;
    text-align: center;
    background: var(--color-gray-50);
    margin-bottom: 24px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: var(--color-gold);
      background: rgba(251, 191, 36, 0.05);
    }

    &.drag-over {
      border-color: var(--color-gold);
      background: rgba(251, 191, 36, 0.1);
    }
  }

  .upload-icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .upload-title {
    font-family: Grifter, sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--color-navy);
    margin-bottom: 8px;
  }

  .upload-description {
    font-size: 14px;
    color: var(--color-gray-600);
    margin-bottom: 16px;
  }

  .upload-button {
    background: var(--color-gold);
    color: var(--color-navy);
    padding: 12px 30px;
    border-radius: 10px;
    border: none;
    font-family: Grifter, sans-serif;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: var(--color-gold-dark);
      transform: translateY(-2px);
    }
  }

  .file-list {
    margin-top: 20px;
  }

  .file-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: white;
    border: 2px solid var(--color-gray-200);
    border-radius: 12px;
    margin-bottom: 12px;
  }

  .file-info {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
  }

  .file-icon {
    color: var(--color-gold);
  }

  .file-name {
    font-weight: 600;
    color: var(--color-navy);
  }

  .file-size {
    font-size: 13px;
    color: var(--color-gray-500);
  }

  .remove-file-btn {
    background: transparent;
    border: none;
    color: var(--color-orange);
    cursor: pointer;
    padding: 8px;

    &:hover {
      color: #ea552b;
    }
  }

  .helper-text {
    font-size: 13px;
    color: var(--color-gray-500);
    margin-top: 12px;
  }

  .tip-box {
    background: #EFF6FF;
    border-left: 4px solid var(--color-blue);
    padding: 16px 20px;
    border-radius: 8px;
    margin-top: 30px;
  }

  .tip-title {
    font-weight: 700;
    color: #1E40AF;
    margin: 0 0 8px 0;
    font-size: 14px;
  }

  .tip-text {
    margin: 0;
    font-size: 14px;
    color: #1E3A8A;
    line-height: 1.5;
  }

  input[type="file"] {
    display: none;
  }
`;

const FileUploads = ({ data, updateData }) => {
  const [files, setFiles] = useState(data.files || []);
  const [dragOver, setDragOver] = useState(false);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    addFiles(selectedFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const addFiles = (newFiles) => {
    const fileData = newFiles.map(file => ({
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type,
      file: file
    }));
    const updatedFiles = [...files, ...fileData];
    setFiles(updatedFiles);
    updateData({ files: updatedFiles });
  };

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    updateData({ files: updatedFiles });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <FormSection>
      <div className="form-intro">
        <p>
          Upload any supporting documents that will help us create your resume. These might include
          current resumes, awards, certificates, or program materials.
        </p>
        <p style={{ fontStyle: 'italic', marginTop: 12 }}>
          This section is optional. All uploads are secure and confidential.
        </p>
      </div>

      <div
        className={`upload-area ${dragOver ? 'drag-over' : ''}`}
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onClick={() => document.getElementById('file-input').click()}
      >
        <div className="upload-icon">📄</div>
        <div className="upload-title">Drop files here or click to browse</div>
        <div className="upload-description">
          Supported formats: PDF, Word (.doc, .docx), Images (.jpg, .png)
        </div>
        <button type="button" className="upload-button">
          Choose Files
        </button>
        <input
          id="file-input"
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={handleFileSelect}
        />
      </div>

      {files.length > 0 && (
        <div className="file-list">
          <div style={{ fontWeight: 700, marginBottom: 12, color: 'var(--color-navy)' }}>
            Uploaded Files ({files.length})
          </div>
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <div className="file-info">
                <svg className="file-icon" width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="file-name">{file.name}</div>
                  <div className="file-size">{file.size}</div>
                </div>
              </div>
              <button
                type="button"
                className="remove-file-btn"
                onClick={() => removeFile(index)}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="helper-text">
        💡 Helpful uploads: Current resume, coaching certifications, award letters, program brochures
      </div>

      <div className="tip-box">
        <div className="tip-title">Note on File Uploads</div>
        <p className="tip-text">
          In this demo, files are stored locally in your browser. In the production version, files would
          be securely uploaded to our servers. Your files will be reviewed by your designer and deleted
          after your resume is completed.
        </p>
      </div>
    </FormSection>
  );
};

export default FileUploads;
