import React from "react";
import Props from '../types/propsChildren.ts'
const Layout: React.FC<Props> = ({children}) => {
    return (
        <div className="bg-purple h-screen">
            {children}
        </div>
    );
};

export {Layout};