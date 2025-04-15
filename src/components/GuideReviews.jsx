import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';


const GuideReviews = () => {
    //This will later be fetched from a database
    const [review, setReview] = useState(null);

    useEffect(() => {
        const mockReview = {
            name: '@userName',
            stars: 5,
        };
        setReview(mockReview);
    }, []);

    if(!review) {
        return(<div>Loading....</div>);
    }
    
    return (
        <div
            style={{
                backgroundColor: 'white',
                width: '25rem',
                padding: '0.5rem',
            }}
            className="rounded"
        >
            <div className='d-flex' style={{justifyContent: 'space-around'}}>
                <p>By: {review.name}</p>
                <div>
                    <StarRating rating={review.stars} />
                </div>
            </div>
                        <div className='d-flex' style={{justifyContent: 'space-around'}}>
                <p>By: {review.name}</p>
                <div>
                    <StarRating rating={review.stars} />
                </div>
            </div>
                        <div className='d-flex' style={{justifyContent: 'space-around'}}>
                <p>By: {review.name}</p>
                <div>
                    <StarRating rating={review.stars} />
                </div>
            </div>
            
        </div>
    );
}

export default GuideReviews;