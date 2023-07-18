import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import {Header} from "../components/Header.tsx";
import {LandingPage} from "../pages/LandingPage.tsx";
import {Layout} from "../containers/Layout.tsx";
import {Projects} from "../pages/Projects.tsx";
import {Certificates} from "../pages/Certificates.tsx";
import {Technologies} from "../pages/Technologies.tsx";
import {Contact} from "../pages/Contact.tsx";
import {NotFound} from "../pages/NotFound.tsx";
import {Login} from "../pages/Login.tsx";
import RegisterProject from "../pages/RegisterProject.tsx";
const App: React.FC = () => {
    return (
        <HashRouter>
            <Header />
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/certificates" element={<Certificates />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register-project" element={<RegisterProject />} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout>
        </HashRouter>
    );
};
export {App};

