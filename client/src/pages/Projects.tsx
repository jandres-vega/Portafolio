import React from 'react';
import {CardProject} from "../components/CardProject.tsx";
const Projects:React.FC = () => {
    return (
        <div className="grid grid-cols-3 p-3 gap-3">
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
        </div>
    );
};

export {Projects};