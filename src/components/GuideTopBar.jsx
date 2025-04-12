import React from "react";
import { Link } from "react-router-dom";

const GuideTopBar = () => {
    return (
        <div
            style={{
                backgroundColor: 'white',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '10px',
                paddingLeft: '1rem',
                paddingRight: '1rem',
            }}>
            
            <img
            src="./jadwill logo.png"
            alt="Jadwill Logo"
            style={{ width: '5rem', padding: '0.0px', margin: '0px'}}
            />

            <div style={{ display: 'flex', flexDirection: 'row', gap: '5rem' }}>
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/GuideDashboard">Profile</Link>
                <button>Logout</button>
            </div>
        </div>
    );

}

export default GuideTopBar;