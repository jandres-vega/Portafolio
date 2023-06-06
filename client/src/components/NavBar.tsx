import React from 'react';
// import {NavLink} from "react-router-dom";
import {listNavBar} from '../utils/infoLinks.ts';
const NavBar:React.FC = () => {
    // const styleActive = "underline underline-offset-4"
    return (
        <nav>
            <ul className="flex items-center gap-10">
                {
                    listNavBar.map(item => (
                        <li className="font-semibold text-white" key={item.id}>
                            {item.link}
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export {NavBar};