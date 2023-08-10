import React from 'react';
import imgPrueba from '../assets/Captura de pantalla (8).png'
import {CustomIcon} from "../common/CustomIcon.tsx";
import {FaGithub} from 'react-icons/fa'
const CardProject:React.FC = () => {
    return (
        <>
            <div className="w-full h-fit group">
                <div className="relative overflow-hidden">
                    <img className="w-full object-cover rounded-xl"
                         src={imgPrueba}
                         alt=""
                    />
                    <div className="absolute  w-full bg-black/20 flex items-center bg-dark-blue
                                            justify-center -bottom-10 group-hover:bottom-0 p-3
                                            opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                        <div className="w-full items-center flex flex-col gap-3 mb-3">
                            <CustomIcon className="text-center bg-dark-blue w-40 rounded text-white text-3xl cursor-pointer" icon={FaGithub} />
                            <button className="bg-dark-blue hover:border w-full text-white rounded-xl  font-bold">Ver detalles</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export {CardProject};