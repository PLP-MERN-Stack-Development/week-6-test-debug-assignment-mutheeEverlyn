import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

// fetchMock.enableMocks(); // Temporarily disable global mocks

// Set a base URL for fetch calls in the test environment
process.env.REACT_APP_API_BASE_URL = 'http://localhost:5000';

// Fix for persistent act warnings in CRA/react-scripts environments
global.IS_REACT_ACT_ENVIRONMENT = true; 