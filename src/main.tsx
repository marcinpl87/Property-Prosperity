import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nConfig from './i18n';
import Layout from './layout';
import './styles.scss';

const queryClient = new QueryClient();

i18n
    .use(initReactI18next)
    .init(i18nConfig);

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <React.StrictMode>
        <HashRouter>
            <QueryClientProvider client={queryClient}>
                <Layout />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </HashRouter>
    </React.StrictMode>
);
