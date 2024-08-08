import { useState, useRef } from 'react';

export const useFileUpload = (onFileSelect) => {
  const [fileName, setFileName] = useState('No file selected');
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file, resetInput);
    }
  };

  const resetInput = () => {
    setFileName('No file selected');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return {
    fileName,
    inputRef,
    handleFileChange,
    resetInput,
  };
};
