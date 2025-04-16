import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";


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
                width: '30rem',
                padding: '0.5rem',
                justifyContent: 'space-around',
            }}
            className="rounded"
        >
            <div className='d-flex'>
                <p>By: {review.name}</p>
                <div>
                    <ReactStars
                        count={5}
                        value={review.stars}
                        size={24}
                        activeColor={'var(--green-color)'}
                    />
                </div>
                
            </div>
            <div className='d-flex'>
                <p>By: {review.name}</p>
                <div>
                    <ReactStars
                        count={5}
                        value={review.stars}
                        size={24}
                        activeColor={'var(--green-color)'}
                    />
                </div>
            </div>
             <div className='d-flex'>
                <p>By: {review.name}</p>
                <div>
                    <ReactStars
                        count={5}
                        value={review.stars}
                        size={24}
                        activeColor={'var(--green-color)'}
                    />
                </div>
                
            </div>


        </div>
    );
}

export default GuideReviews;