import { toast } from 'react-hot-toast';

export const jsonUpload = (file, setDataCallback, resetInputCallback) => {
  if (!file) {
    toast.error("No file selected or file type is incorrect");
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const parsedJson = JSON.parse(reader.result);

      if (validateJsonStructure(parsedJson)) {
        setDataCallback(parsedJson.hits.hits);
      } else {
        toast.error("Invalid JSON structure! Choose JSON File with a valid structure");
        resetInputCallback();
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      resetInputCallback();
    }
  };

  reader.onerror = (error) => {
    console.error("Error reading file:", error);
    alert("Error reading file");
    resetInputCallback();
  };

  reader.readAsText(file);
};

const validateJsonStructure = (json) => {
  if (
    typeof json === 'object' &&
    json.hasOwnProperty('took') &&
    json.hasOwnProperty('hits') &&
    json.hits.hasOwnProperty('hits') &&
    Array.isArray(json.hits.hits)
  ) {
    return true;
  }
  return false;
};
