import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from './layout';
import './styles.scss';

const queryClient = new QueryClient();

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
