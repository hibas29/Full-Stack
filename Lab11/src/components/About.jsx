import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://via.placeholder.com/500x300"
            alt="About us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">About Us</h2>
          <p className="lead">
            We are passionate developers dedicated to building elegant, scalable, and user-friendly web applications. Our mission is to deliver high-quality software that solves real-world problems.
          </p>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-success me-2"></i> Clean and modular code</li>
            <li><i className="bi bi-check-circle-fill text-success me-2"></i> Responsive UI with Bootstrap</li>
            <li><i className="bi bi-check-circle-fill text-success me-2"></i> RESTful APIs and MongoDB integration</li>
            <li><i className="bi bi-check-circle-fill text-success me-2"></i> Continuous improvement and collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;