
import React from 'react';

const FeatureCard = ({ title, services }) => {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h2 className="mb-5 fw-bold">{title}</h2>
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card p-4 h-100">
                <div className="card-body">
                  <div className="h1 mb-3">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
