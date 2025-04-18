import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Activity(props) {
  const [activity, setActivity] = useState(null);
  const [liked, setLiked] = useState(false); // ❤️ Wishlist state
  const navigate = useNavigate();

  useEffect(() => {
    const mockActivity = {
      name: 'Hiking in AlUlas rock formations',
      activityID: 1,
      activityPrvider: 'Safer',
      date: 'April 10, 2025',
      time: '9:00 AM',
      location: 'Alula, Saudi Arabia',
      description: 'Explore AlUla\'s scenic trails and rock formations on a guided desert hike.',
      imageUrl: "/alula2.jpg",
      state: 'Active',
    };
    setActivity(mockActivity);
  }, []);

  const toggleLike = () => {
    setLiked(!liked);
    // TODO: Add logic to add/remove from wishlist in DB/localStorage
  };

  if (!activity) return <div>Loading....</div>;

  return (
    <div
      className="card"
      style={{
        width: '12rem',
        margin: '10px',
        borderColor: 'var(--green-color)',
        borderWidth: '3px',
        padding: '5px',
        position: 'relative',
      }}
    >
      {/* ❤️ Wishlist Heart Icon */}
      <button
        onClick={toggleLike}
        className="btn p-0"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          color: liked ? 'red' : 'gray',
        }}
        aria-label="Add to wishlist"
      >
        <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'}`}></i>
      </button>

      <img
        src={activity.imageUrl}
        className="card-img-top"
        alt="Event"
        style={{ height: '45%', marginBottom: '5px' }}
      />
      <div className="card-body" style={{ padding: '3px' }}>
        <h5 className="card-title">{activity.name}</h5>
        <p className="card-subtitle text-body-secondary">By: {activity.activityPrvider}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            type="button"
            id="evnt-details-button"
            className="btn guide-button"
            onClick={() => navigate(`/ActivityDetails/${activity.activityID}`)}
          >
            More details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Activity;
