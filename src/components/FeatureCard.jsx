import React from "react";

const FeatureCard = ({ title, services }) => {
  return (
    <section className=" feature-card-section">
      <div className="container text-center">
        <h2 className="mb-5">
          {title}
        </h2>

        {/* Centered horizontal scrollable card row */}
        <div className="d-flex justify-content-center overflow-auto gap-4 px-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="card flex-shrink-0"
              style={{ width: "300px", minWidth: "300px" }}
            >
              <div className="card-body">
                <i className={`bi ${service.icon} fs-1 mb-3`}></i>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
