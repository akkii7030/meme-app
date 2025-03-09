// src/utils/api.js
import axios from 'axios';

export const fetchMemes = async () => {
  const response = await axios.get('https://api.imgflip.com/get_memes');
  return response.data.data.memes;
};

export const uploadMeme = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'your_upload_preset');

  const response = await axios.post(
    'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload',
    formData
  );
  return response.data.secure_url;
};