import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

const rootElement = document.getElementById('root');

if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    // eslint-disable-next-line no-console
    console.error('Global error:', event.error || event.message);
  });
  window.addEventListener('unhandledrejection', (event) => {
    // eslint-disable-next-line no-console
    console.error('Unhandled promise rejection:', event.reason);
  });
}

if (rootElement) {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>,
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to mount React app:', error);
    rootElement.innerHTML =
      '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:system-ui;padding:24px;text-align:center;">' +
      '<div>' +
      '<h1 style="font-size:20px;margin:0 0 8px;">Unable to load the app</h1>' +
      '<p style="font-size:14px;margin:0;">Please refresh the page or try another browser.</p>' +
      '</div>' +
      '</div>';
  }
} else {
  // eslint-disable-next-line no-console
  console.error('Root element not found. App did not mount.');
}
