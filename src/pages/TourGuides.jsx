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

    {   image: 'https://via.placeholder.com/100',
        name: 'Lamees Alikhwan',
        bio: 'Knows the best local coffeeshops!',
      },

      { image: 'https://via.placeholder.com/100',
        name: 'Sarah Alabkari',
        bio: 'Loves cats!',
      },

      { image: 'https://via.placeholder.com/100',
        name: 'Norah Alkuwaihes',
        bio: 'Your funniest Tour Guide!',
      },

  ];

const TourGuides = () => {
    const navLinks = [
        { label: "Home", path: "/pages/Home"},
        { label: "About", path: "/" },
        { label: "Where To?", path: "/" },
        { label: "Find a Local", path: "/" },
        { label: "My Plan", path: "/" },
        { label: "Wishlist", path: "/" },
        { label: "Login", path: "/" },
      ];

      const handleCardClick = (name) => {
        alert(`Clicked on ${name}'s profile`);
        // Or navigate to their profile page
      };

      return (
        <div> 
        <div>
            <MenuBar links={navLinks} />
        </div>
        <div className="container-fluid p-0">
            <ImageBlock 
            image={""}
            title="Meet Your Local Guide"
            subtitle="Discover the city through the eyes of a Saudi local!">
            </ImageBlock>
            </div>
            <div className="container py-5">
      <div className="row">
        {dummyUsers.map((user, idx) => (
          <div key={idx} className="col-sm-6 col-md-4 col-lg-3 mb-4">
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