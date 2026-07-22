// Upload API calls
import api from './api';

export const uploadImage = (formData) =>
  api.post('/UploadImage', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
