// Blog API calls
import api from './api';

export const getBlogs = () => api.get('/Blogs');
export const getBlogById = (id) => api.get(`/Blogs/${id}`);
