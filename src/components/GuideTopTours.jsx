import React, { useState, useEffect } from 'react';

const GuideTopTours = () => {


    const [topTours, setTopTours] = useState(null);

    //This will later be fetched from a database
    useEffect(() => {
        const mockTopTours = {
            tourName: 'Tour xyz',
            attendees: '20',
        };
        setTopTours(mockTopTours);
    }, []);

    if(!topTours) {
        return(<div>Loading....</div>);
    }

    return (
        <div className='d-flex flex-column gap-3'>
            <div className='rounded d-flex justify-content-around' style={{ backgroundColor: 'white', width: '25rem', paddingTop: '1.5rem'}}>
                <p>{topTours.tourName}</p>
                <p>with { topTours.attendees } attendees</p>
            </div>
            <div className='rounded d-flex justify-content-around' style={{ backgroundColor: 'white', width: '25rem', paddingTop: '1.5rem'}}>
                <p>{topTours.tourName}</p>
                <p>with { topTours.attendees } attendees</p>
            </div>
            <div className='rounded d-flex justify-content-around' style={{ backgroundColor: 'white', width: '25rem', paddingTop: '1.5rem'}}>
                <p>{topTours.tourName}</p>
                <p>with { topTours.attendees } attendees</p>
            </div>
        </div>
    );
}

export default GuideTopTours;