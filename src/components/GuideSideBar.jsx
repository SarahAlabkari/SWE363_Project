import React from "react";
import { Link } from "react-router-dom";

const GuideSideBar = () => {
    return (
        <div
            className="d-flex flex-column"
            style={{
                backgroundColor: 'var(--green-color)',
                height: '100vh',
                width: '7rem',
                borderRadius: '10px',
                paddingLeft: '0.5rem',
                gap: '5rem',
            }}>
            <Link to={'/GuideDashboard'} >Dashboard</Link>
            <Link to={'/GuideProfile'}>Profile</Link>
            <Link to={'/ToursCenter'}>Tours Center</Link>
        </div>
    );
}

export default GuideSideBar;