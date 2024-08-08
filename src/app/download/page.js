'use client'

import { Button } from '@/components';
import React from 'react';

const DownloadPage = () => {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/response.json';
    link.download = 'response.json';
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Download JSON File</h1>
      <Button
        onClick={downloadFile}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-500"
      >
        Download response.json
      </Button>
    </div>
  );
};

export default DownloadPage;
