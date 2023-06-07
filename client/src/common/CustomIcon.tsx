import React from "react";
import Props from "../types/propsIcon.tsx";
const CustomIcon:React.FC<Props> = ({ icon, className, ...rest }) => {
    const IconCustom = icon
    return <IconCustom className={className} {...rest} />
};

export {CustomIcon};