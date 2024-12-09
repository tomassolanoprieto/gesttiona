import CMS from 'decap-cms-app';
import { es } from 'decap-cms-locales';
import { config } from './config';

// Register the Spanish locale
CMS.registerLocale('es', es);

// Initialize the CMS with the configuration
CMS.init({ config });