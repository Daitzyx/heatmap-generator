import React from 'react';
import { useFileUpload } from '@/hooks/useFileUpload';

export function FileUpload({ label, accept, onFileSelect }) {
  const { fileName, inputRef, handleFileChange } = useFileUpload(onFileSelect);

  const isValidFile = fileName !== "No file selected"

  return (
    <div className='p-2 w-[300px] rounded-md'>
      <label className='block text-sm text-gray-600 mb-2'>{label}</label>
      <div className='flex items-center justify-between'>
        <span className={`text-sm ${isValidFile ? 'text-green-500' : 'text-gray-600'}`}>{fileName}</span>
        <label htmlFor="file-upload" className='rounded-md py-1 px-2 bg-slate-200 cursor-pointer'>
          Select File
        </label>
        <input
          ref={inputRef}
          id="file-upload"
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className='hidden'
        />
      </div>
    </div>
  );
}
