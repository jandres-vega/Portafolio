import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import {Header} from "../components/Header.tsx";
import {LandingPage} from "../pages/LandingPage.tsx";
import {Layout} from "../containers/Layout.tsx";
const App: React.FC = () => {
    return (
        <HashRouter>
            <Header />
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
};
export {App};

