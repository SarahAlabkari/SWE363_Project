import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Activity({ activity, customLink }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleClick = () => {
    if (customLink) {
      navigate(customLink);
    } else {
      navigate(`/ActivityDetails/${activity._id}`);
    }
  };

  if (!activity) return <div>Loading...</div>;

  return (
    <div className="card" style={{ width: '12rem', margin: '10px', borderColor: 'var(--green-color)', borderWidth: '3px', padding: '5px', position: 'relative' }}>
      <button onClick={toggleLike} className="btn p-0" style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', fontSize: '1.5rem', color: liked ? 'red' : 'gray' }} aria-label="Add to wishlist">
        <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'}`}></i>
      </button>

      <img src={activity.image} className="card-img-top" alt="Event" style={{ height: '45%', marginBottom: '5px' }} />
      <div className="card-body" style={{ padding: '3px' }}>
        <h5 className="card-title">{activity.eventName}</h5>
        <p className="card-subtitle text-body-secondary">By: {activity.provider?.username}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="button" id="evnt-details-button" className="btn guide-button" onClick={handleClick}>
            More details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Activity;
