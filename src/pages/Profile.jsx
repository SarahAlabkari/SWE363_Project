
import React, { useState, useRef } from 'react';
import '../styles/main.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Skyward Journeys");
  const [overview, setOverview] = useState("Skyward Journeys is a premier travel agency...");
  const [about, setAbout] = useState("FOR FUN AND ADVENTURE");
  const [email, setEmail] = useState("xxxxx@gmail.com");
  const [phone, setPhone] = useState("966xxxxxxx");
  const [telephone, setTelephone] = useState("022xxxxxxxx");

  const [certifications, setCertifications] = useState([]);
  const [services, setServices] = useState([
    "Dune Bashing",
    "Desert Camping",
    "Stargazing",
    "Henna Painting"
  ]);
  const [logo, setLogo] = useState("/logo-desert.png");

  const logoInputRef = useRef(null);
  const certInputRef = useRef(null);

  const handleRemoveCert = (index) => {
    const updated = [...certifications];
    updated.splice(index, 1);
    setCertifications(updated);
  };

  const handleAddService = () => {
    const newService = prompt("Enter new service name:");
    if (newService) setServices([...services, newService]);
  };

  const handleRemoveService = (index) => {
    const updated = [...services];
    updated.splice(index, 1);
    setServices(updated);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Welcome {name}!</h1>

      <div className="profile-header section">
        {isEditing ? (
          <div style={{ position: 'relative' }}>
            <img className="profile-logo" src={logo} alt="Company Logo" />
            <button className="upload-btn" onClick={() => logoInputRef.current.click()}>
              Upload
            </button>
            <input
              type="file"
              accept="image/*"
              ref={logoInputRef}
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setLogo(url);
                }
              }}
            />
          </div>
        ) : (
          <img className="profile-logo" src={logo} alt="Company Logo" />
        )}

        <div className="profile-summary">
          <h2 className="section-title">Organization overview:</h2>
          {isEditing ? (
            <textarea
              className="body-text"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            />
          ) : (
            <p className="body-text">{overview}</p>
          )}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">About Us</h2>
        {isEditing ? (
          <textarea
            className="body-text"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        ) : (
          <p className="body-text">{about}</p>
        )}
      </div>

      <div className="section">
        <h2 className="section-title">Our Contact Info:</h2>
        {isEditing ? (
          <>
            <input type="text" className="body-text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" className="body-text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" className="body-text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
          </>
        ) : (
          <>
            <p className="body-text">Email: {email}</p>
            <p className="body-text">Phone: {phone}</p>
            <p className="body-text">Telephone: {telephone}</p>
          </>
        )}
      </div>

      <div className="section">
        <h2 className="section-title">Services Offered</h2>
        <div className="certs-list">
          {services.map((service, i) => (
            <div key={i} className="cert-box">
              <span className="body-text">{service}</span>
              {isEditing && <button onClick={() => handleRemoveService(i)}>🗑</button>}
            </div>
          ))}
          {isEditing && (
            <button className="add-button" onClick={handleAddService}>+ Add</button>
          )}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Certifications</h2>
        <div className="certs-list">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-box">
              <img src={cert} alt={`Certificate ${i + 1}`} />
              {isEditing && <button onClick={() => handleRemoveCert(i)}>🗑</button>}
            </div>
          ))}
          {isEditing && (
            <>
              <button className="add-button" onClick={() => certInputRef.current.click()}>+ Add</button>
              <input
                type="file"
                accept="image/*"
                ref={certInputRef}
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setCertifications([...certifications, url]);
                  }
                }}
              />
            </>
          )}
        </div>
      </div>

      <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save Changes" : "Edit Profile"}
      </button>
    </div>
  );
};

export default Profile;
