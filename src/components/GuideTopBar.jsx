import React from "react";
import { Link } from "react-router-dom";

const GuideTopBar = () => {
    // return (<div style={{ backgroundColor: 'white', textAlign: 'center'}}> 
    //     <div style={{width: '100%', display: 'flex', flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
    //         <Link to="/Home" style={{ hover: 'underline' }}>Home</Link>
    //         <Link to="/About" style={{ hover: 'underline' }} >About</Link>
    //         <img src="./jadwill logo.png" alt="Logo" style={{ width: '5rem'}} />
    //         <Link to="/GuideProfile" style={{ hover: 'underline' }} >Profile</Link>
    //     </div>
    // </div> 
    // );
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