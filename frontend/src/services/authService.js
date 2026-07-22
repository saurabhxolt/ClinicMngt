// Auth API calls
import api from './api';

export const login = (credentials) => api.post('/Login', credentials);
