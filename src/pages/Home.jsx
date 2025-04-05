import React from "react";
import MenuBar from "../components/MenuBar";
import ImageBlock from "../components/ImageBlock";
import FeatureCard from '../components/FeatureCard';
import HowItWorks from "../components/HowItWorks";

const services = [
  {
    icon: 'bi-geo-alt',
    title: 'Local Expertise',
    description: "Discover hidden gems and authentic experiences guided by locals who truly know their city. With Jaddwill, you're not just visiting — you're exploring through the eyes of someone who lives there."
  },
  {
    icon: 'bi-sliders',
    title: 'Personalized Trips',
    description:"Every traveler is unique — your journey should be too. Jaddwill matches you with personalized experiences based on your interests, pace, and travel style. No cookie-cutter tours, just your kind of adventure."
  },
  {
    icon: 'bi-people',
    title: 'Supporting Local Communities',
    description: "Your travel choices make a difference. By booking through Jaddwill, you directly support local guides, artisans, and small businesses — helping communities thrive while you explore with purpose."
  },
];

const Home = () => {
    const navLinks = [
      { label: "Home", path: "/" },
      { label: "About", path: "/" },
      { label: "Where To?", path: "" },
      { label: "Find a Local", path: "/pages/TourGuides" },
      { label: "My Plan", path: "/" },
      { label: "Wishlist", path: "/" },
      { label: "Login", path: "/" },
    ];
  
    return (
      <div>
        <MenuBar links={navLinks} />
        <div className="container-fluid p-0">
        <ImageBlock
        image={"hero9.png"}
        title="Meet, Explore, and Experience"
        subtitle="The Saudi Way!"
     />
      </div>
      <div>
      <FeatureCard title="What Makes Us Different" services={services} />
      </div>
      <div>
      <HowItWorks />
      </div>

      <div>
      <h2>Explore Saudi Like Never Before</h2>
      </div>
      
      </div>
      
    );
  };
  
  export default Home;
