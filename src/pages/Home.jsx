import React from "react";
import MenuBar from "../components/MenuBar";
import ImageBlock from "../components/ImageBlock";
import FeatureCard from "../components/FeatureCard";
import HowItWorks from "../components/HowItWorks";
import Activity from "../components/Activity";
import ActivitiesCarousel from "../components/ActivitiesCarousel";
// ✅ If the image is in /public, use this path. Otherwise import it.
const heroImagePath = "/hero9.png"; // Make sure this exists in your public folder

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

const navLinks = [
  { label: "Home", path: "/pages/Home" },
  { label: "About", path: "/pages/About" },
  { label: "Where To?", path: "/WhereTo" },
  { label: "Find a Local", path: "/pages/TourGuides" },
  { label: "My Plan", path: "/pages/MyPlan" },
  { label: "Wishlist", path: "/pages/MyWishlist" },
  { label: "Login", path: "/" },
];

const Home = () => {
  return (
    <div>
      {/* Navigation */}
      <MenuBar links={navLinks} />

      {/* Hero Image */}
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

      {/* Final Tagline */}
      <section className="text-center py-5 bg-light">
        <h2 className="fw-bold">Explore Saudi Like Never Before</h2>
        <ActivitiesCarousel/>
      </section>
    </div>
  );
};

export default Home;
