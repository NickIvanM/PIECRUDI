import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
  const projects = [
    {
      title: "Student Management System",
      description: "A CRUD system with login, search, and user authentication.",
      link: "https://crudipie.vercel.app/"
    },
    {
      title: "Mobile App",
      description: "pwedi sawa",
      link: "https://appetize.io/embed/b_clf3yzcnyyg5af25nlkyh7d7ty?device=pixel9pro&launchUrl=exp%3A%2F%2Fu.expo.dev%2F933fd9c0-1666-11e7-afca-d980795c5824%3Fruntime-version%3Dexposdk%253A54.0.0%26channel-name%3Dproduction%26snack%3D%2540bang08%252Fnick%26snack-channel%3DV2BL2zRnOG&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&appearance=dark&deviceColor=white&scale=auto&orientation=portrait&centered=both"
    },
    
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Nick Ivan Mariano Portfolio</h1>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
