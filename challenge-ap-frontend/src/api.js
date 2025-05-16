import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';  // Your backend URL

export const fetchRegistrations = () => axios.get(`${API_URL}/registrations/`);
