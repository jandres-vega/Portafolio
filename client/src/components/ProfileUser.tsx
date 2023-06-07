import React from 'react';
import {CustomImg} from "../common/CustomImg.tsx";
import imgSinFoto from '../assets/sin foto de perfil.jpg'
const ProfileUser:React.FC = () => {
    return (
        <div className="flex justify-center gap-20">
            <div className="m-3">
                <CustomImg className="rounded-full" src={imgSinFoto} alt="imagen sin foto" />
            </div>
            <div className="flex items-center">
                <h1 className="text-4xl">Desarrollador Web Full-Stack</h1>
            </div>
        </div>
    );
};

export {ProfileUser};