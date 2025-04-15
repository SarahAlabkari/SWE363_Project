import React, { useState, useEffect } from 'react';
import '../App.css';

function Tour(props) {

    const [tour, setTour] = useState(null);

    //This will later be fetched from a database
    useEffect(() => {
        const mockTour = {
            name: 'Alula Tour',
            TourID: 1,
            tourGuid: 'Sarah Alabkari',
            date: 'April 10, 2025',
            time: '9:00 AM - 4:00 PM',
            startLocation: 'Alula, Saudi Arabia',
            description: 'Join us for a day full of adventure!',
            activitiesNames: ['Hiking in AlUlas rock formations', 'Hot Air Baloon Ride', 'Sandboarding'],
            activitiesIDs: [1, 2, 3],
            state: 'Active',
        };
        setTour(mockTour);
    }, []);

    if(!tour) {
        return(<div>Loading....</div>);
    }

    return(<div className="card" style={{width: '12rem', margin: '10px', borderColor: 'var(--green-color)', borderWidth: '3px', padding: '5px'}}>
        <div className="card-body" style={{padding: '3px'}}>
            <h5 className="card-title">{tour.name}</h5>
            <p className="card-subtitle text-body-secondary">By: {tour.tourGuid}</p>
            <p>Activities:</p>
            <ul>
                {tour.activitiesNames.map((act, index) => (
                    <li key={index}>{act}</li>
                ))}
            </ul>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" id="evnt-details-button" className="btn guide-button">More details</button>
            </div>        
        </div>
    </div>);
                    
}

export default Tour;

