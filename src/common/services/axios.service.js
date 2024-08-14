import axios from 'axios';
import { apiIdentifiers, apiCredentials } from '../../environments/config/axios.config';

const axiosInstances = {};

const createInstance = (config) => {
  const { keyConfig, baseURL, headers } = config;

  if (!axiosInstances[keyConfig]) {
    axiosInstances[keyConfig] = axios.create({ baseURL, headers });
  }
  return axiosInstances[keyConfig];
};

const getInstance = (nameInstance) => {
  return axiosInstances[nameInstance];
};

const requestInterceptor = (config) => {
  // Modify the request configuration here if necessary
  return config;
};

const errorInterceptor = (error) => {
  // Handle errors centrally here
  return Promise.reject(error);
};

// Configure interceptors for each instance
for (const key in apiIdentifiers) {
  const keyConfig = apiIdentifiers[key];
  const { baseURL, headers } = apiCredentials[keyConfig];
  const instance = createInstance({ keyConfig, baseURL, headers });
  instance.interceptors.request.use(requestInterceptor);
  instance.interceptors.response.use((response) => response, errorInterceptor);
}

export { getInstance };
