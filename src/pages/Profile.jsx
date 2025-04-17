import React, { useState, useRef } from 'react';
import '../styles/main.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Skyward Journeys");
  const [overview, setOverview] = useState("Skyward Journeys is a premium travel and adventure company specializing in desert experiences and outdoor excursions.");
  const [about, setAbout] = useState("At Skyward Journeys, we believe that every journey should be as extraordinary as the destination.");
  const [email, setEmail] = useState("Skyward@gmail.com");
  const [phone, setPhone] = useState("966556748762");
  const [telephone, setTelephone] = useState("01778655");

  const [certifications, setCertifications] = useState(["/maroof.jpg"]);
    const [services, setServices] = useState([
    {
      image: "/hiking in desert.jpg",
      title: "Hiking",
      description: "Experience the thrill of hiking! Walk through scenic trails, breathe fresh air, and discover the beauty of nature – one step at a time."
    },
    {
      image: "/camles-riding.jpg",
      title: "Camel Riding",
      description: "Ride through the golden sands on a camel’s back! Feel the rhythm of the desert, enjoy the calm breeze, and connect with timeless Bedouin tradition."
    }
  ]);
  const [logo, setLogo] = useState("/skyward.jpg");

  const logoInputRef = useRef(null);
  const certInputRef = useRef(null);
  const [newServiceImage, setNewServiceImage] = useState(null);
  const [newServiceTitle, setNewServiceTitle] = useState("");
  const [newServiceDescription, setNewServiceDescription] = useState("");

  const handleRemoveCert = (index) => {
    const updated = [...certifications];
    updated.splice(index, 1);
    setCertifications(updated);
  };

  const handleRemoveService = (index) => {
    const updated = [...services];
    updated.splice(index, 1);
    setServices(updated);
  };

  const handleAddService = () => {
    if (newServiceImage && newServiceTitle) {
      setServices([
        ...services,
        {
          image: newServiceImage,
          title: newServiceTitle,
          description: newServiceDescription
        }
      ]);
      setNewServiceImage(null);
      setNewServiceTitle("");
      setNewServiceDescription("");
    }
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
        <h2 className="section-title">Services Offered</h2>
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-image-wrapper">
                <img src={service.image} className="service-image" alt={service.title} />
                {isEditing && (
                  <button className="delete-btn" onClick={() => handleRemoveService(i)}>🗑</button>
                )}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
          {isEditing && (
            <div className="service-card">
              <div className="service-image-wrapper">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setNewServiceImage(url);
                    }
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Title"
                value={newServiceTitle}
                onChange={(e) => setNewServiceTitle(e.target.value)}
                className="body-text"
              />
              <textarea
                placeholder="Description"
                value={newServiceDescription}
                onChange={(e) => setNewServiceDescription(e.target.value)}
                className="body-text"
              />
              <button
                className="upload-btn"
                style={{ position: 'static', marginTop: '10px' }}
                onClick={handleAddService}
              >
                Add
              </button>
            </div>
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

      <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save Changes" : "Edit Profile"}
      </button>
    </div>
  );
};

export default Profile;
