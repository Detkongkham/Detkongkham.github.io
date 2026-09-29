import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource-variable/inter';
import '@fontsource/noto-sans-lao/400.css';
import '@fontsource/noto-sans-lao/600.css';
import '@fontsource/noto-sans-lao/700.css';
import './index.css';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
