import React from 'react';
import {
    Routes,
    Route,
    Outlet,
    NavLink,
} from "react-router-dom";
import {
    FaBeer,
    FaPlus,
    FaArrowUp,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import {
    Layout,
    Sidebar,
    ScrollTop,
} from 'marcinpl87-library';
import Home from '../pages/home';
import Finance from '../pages/finance';

const getNavLink = (url: string) => {
    return ({children}: {children: React.FC}) => (
        <NavLink
            className={({isActive}) =>
                isActive
                    ? "active"
                    : ""
            }
            to={url}
        >
            {children}
        </NavLink>
    );
};

export default () => {
    const { t } = useTranslation();
    return (
        <Layout
            sidebar={Sidebar}
            menu={[
                {
                    anchor: t("pageHome"),
                    iconComp: FaPlus,
                    linkComp: getNavLink("") as React.FC<{}>,
                },
                {
                    anchor: t("pageFinance"),
                    iconComp: FaBeer,
                    linkComp: getNavLink("test-url2") as React.FC<{}>,
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
            <ScrollTop
                offset={300}
                iconComp={FaArrowUp}
            />
        </Layout>
    );
};
