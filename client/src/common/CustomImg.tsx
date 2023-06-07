import React from 'react';
import Props from '../types/propsImg.ts';
const CustomImg: React.FC<Props> = (props) => {
    return <img  {...props} alt={props.alt}/>
};

export {CustomImg};