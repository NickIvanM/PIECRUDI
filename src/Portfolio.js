import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Nick Ivan Mariano Portfolio</h1>

      <div className="row justify-content-center">
        {/* Project Card */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Student Management System</h5>
              <p className="card-text">
                A CRUD system with login, search, and user authentication.
              </p>
              <a
                 href="https://crudipie.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>

        {/* Add more projects here */}
      </div>
    </div>
  );
}

export default Portfolio;
