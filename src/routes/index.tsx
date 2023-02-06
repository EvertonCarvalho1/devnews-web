import React from "react";

import { Route, Routes } from "react-router-dom";

import { NewsList } from '../pages/NewsList'
import { NewsDetail } from '../pages/NewsDetail'
import { AddNews } from '../pages/AddNews'
import { EditNews } from '../pages/EditNews'


const RoutesApp: React.FC = () => {
    return (

        <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/news/details" element={<NewsDetail />} />
            <Route path="/news/create" element={<AddNews />} />
            <Route path="/news/update" element={<EditNews />} />
        </Routes>

    );
};

export default RoutesApp;
