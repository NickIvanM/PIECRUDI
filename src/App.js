import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">BSIS-3A</a>
        </div>
      </nav>
      <Portfolio />
    </>
  );
}

export default App;
