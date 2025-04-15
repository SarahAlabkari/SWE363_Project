import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


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
                <Link to="/GuideProfile">Profile</Link>
                <Link to="/GuideDashboard">Dashboard</Link>
                <Link to="/GuideTourCenter">Tour Center</Link>
                <button type="button" id="logout-button" className="btn">Log out</button>
            </div>
        </div>
    );

}

export default GuideTopBar;