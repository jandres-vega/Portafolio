import React from 'react';
import imgPrueba from '../assets/Captura de pantalla (8).png'
import {CustomIcon} from "../common/CustomIcon.tsx";
import {FaGithub} from 'react-icons/fa'
const CardProject:React.FC = () => {
    return (
        <>
            <div className="w-full h-fit group">
                <div className="relative overflow-hidden">
                    <img className="h-1/2 w-full object-cover rounded-xl"
                         src={imgPrueba}
                         alt=""
                    />
                    <div className="absolute  w-full bg-black/20 flex items-center
                                            justify-center -bottom-10 group-hover:bottom-0
                                            opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                        <div className="w-full items-center flex flex-col gap-3 mb-3">
                            <CustomIcon className="text-center bg-dark-blue w-40 rounded text-white text-3xl cursor-pointer" icon={FaGithub} />
                            <button className="bg-dark-blue border-2 w-full text-white rounded-xl  font-bold">Ver</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export {CardProject};

// <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
//     <div className="h-96 w-72">
//         <img className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500" src={imgPrueba} alt=""/>
//     </div>
//     <div className="absolute inset-0 bg-gradient-to-b via-20% from-25% to-black"></div>
//     <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%]">
//         <h1 className="text-3xl font-bold text-purple">Beauty</h1>
//         <p className="text-lg italic text-purple mb-3">sdadssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
//         <button className="rounded-full bg-red-500 py-2 px-3.5 text-sm capitalize text-dark-blue">See MORE</button>
//     </div>
// </div>

// <div className="fixed bottom-16">
//     <p className="text-2xl font-semibold text-purple">
//         All images are from <a href="https://unsplash.com" className="text-dark-blue">Unsplash</a>
//     </p>
// </div>
