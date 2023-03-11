import React from 'react';
import {
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import {
    FaBeer,
    FaPlus,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Sidebar from './sidebar';
import Layout from './index';
import Home from '../pages/home';
import Finance from '../pages/finance';

export default () => {
    const { t } = useTranslation();
    return (
        <Layout
            sidebar={Sidebar}
            menu={[
                {
                    anchor: t("pageHome"),
                    href: "",
                    icon: FaPlus,
                },
                {
                    anchor: t("pageFinance"),
                    href: "test-url2",
                    icon: FaBeer,
                },
            ]}
        >
        <Routes>
            <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path="test-url2" element={<Finance />} />
                    <Route path="test-url3" element={<div>test3</div>} />
                    <Route path="test-url4" element={<div>test4</div>} />
            </Route>
        </Routes>
        </Layout>
    );
};
