import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
  timeout: 5000,
});

export const getArtworks = async () => {
  try {
    const response = await api.get('/artworks');
    return response.data;
  } catch (error) {
    console.error('Error fetching artworks:', error);
    throw error;
  }
};

export default api;
