import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './GuideProfile.css';
import ReviewComponent from '../components/ReviewComponent';
import MenuBar from "../components/MenuBar";
import ActivitiesCarousel from '../components/ActivitiesCarousel';

const GuideProfile = () => {

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/" },
    { label: "Where To?", path: "/pages/PlanExperience" },
    { label: "Find a Local", path: "/pages/TourGuides" },
    { label: "My Plan", path: "/" },
    { label: "Wishlist", path: "/" },
    { label: "Login", path: "/" },
  ];

  const { guideName } = useParams();

  const formattedName = guideName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

    const [guideData, setGuideData] = useState(null);

    
    useEffect(() => {
      const mockGuideData = {
        name: formattedName,
        email: 'example@email.com',
        phone: '+966 500 000 000',
        bio: 'Bio about the person',
        rating: 5,
        ratingCount: 113,
        stars: '☆☆☆☆☆',
      };
      setGuideData(mockGuideData);
    }, [formattedName]);

    if (!guideData) {
      return <div className="text-center mt-5">Loading...</div>;
    }
  
  // const guideData = {
  //   name: formattedName,
  //   email: 'example@email.com',
  //   phone: '+966 500 000 000',
  //   bio: 'Bio about the person',
  //   rating: 5,
  //   ratingCount: 113,
  //   stars: '☆☆☆☆☆',
  // };

  

  return (
    <>
      
      <MenuBar links={navLinks} />

      <div className="guide-profile-page container">
        <h1 className="text-center mt-5" style={{ color: '#5c4033' }}>Welcome to {guideData.name}'s Profile! </h1>
        <p className="text-center"> This page can show full details about this tour guide.</p>

        <h2 className="text-center fw-bold mt-5" style={{ color: '#5c4033' }}>
  Local Tour Guides in Destination
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
            <label className="fw-bold d-block mb-1">{guideData.name}</label>
            <div className="bio-box">{guideData.bio}</div>
          </div>

          <div className="contact-box-small">
            <p className="mb-1">Email: {guideData.email}</p>
            <p>Phone: {guideData.phone}</p>
          </div>
        </div>

        <div className="text-center mt-2 text-muted small">
          Contact Me for Customized Tours or Questions!
        </div>

        <div style={{ height: '100px' }}></div>

        <div className="customize-box text-center py-4">
          <h4 className="fw-bold mb-2">Customize Your Tour</h4>
          <p className="text-muted">Contact your tour guide to know more!</p>
        </div>


       {/*Activity section*/}
       <div className="carousel-full-width-wrapper my-5">
  <ActivitiesCarousel />
</div>


        {/* Traveler Thoughts Section */}
        <div className="review-section mt-5">
          <h3 className="text-center fw-bold mb-3">5.0 Traveler Thoughts</h3>
          <p className="text-center">⭐⭐⭐⭐⭐ (13)</p>

          <div className="review-grid">
            {/* Render multiple review components */}
            {Array.from({ length: 6 }).map((_, index) => (
              <ReviewComponent key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideProfile;
