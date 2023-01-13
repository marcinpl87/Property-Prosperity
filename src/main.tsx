import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Layout from './layout';
import './styles.scss';

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <React.StrictMode>
        <HashRouter>
            <Layout />
        </HashRouter>
    </React.StrictMode>
);
