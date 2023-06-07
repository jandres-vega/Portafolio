import React from 'react';
import {CustomImg} from "../common/CustomImg.tsx";

const ProfileUser:React.FC = () => {
    return (
        <div className="flex justify-center gap-20">
            <div className="m-3">
                <CustomImg className="rounded-full max-w-xs" src="https://res.cloudinary.com/cloudmulti/image/upload/v1686098790/Portafolio/profile_lqxzpw.png" alt="imagen sin foto" />
            </div>
            <div className="flex items-center">
                <h1 className="text-4xl">Desarrollador Web Full-Stack</h1>
            </div>
        </div>
    );
};

export {ProfileUser};