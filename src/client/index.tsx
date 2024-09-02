// Reactのエントリポイント
import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import 'vite/modulepreload-polyfill';
import './style.scss';
import '@tabler/icons-webfont/dist/tabler-icons.min.css';
import { App } from './App';

const app = createRoot(document.getElementById('app'));

app.render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </StrictMode>,
);