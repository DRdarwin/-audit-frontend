// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://ams.rds.aero/documents';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Завантаження документа для конкретного проекту
export const uploadDocument = (documentData) => {
  return api.post('/upload/', documentData);
};

// Отримання списку проектів
export const fetchProjects = () => {
  return api.get('/projects/');
};

// Створення нового проекту
export const createProject = (projectData) => {
  return api.post('/projects', projectData);
};

// Отримання деталей документа
export const fetchDocumentDetails = (documentId) => {
  return api.get(`/document/${documentId}`);
};
