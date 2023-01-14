import React from 'react';
import {
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import Home from '../pages/home';
import Finance from '../pages/finance';

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route index element={<Home />} />
                <Route path="test-url2" element={<Finance />} />
                <Route path="test-url3" element={<div>test3</div>} />
                <Route path="test-url4" element={<div>test4</div>} />
            </Route>
        </Routes>
    );
};
