import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';

const GuideReviews = () => {
    // This will later be fetched from a database
    const [review, setReview] = useState(null);

    useEffect(() => {
        const mockReview = {
            name: '@userName',
            stars: 5,
        };
        setReview(mockReview);
    }, []);

    if (!review) {
        return <div>Loading....</div>;
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

            {[...Array(3)].map((_, index) => (
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
                    <p style={{ margin: 0 }}>By: {review.name}</p>
                    <StarRating rating={review.stars} />
                </div>
            ))}
        </div>
    );
};

export default GuideReviews;
