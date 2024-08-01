import React from 'react';
import { createRoot } from 'react-dom/client';
import ClientApp from './ClientApp';
import './styles/App.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ClientApp />
    </React.StrictMode>
);

