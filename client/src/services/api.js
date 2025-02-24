import axios from 'axios';
import { handleError } from '../utils/errorHandler';
const { ipcRenderer } = window.require('electron');

export const login = () => {
  return new Promise((resolve, reject) => {
    ipcRenderer.send('login');
    ipcRenderer.on('login-success', (event, token) => resolve(token));
    ipcRenderer.on('login-error', (event, error) => reject(error));
  });
};

export const fetchInstruments = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/instruments');
    return response.data;
  } catch (error) {
    handleError(error, 'fetchInstruments');
    throw error;
  }
};

export const signDocument = async (documentId, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/sign', { documentId, password });
    return response.data;
  } catch (error) {
    handleError(error, 'signDocument');
    throw error;
  }
};
