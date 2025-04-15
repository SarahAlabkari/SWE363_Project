import React, { useState, useRef } from 'react';
import './DropdownMenu.css';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';


const saudiCities = [
  "Abha", "Alahssa", "Alqasim", "AlUla", "Bisha", "Buraidah", "Dammam",
  "Dhahran", "Hail", "Jazan", "Jeddah", "Jubail", "Khafji", "Khobar",
  "Mecca", "Medina", "Najran", "Qatif", "Rafha", "Riyadh", "Sakaka",
  "Tabuk", "Taif", "Tarout", "Yanbu"
];

function DropdownMenu() {
  const [search, setSearch] = useState('');
  const [showList, setShowList] = useState(false);
  const inputRef = useRef(null);

  const filteredCities = saudiCities.filter(city =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (city) => {
    setSearch(city);
    setShowList(false);
    inputRef.current.blur(); // closes dropdown immediately
  };

  return (
    <div className="dropdown-wrapper">
      <div className="search-container">
        <FiMenu className="icon-left" style={{ fontSize: '20px', flexShrink: 0 }}
        onClick={() => setShowList(prev => !prev)} />
        <input
          type="text"
          className="search-input"
          placeholder="Where To?"
          value={search}
          ref={inputRef}
          onFocus={() => setShowList(true)}
          onChange={(e) => setSearch(e.target.value)}
        />

{search && (
  <FiX
    className="icon-clear"
    onClick={() => {
      setSearch('');
      setShowList(false);
    }}
  />
)}

        <FiSearch className="icon-right" style={{ fontSize: '20px', flexShrink: 0 }} />
      </div>

      {showList && (
        <div className="custom-dropdown">
          {filteredCities.map((city, index) => (
            <div
              key={index}
              className="dropdown-item-custom"
              onMouseDown={() => handleSelect(city)} 
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
