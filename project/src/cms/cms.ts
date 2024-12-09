import CMS from 'decap-cms-app';
import { es } from 'decap-cms-locales';
import { config } from './config';

// Ensure we're in the browser environment
if (typeof window !== 'undefined') {
  // Register the Spanish locale
  CMS.registerLocale('es', es);

  // Initialize the CMS with the configuration
  CMS.init({ config });
}