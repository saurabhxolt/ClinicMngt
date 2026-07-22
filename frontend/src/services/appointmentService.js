// Appointment API calls
import api from './api';

export const bookAppointment = (data) => api.post('/Appointment', data);
