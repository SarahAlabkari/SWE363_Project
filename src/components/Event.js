import React, { useState, useEffect } from 'react';
import '../App.css';

function Event(props) {

    const [event, setEvent] = useState(null);

    //This will later be fetched from a database
    useEffect(() => {
        const mockEvent = {
          name: 'Coding Bootcamp 2025',
          owner: 'KFUPM',
          date: 'April 10, 2025',
          time: '9:00 AM - 4:00 PM',
          location: 'San Francisco, CA',
          description: 'Join us for a day of hands-on coding workshops!',
          imageUrl: 'https://www.okoone.com/wp-content/uploads/2025/02/Tech-innovation-391.jpg',
          state: 'Active',
        };
        setEvent(mockEvent);
    }, []);

    if(!event) {
        return(<div>Loading....</div>);
    }

    return(<div className="card" style={{width: '12rem', margin: '10px', borderColor: 'var(--green-color)', borderWidth: '3px', padding: '5px'}}>
        <img src={event.imageUrl} className="card-img-top" alt="Event image" style={{ height: '45%', marginBottom: '5px'}}/>
        <div className="card-body" style={{padding: '3px'}}>
            <h5 className="card-title">{event.name}</h5>
            <p className="card-subtitle text-body-secondary">By: {event.owner}</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" id="evnt-details-button" className="btn">More details</button>
            </div>        
        </div>
    </div>);
                    
}

export default Event;

