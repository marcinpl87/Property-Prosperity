import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import i18n from 'i18next';
import i18nConfig from '../i18n';
import { initReactI18next } from 'react-i18next';
import Layout from '../layout/content';

i18n
    .use(initReactI18next)
    .init(i18nConfig);

describe('Layout', () => {
    let layoutContainer;

    beforeEach(() => {
        layoutContainer = render(
            <HashRouter>
                <Layout />
            </HashRouter>
        );
    });

    it('renders the Layout component', () => {
        expect(layoutContainer.getByTestId('layout-container')).toBeInTheDocument();
    });

    it('renders the Sidebar component', () => {
        expect(layoutContainer.getByTestId('sidebar-container')).toBeInTheDocument();
    });

    it('renders the Home page component', () => {
        expect(layoutContainer.getByTestId('page-home-container')).toBeInTheDocument();
    });
});
