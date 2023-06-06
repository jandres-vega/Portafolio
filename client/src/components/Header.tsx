import React from 'react';
import imgLogo from '../assets/logo-portafolio.png';
import {NavBar} from "./NavBar.tsx";
const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between px-40 bg-dark-blue">
            <div className="w-20 h-20">
                <img className="w-full object-cover" src={imgLogo} alt="img-logo"/>
            </div>
            <div >
                <NavBar />
            </div>
            <div className="mr-10">
                <button className="text-white">Iniciar Sesion</button>
            </div>
        </header>
    );
};

export {Header};