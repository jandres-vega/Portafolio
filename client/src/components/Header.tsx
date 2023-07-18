import React from 'react';
import imgLogo from '../assets/logo-portafolio.png';
import {NavBar} from "./NavBar.tsx";
import {Link} from "react-router-dom";
const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between px-40 bg-dark-blue">
            <div className="w-20 h-20">
                <Link to="/">
                    <img className="w-full object-cover" src={imgLogo} alt="img-logo"/>
                </Link>
            </div>
            <div >
                <NavBar />
            </div>
            <div className="mr-10">
                <Link to="/login">
                    <button className="text-white">Iniciar Sesion</button>
                </Link>
            </div>
        </header>
    );
};

export {Header};