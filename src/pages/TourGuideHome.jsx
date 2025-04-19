// Path: src/pages/TourGuideHome.jsx

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for Logout handling
import MenuBar from "../components/MenuBar";
import ImageBlock from "../components/ImageBlock";
import FeatureCard from "../components/FeatureCard";
import HowItWorks from "../components/HowItWorks";
import Activity from "../components/Activity";
import CardSlider from "../components/CardSlider";

const heroImagePath = "hero9.png"; 

// Services for "What Makes Us Different" section
const services = [
  {
    icon: "bi-geo-alt",
    title: "Local Expertise",
    description:
      "Discover hidden gems and authentic experiences guided by locals who truly know their city. With Jaddwill, you're not just visiting — you're exploring through the eyes of someone who lives there.",
  },
  {
    icon: "bi-sliders",
    title: "Personalized Trips",
    description:
      "Every traveler is unique — your journey should be too. Jaddwill matches you with personalized experiences based on your interests, pace, and travel style. No cookie-cutter tours, just your kind of adventure.",
  },
  {
    icon: "bi-people",
    title: "Supporting Local Communities",
    description:
      "Your travel choices make a difference. By booking through Jaddwill, you directly support local guides, artisans, and small businesses — helping communities thrive while you explore with purpose.",
  },
];

const TourGuideHome = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Define navigation links (same as GuideProfile, TourCenter)
  const navLinks = [
    { label: "Home", path: "/TourGuideHome" },
    { label: "About", path: "/TourGuideAbout" },
    { label: "Profile", path: "/GuideAccount" },
    { label: "Dashboard", path: "/GuideDashboard" },
    { label: "Tour Center", path: "/TourCenter" },
    { label: "Logout", path: "/Home" }, // Placeholder for logout behavior
  ];

  // Handle clicks on menu links
  const handleNavClick = (path) => {
    if (path === "/Logout") {
      const confirmed = window.confirm("Are you sure you want to logout?");
      if (confirmed) {
        navigate("/Home"); // Redirect to Home after logout
      }
      // If canceled, stay on the same page
    } else {
      navigate(path); // Navigate normally
    }
  };

  return (
    <div>
      {/* Navigation Menu */}
      <MenuBar links={navLinks} handleNavClick={handleNavClick} />

      {/* Hero Image Section */}
      <section>
        <ImageBlock
          image={heroImagePath}
          title="Meet, Explore, and Experience"
          subtitle="The Saudi Way!"
        />
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <FeatureCard title="What Makes Us Different" services={services} />
      </section>

      {/* How It Works Section */}
      <section className="py-5">
        <HowItWorks />
      </section>

      {/* Final Tagline and Activity Cards */}
      <section className="text-center py-5 bg-light">
        <h2 className="mb-5">
          Explore Saudi Like Never Before!
        </h2>
        <CardSlider>
          <Activity customLink="/ViewActivity" />
          <Activity customLink="/ViewActivity" />
          <Activity customLink="/ViewActivity" />
        </CardSlider>
      </section>
    </div>
  );
};

export default TourGuideHome;
