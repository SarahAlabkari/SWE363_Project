// Path: src/components/GuideReviews.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Added for API request
import StarRating from './StarRating';

const GuideReviews = () => {
  const [reviews, setReviews] = useState([]); // Now handles an array of reviews
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const guideId = localStorage.getItem('guideId'); // Get guideId from local storage
        if (!guideId) return;

        const response = await axios.get(`http://localhost:5000/api/reviews/guide/${guideId}`); // Backend API call
        setReviews(response.data);
      } catch (error) {
        console.error('Failed to fetch guide reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Friendly loading message
  }

  if (!reviews.length) {
    return <div>No reviews found for this guide.</div>; // Fallback for no data
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '1rem',
        boxSizing: 'border-box',
        borderRadius: '0.5rem',
      }}
      className="shadow-sm"
    >
      {reviews.map((review, index) => (
        <div
          key={index}
          className="d-flex"
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: '1rem',
            gap: '0.5rem',
          }}
        >
          <p style={{ margin: 0 }}>By: @{review.reviewer}</p>
          <StarRating rating={review.stars} />
        </div>
      ))}
    </div>
  );
};

export default GuideReviews;
