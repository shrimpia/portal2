// Reactのエントリポイント
import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import 'vite/modulepreload-polyfill';

import routes from '~react-pages';

const app = createRoot(document.getElementById('app'));

const App = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            {useRoutes(routes)}
        </Suspense>
    );
};

app.render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </StrictMode>,
);