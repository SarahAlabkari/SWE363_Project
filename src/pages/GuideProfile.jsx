import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './GuideProfile.css';
import ReviewComponent from '../components/ReviewComponent';
import MenuBar from "../components/MenuBar";
import CardSlider from '../components/CardSlider';
import Activity from '../components/Activity';

const GuideProfile = () => {
  const navLinks = [
    { label: "Home", path: "/Home" },
    { label: "About", path: "/About" },
    { label: "Where To?", path: "/WhereTo" },
    { label: "Find a Local", path: "/TourGuides" },
    { label: "My Plan", path: "/MyPlan" },
    { label: "Wishlist", path: "/MyWishlist" },
    { label: "Login", path: "/Login" },
  ];

  const [reviews, setReviews] = useState([]);

  const { guideName } = useParams();

  const formattedName = guideName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const [guideData, setGuideData] = useState(null);
  const [destination, setDestination] = useState("Alula");

  useEffect(() => {
    const mockGuideData = {
      name: formattedName,
      email: 'example@email.com',
      phone: '+966 500 000 000',
      bio: 'I am a Saudi local who loves sharing stories, culture, and the beauty of everyday life in Saudi Arabia with travellers. With 3 years of experience leading tours across the country, I aim to make each journey memorable, informative, and fun for all visitors.',
      rating: 5,
      ratingCount: 113,
      stars: '☆☆☆☆☆',
    };

    const mockReviews = [
      { title: "Great Experience", body: "The guide was knowledgeable and friendly.", name: "Sara Omar." },
      { title: "Loved it!", body: "Everything was perfectly organized.", name: "Omar Khalid." },
      { title: "Amazing!", body: "This tour exceeded my expectations.", name: "Layla Alghamdi." },
      { title: "Highly Recommend", body: "The guide shared so many cultural insights.", name: "Mohammed Fahad." },
      { title: "Wonderful Guide", body: "Warm and welcoming experience.", name: "Lama Abdullah." },
      { title: "Fantastic Trip", body: "Enjoyed every minute of it.", name: "Fahad Alanazi." }
    ];

    setGuideData(mockGuideData);
    setReviews(mockReviews);
  }, [formattedName]);

  if (!guideData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <>
      <MenuBar links={navLinks} />

      <div className="guide-profile-page container">
        <h1 className="text-center mt-5" style={{ color: '#5c4033' }}>
          Welcome to {guideData.name}'s Profile!
        </h1>
        <p className="text-center">This page can show full details about this tour guide.</p>

        <h2 className="text-center fw-bold mt-5" style={{ color: '#5c4033' }}>
          Local Tour Guide in {destination}
        </h2>

        <div className="d-flex align-items-start gap-4 mt-4 flex-wrap justify-content-center">
          <div className="d-flex flex-column align-items-center">
            <img
              src="https://via.placeholder.com/130"
              alt="Guide"
              className="profile-img mb-3"
            />
            <div className="rating-box d-inline-block px-3 py-1 rounded-pill mb-2">
              <span>{guideData.rating}</span>
              <span className="ms-2">{guideData.stars}</span>
              <span className="ms-2 text-muted">({guideData.ratingCount})</span>
            </div>
          </div>

          <div className="bio-box-container">
            <label className="fw-bold d-block mb-1" style={{ color: 'var(--purpule-color)' }}>
              {guideData.name}
            </label>
            <div className="bio-box">{guideData.bio}</div>
          </div>

          <div className="contact-box-small">
            <p className="mb-1">Email: {guideData.email}</p>
            <p>Phone: {guideData.phone}</p>
          </div>
        </div>

        <div style={{ height: '100px' }}></div>

        <div className="customize-box text-center py-4">
          <h4 className="fw-bold mb-2" style={{ color: 'var(--purpule-color)' }}>
            Customize Your Tour
          </h4>
          <p className="text-muted">Contact your tour guide to know more!</p>
        </div>

        <div className="my-5">
          <CardSlider>
            <Activity customLink="/ViewActivity" />
            <Activity customLink="/ViewActivity" />
            <Activity customLink="/ViewActivity" />
          </CardSlider>
        </div>

        <div className="review-section mt-5">
          <h3 className="text-center fw-bold mb-3" style={{ color: '#5c4033' }}>
            5.0 Traveler Thoughts
          </h3>
          <p className="text-center">⭐⭐⭐⭐⭐ ({reviews.length})</p>

          <div className="review-grid">
            {reviews.map((review, index) => (
              <div
                key={index}
                style={{
                  border: '2px solid rgb(124, 121, 121)',
                  padding: '8px',
                  margin: '8px',
                  borderRadius: '8px',
                  width: '300px',
                  backgroundColor: '#fdfcf9'
                }}
              >
                <div style={{ fontSize: '20px', marginBottom: '8px' }}>⭐⭐⭐⭐⭐</div>
                <div style={{
                  width: '90%',
                  marginBottom: '4px',
                  padding: '6px',
                  backgroundColor: '#f0f0e9',
                  borderRadius: '4px'
                }}>{review.title}</div>
                <div style={{
                  width: '90%',
                  marginBottom: '4px',
                  padding: '6px',
                  backgroundColor: '#f0f0e9',
                  borderRadius: '4px'
                }}>{review.body}</div>
                <div style={{
                  width: '90%',
                  marginBottom: '4px',
                  padding: '6px',
                  backgroundColor: '#f0f0e9',
                  borderRadius: '4px'
                }}>{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideProfile;
