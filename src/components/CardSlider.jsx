import React
    from "react";
const CardSlider = ({ children }) => {
    return <div className="d-flex gap-5" style={{backgroundColor: 'var(--brown-color)'}}>
        {children}
    </div>;
};

export default CardSlider;
