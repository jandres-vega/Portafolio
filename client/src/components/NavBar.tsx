import React from 'react';
import {NavLink} from "react-router-dom";
import {listNavBar} from '../utils/infoLinks.ts';
const NavBar:React.FC = () => {
    //const styleActive = "underline underline-offset-4"
    return (
        <nav>
            <ul className="flex items-center gap-10">
                {
                    listNavBar.map(item => (
                        <li className="font-semibold text-white cursor-pointer rounded-2xl px-2" key={item.id}>
                            <NavLink to={item.route}>{item.link}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export {NavBar};