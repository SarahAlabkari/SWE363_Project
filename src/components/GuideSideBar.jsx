import React from "react";
import { Link } from "react-router-dom";

const GuideSideBar = () => {
    return (
        <div
            className="d-flex flex-column align-items-center"
            style={{
                backgroundColor: 'var(--green-color)',
                height: '30rem',
                width: '7rem',
                borderRadius: '10px',
                justifyContent: 'space-evenly',
                textAlign: 'center',
            }}>
            <Link to={'/GuideDashboard'} >Dashboard</Link>
            <Link to={'/GuideProfile'}>Profile</Link>
            <Link to={'/ToursCenter'}>Tours Center</Link>
        </div>
    );
}

export default GuideSideBar;