import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out-cubic'
});

// Check if we're in the browser environment
if (typeof window !== 'undefined') {
  // Check if we're in the admin context
  const isAdminPage = window.location.pathname.startsWith('/admin');

  // Only render the App component if we're not in the admin context
  if (!isAdminPage) {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      createRoot(rootElement).render(
        <StrictMode>
          <App />
        </StrictMode>
      );
    }
  }
}