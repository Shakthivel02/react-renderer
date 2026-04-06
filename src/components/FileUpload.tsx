import React, { useContext, useRef, useState } from 'react';
import type { FileUploadSchema } from '../types/schema';
import { FormContext } from './Form';
import { DropzoneContainer, Label, InputContainer } from '../styles/styledComponents';

const UploadIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px', opacity: 0.5 }}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

export const FileUpload: React.FC<{ schema: FileUploadSchema }> = ({ schema }) => {
  const context = useContext(FormContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  if (!context) {
    console.warn(`FileUpload ${schema.name} must be rendered inside a Form component.`);
    return null;
  }

  const { handleChange } = context;

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      handleChange(schema.name, file.name);
    }
  };

  return (
    <InputContainer style={schema.style}>
      {schema.label && <Label>{schema.label}</Label>}
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept="image/*"
      />
      <DropzoneContainer onClick={handleClick}>
        <UploadIcon />
        <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px', color: fileName ? '#3b82f6' : 'inherit' }}>
          {fileName ? `File selected: ${fileName}` : schema.placeholder}
        </div>
        {!fileName && schema.helpText && <div style={{ fontSize: '12px', opacity: 0.6 }}>{schema.helpText}</div>}
      </DropzoneContainer>
    </InputContainer>
  );
};
