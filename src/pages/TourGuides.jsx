import React from 'react';
import UserProfileCard from '../components/UserProfileCard';
import MenuBar from '../components/MenuBar';
import ImageBlock from '../components/ImageBlock';

const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');

const dummyUsers = [
  {
    image: 'https://via.placeholder.com/100',
    name: 'Sara Al-Fulan',
    bio: 'Passionate guide in Riyadh.',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: 'Ahmed Al-Zahrani',
    bio: 'Loves desert adventures.',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: 'Lina Al-Qahtani',
    bio: 'Knows all the best local spots!',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: 'Lamees Alikhwan',
    bio: 'Knows the best local coffeeshops!',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: 'Sarah Alabkari',
    bio: 'Loves cats!',
  },
  {
    image: 'https://via.placeholder.com/100',
    name: 'Norah Alkuwaihes',
    bio: 'Your funniest Tour Guide!',
  },
];

const TourGuides = () => {
  const navLinks = [
    { label: "Home", path: "/Home" },
    { label: "About", path: "/About" },
    { label: "Where To?", path: "/WhereTo" },
    { label: "Find a Local", path: "/TourGuides" },
    { label: "My Plan", path: "/MyPlan" },
    { label: "Wishlist", path: "/MyWishlist" },
    { label: "Login", path: "/" },
  ];

  const handleCardClick = (name) => {
    alert(`Clicked on ${name}'s profile`);
  };

  return (
    <div>
      <MenuBar links={navLinks} />

      <div className="container-fluid p-0">
        <ImageBlock
          image="saudippl.jpg"
          title="Meet Your Local Guide"
          subtitle="Discover the city through the eyes of a Saudi local!"
        />
      </div>

      <div className="container py-5">
        {/* ✅ Center all user cards using justify-content-center */}
        <div className="row justify-content-center">
          {dummyUsers.map((user, idx) => (
            <div key={idx} className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
              <UserProfileCard
                image={user.image}
                name={user.name}
                bio={user.bio}
                onClick={() => handleCardClick(user.name)}
                matchPath={`/guide/${slugify(user.name)}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourGuides;
