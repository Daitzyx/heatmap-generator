export const checkImageExists = async (path) => {
  try {
    const response = await fetch(path);
    if (response.ok) {
      return { exists: true, path };
    } else {
      return { exists: false };
    }
  } catch (error) {
    console.error('Error checking image existence:', error);
    return { exists: false };
  }
};

export const deleteImage = async () => {
  try {
    const response = await fetch('/api/delete-image', {
      method: 'DELETE',
    });
    const result = await response.json();
    if (result.success) {
      return { success: true };
    } else {
      return { success: false, message: result.message };
    }
  } catch (error) {
    console.error('Error deleting image:', error);
    return { success: false, message: 'Error deleting image' };
  }
};

export const saveImage = async (imageData, fileName) => {
  try {
    const response = await fetch('/api/save-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageData, fileName }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorText = await response.text();
      console.error('Error saving image::', errorText);
      return { success: false, message: errorText };
    }
  } catch (error) {
    console.error('Error saving image:', error);
    return { success: false, message: 'Error saving image' };
  }
};